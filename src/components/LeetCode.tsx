"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Trophy, Target, Flame, Sword, Shield, Crown,
  ChevronRight, Loader2, AlertTriangle, Zap, Activity,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const USERNAME = "abdkhaleel";
const PROXY_BASE = "https://corsproxy.io/?url=";
const GQL_URL = encodeURIComponent("https://leetcode.com/graphql/");

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeetCodeStats {
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
  totalSolved: number;
  rating: number;
  contestTitle: string;
  globalRanking: number;
  topPercentage: number;
  streak: number;
  totalActiveDays: number;
  beatsEasy: number | null;
  beatsMedium: number | null;
  beatsHard: number | null;
  heatmap: Record<string, number>;
  recentTitle: string;
  recentTimestamp: number;
}

// ─── GraphQL Fetcher ──────────────────────────────────────────────────────────

async function gql(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(`${PROXY_BASE}${GQL_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json;
}

// ─── Streak from raw submissionCalendar ──────────────────────────────────────

function computeStreak(calendarJson: string): number {
  let map: Record<string, number> = {};
  try { map = JSON.parse(calendarJson); } catch { return 0; }

  const DAY = 86400;
  const activeDays = new Set<number>();
  for (const [ts, count] of Object.entries(map)) {
    if (Number(count) > 0) activeDays.add(Math.floor(Number(ts) / DAY));
  }

  const todayDay = Math.floor(Date.now() / 1000 / DAY);
  let cursor = todayDay;
  if (!activeDays.has(cursor)) cursor -= 1;

  let streak = 0;
  while (activeDays.has(cursor)) { streak++; cursor--; }
  return streak;
}

// ─── Build heatmap ───────────────────────────────────────────────────────────

function buildHeatmap(calendarJson: string): Record<string, number> {
  let raw: Record<string, number> = {};
  try { raw = JSON.parse(calendarJson); } catch { return {}; }

  const result: Record<string, number> = {};
  for (const [ts, count] of Object.entries(raw)) {
    const d = new Date(Number(ts) * 1000);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    result[key] = (result[key] ?? 0) + count;
  }
  return result;
}

// ─── Data Fetcher ─────────────────────────────────────────────────────────────

async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const curYear = new Date().getFullYear();
  const prevYear = curYear - 1;

  const [profileRes, contestRes, calCurRes, calPrevRes, recentRes] =
    await Promise.all([
      gql(
        `query Profile($u: String!) {
          matchedUser(username: $u) {
            submitStats: submitStatsGlobal { acSubmissionNum { difficulty count } }
            problemsSolvedBeatsStats { difficulty percentage }
          }
          allQuestionsCount { difficulty count }
        }`,
        { u: USERNAME }
      ),
      gql(
        `query Contest($u: String!) {
          userContestRanking(username: $u) {
            rating globalRanking totalParticipants topPercentage
            badge { name }
          }
        }`,
        { u: USERNAME }
      ),
      gql(
        `query Cal($u: String!, $year: Int) {
          matchedUser(username: $u) {
            userCalendar(year: $year) { totalActiveDays submissionCalendar }
          }
        }`,
        { u: USERNAME, year: curYear }
      ),
      gql(
        `query Cal($u: String!, $year: Int) {
          matchedUser(username: $u) {
            userCalendar(year: $year) { submissionCalendar }
          }
        }`,
        { u: USERNAME, year: prevYear }
      ),
      gql(
        `query Recent($u: String!) {
          recentAcSubmissionList(username: $u, limit: 1) { title timestamp }
        }`,
        { u: USERNAME }
      ),
    ]);

  const user = profileRes.data?.matchedUser;
  const acNums: { difficulty: string; count: number }[] = user?.submitStats?.acSubmissionNum ??[];
  const allQ: { difficulty: string; count: number }[] = profileRes.data?.allQuestionsCount ??[];
  const beatsStats: { difficulty: string; percentage: number | null }[] = user?.problemsSolvedBeatsStats ??[];

  const solved = (d: string) => acNums.find((x) => x.difficulty === d)?.count ?? 0;
  const total = (d: string) => allQ.find((x) => x.difficulty === d)?.count ?? 0;
  const beats = (d: string) => beatsStats.find((x) => x.difficulty === d)?.percentage ?? null;

  const easySolved = solved("Easy");
  const mediumSolved = solved("Medium");
  const hardSolved = solved("Hard");
  const totalSolved = easySolved + mediumSolved + hardSolved;

  const contest = contestRes.data?.userContestRanking;
  const rating = Math.round(contest?.rating ?? 0);
  const globalRanking = contest?.globalRanking ?? 0;
  const topPct = contest?.topPercentage ?? 0;
  const badgeName: string = contest?.badge?.name ?? "Guardian";

  let mergedCal: Record<string, number> = {};
  try { mergedCal = JSON.parse(calPrevRes.data?.matchedUser?.userCalendar?.submissionCalendar ?? "{}"); } catch {}
  try {
    const cur = JSON.parse(calCurRes.data?.matchedUser?.userCalendar?.submissionCalendar ?? "{}");
    for (const [k, v] of Object.entries(cur)) {
      mergedCal[k] = ((mergedCal[k] as number) ?? 0) + Number(v);
    }
  } catch {}

  const streak = computeStreak(JSON.stringify(mergedCal));
  const totalActiveDays = calCurRes.data?.matchedUser?.userCalendar?.totalActiveDays ?? 0;
  
  // FIX: Build heatmap mapping from the merged calendar containing current AND previous year
  const heatmap = buildHeatmap(JSON.stringify(mergedCal));

  const recent = recentRes.data?.recentAcSubmissionList?.[0];

  return {
    easySolved, mediumSolved, hardSolved,
    easyTotal: total("Easy"),
    mediumTotal: total("Medium"),
    hardTotal: total("Hard"),
    totalSolved,
    rating,
    contestTitle: badgeName,
    globalRanking,
    topPercentage: topPct,
    streak,
    totalActiveDays,
    beatsEasy: beats("Easy"),
    beatsMedium: beats("Medium"),
    beatsHard: beats("Hard"),
    heatmap,
    recentTitle: recent?.title ?? "",
    recentTimestamp: Number(recent?.timestamp ?? 0),
  };
}

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });

  useEffect(() => { if (isInView) motionVal.set(value); }, [isInView, value, motionVal]);
  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toLocaleString();
    });
  },[spring]);

  return <span ref={ref} className={className}>0</span>;
}

// ─── SVG Radial Progress ──────────────────────────────────────────────────────

function RadialProgress({ percentage }: { percentage: number }) {
  const circleRef = useRef<SVGCircleElement>(null);
  const isInView = useInView(circleRef, { once: true });
  const [prog, setProg] = useState(0);

  useEffect(() => { if (isInView) setTimeout(() => setProg(percentage), 100); },[isInView, percentage]);

  const r = 42;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference - (prog / 100) * circumference;

  return (
    <div className="relative h-28 w-28 flex-shrink-0">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle
          ref={circleRef}
          cx="50" cy="50" r={r} fill="none"
          stroke="url(#goldGrad)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.33,1,0.68,1)" }}
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c8aa6e" />
            <stop offset="100%" stopColor="#f5d68a" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-gow-gold font-heading font-bold text-2xl leading-none">{percentage}%</span>
        <span className="text-gow-muted/60 text-[9px] uppercase tracking-widest mt-1">solved</span>
      </div>
      <motion.div animate={{ opacity:[0.3, 0.6, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-gow-gold/10 blur-xl" />
    </div>
  );
}

// ─── Heatmap ──────────────────────────────────────────────────────────────────

function SubmissionHeatmap({ heatmap }: { heatmap: Record<string, number> }) {
  // FIX: Properly align the calendar exactly to Sunday-Saturday columns
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentDayOfWeek = today.getDay(); // 0 is Sunday, 6 is Saturday
  const gridEndDate = new Date(today);
  gridEndDate.setDate(today.getDate() + (6 - currentDayOfWeek));

  const WEEKS = 26;
  const totalDays = WEEKS * 7;
  const startDate = new Date(gridEndDate);
  startDate.setDate(gridEndDate.getDate() - totalDays + 1);

  const cells: { date: string; count: number; isFuture: boolean }[] =[];

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const isFuture = d > today;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    cells.push({ date: key, count: isFuture ? 0 : (heatmap[key] ?? 0), isFuture });
  }

  const validCounts = cells.filter(c => !c.isFuture).map(c => c.count);
  const max = Math.max(...validCounts, 1);

  const intensity = (count: number, isFuture: boolean) => {
    if (isFuture) return "bg-transparent border-transparent pointer-events-none";
    if (count === 0) return "bg-white/[0.04] border-white/5";
    const p = count / max;
    if (p < 0.25) return "bg-gow-red/20 border-gow-red/15";
    if (p < 0.5)  return "bg-gow-red/40 border-gow-red/30";
    if (p < 0.75) return "bg-gow-red/65 border-gow-red/50";
    return "bg-gow-red border-gow-red/80 shadow-[0_0_7px_rgba(152,40,40,0.9)]";
  };

  const weeks: typeof cells[] =[];
  for (let w = 0; w < WEEKS; w++) weeks.push(cells.slice(w * 7, w * 7 + 7));

  return (
    <div className="flex">
      {/* Vertically aligned day-of-week labels corresponding to rows */}
      <div className="flex flex-col gap-[3px] pr-2 pt-[1px]">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <span key={i} className="h-[10px] w-[10px] flex items-center justify-center text-[7px] text-gow-muted/40 uppercase font-heading leading-none">
            {d}
          </span>
        ))}
      </div>

      <div className="flex gap-[3px] flex-nowrap">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((cell, di) => (
              <div
                key={di}
                title={cell.isFuture ? "" : `${cell.date}: ${cell.count} submission${cell.count !== 1 ? "s" : ""}`}
                className={`w-[10px] h-[10px] rounded-[2px] border ${intensity(cell.count, cell.isFuture)} transition-all duration-200 ${cell.isFuture ? "" : "hover:scale-125"} cursor-default`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Time Ago ─────────────────────────────────────────────────────────────────

function timeAgo(ts: number): string {
  if (!ts) return "";
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeetCodeStats()
      .then(setStats)
      .catch((e) => setError(e?.message ?? "Failed to load"))
      .finally(() => setLoading(false));
  },[]);

  const easyPct   = stats ? Math.round((stats.easySolved   / Math.max(stats.easyTotal,   1)) * 100) : 0;
  const mediumPct = stats ? Math.round((stats.mediumSolved / Math.max(stats.mediumTotal, 1)) * 100) : 0;
  const hardPct   = stats ? Math.round((stats.hardSolved   / Math.max(stats.hardTotal,   1)) * 100) : 0;
  const overallPct = stats
    ? Math.min(100, Math.round(
        (stats.totalSolved / Math.max(stats.easyTotal + stats.mediumTotal + stats.hardTotal, 1)) * 100
      ))
    : 0;

  const topPctDisplay = stats?.topPercentage ? `Top ${stats.topPercentage.toFixed(2)}%` : "—";

  return (
    <section id="leetcode" className="min-h-screen w-full py-24 px-6 bg-gow-bg relative flex flex-col justify-center overflow-hidden">

      {/* ── Atmosphere ─────────────────────────────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none z-0">
        <Sword className="w-[900px] h-[900px] text-gow-red rotate-45" style={{ filter: "blur(3px)" }} />
      </div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 opacity-[0.03] pointer-events-none select-none z-0">
        <Shield className="w-[400px] h-[400px] text-gow-gold" />
      </motion.div>
      <div className="absolute left-[10%] top-[15%] text-[12rem] text-gow-red/5 font-heading pointer-events-none select-none z-0 animate-pulse">ᚦ</div>
      <div className="absolute right-[8%] bottom-[20%] text-[15rem] text-gow-gold/5 font-heading pointer-events-none select-none z-0 rotate-12">ᛟ</div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(152,40,40,0.12)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,40,40,0.08)_0%,#0c0e12_80%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,170,110,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div key={i}
            initial={{ y: "100vh", x: `${(i + 1) * 12}%`, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 0.6, 0.3, 0], scale:[0.8, 1.2, 1, 0.8] }}
            transition={{ duration: 8 + i * 1.5, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
            className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? "bg-gow-red" : i % 3 === 1 ? "bg-orange-500" : "bg-gow-gold"}`}
            style={{ filter: "blur(1px)" }}
          />
        ))}
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto w-full z-10 relative">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span initial={{ width: 0 }} whileInView={{ width: "3rem" }} viewport={{ once: true }} className="h-[2px] bg-gradient-to-r from-transparent to-gow-gold/60" />
            <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="text-gow-gold font-heading text-2xl tracking-widest drop-shadow-[0_0_15px_rgba(200,170,110,0.6)]">IV.</motion.span>
            <motion.span initial={{ width: 0 }} whileInView={{ width: "3rem" }} viewport={{ once: true }} className="h-[2px] bg-gradient-to-l from-transparent to-gow-gold/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-heading uppercase tracking-widest relative inline-block mb-4">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-gow-text to-gow-muted"
              style={{ filter: "drop-shadow(0 0 25px rgba(200, 170, 110, 0.2)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8))" }}>
              Combat Records
            </span>
            <motion.span animate={{ opacity:[0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -left-12 top-1/2 -translate-y-1/2 text-3xl text-gow-red/40">ᛋ</motion.span>
            <motion.span animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute -right-12 top-1/2 -translate-y-1/2 text-3xl text-gow-gold/40">ᛏ</motion.span>
          </h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 text-gow-muted text-lg font-body uppercase tracking-widest relative">
            <p className="mb-3">Muspelheim Trials & Arena Stats</p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "5rem" }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="h-[2px] bg-gradient-to-r from-gow-red/50 via-gow-gold/50 to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
              <Loader2 className="w-14 h-14 text-gow-gold/60" />
            </motion.div>
            <p className="text-gow-muted uppercase tracking-widest text-sm font-heading">Consulting the Fates…</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <AlertTriangle className="w-12 h-12 text-gow-red/70" />
            <p className="text-gow-muted text-sm font-heading uppercase tracking-widest">The ravens could not deliver</p>
            <p className="text-gow-muted/50 text-xs">{error}</p>
          </div>
        )}

        {/* Main Grid */}
        {!loading && !error && stats && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* ═══ LEFT: Guardian Card ══════════════════════════════════ */}
              <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="group relative bg-gradient-to-br from-[#13161d] to-[#0f1117] border-2 border-gow-gold/40 p-8 overflow-hidden shadow-2xl"
                style={{ clipPath: "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)" }}
              >
                <div className="absolute inset-[5px] border border-gow-gold/15 group-hover:border-gow-gold/50 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, calc(100% - 23px) 0, 100% 23px, 100% 100%, 0 100%)" }} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-gow-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div animate={{ opacity:[0.03, 0.06, 0.03], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-10 -right-10 text-[20rem] text-gow-gold/5 font-heading pointer-events-none select-none">ᚹ</motion.div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gow-gold/50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gow-gold/30" />

                {/* Rank + Rating */}
                <div className="relative z-10 flex justify-between items-start mb-8 border-b-2 border-gow-muted/20 pb-6">
                  <div>
                    <h3 className="text-gow-muted/60 uppercase tracking-[0.25em] text-xs mb-3 font-heading">Current Rank</h3>
                    <h2 className="text-4xl md:text-5xl font-heading text-white font-bold flex items-center gap-3">
                      {stats.contestTitle}
                      <motion.div animate={{ rotate:[0, 10, -10, 0], y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                        <Crown className="w-9 h-9 text-gow-gold fill-gow-gold/20 drop-shadow-[0_0_15px_rgba(200,170,110,0.6)]" />
                      </motion.div>
                    </h2>
                  </div>
                  <div className="text-right">
                    <h3 className="text-gow-muted/60 uppercase tracking-[0.25em] text-xs mb-3 font-heading">Rating</h3>
                    <p className="text-5xl font-heading text-gow-gold drop-shadow-[0_0_20px_rgba(200,170,110,0.4)]">
                      <AnimatedCounter value={stats.rating} />
                    </p>
                  </div>
                </div>

                {/* Global Ranking */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="relative z-10 mb-8 p-5 bg-gow-bg border-2 border-gow-muted/30 flex items-center justify-between group-hover:border-gow-gold/40 transition-all duration-500 hover:-translate-y-[2px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-gow-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-gow-red/15 rounded-full border-2 border-gow-red/30 relative">
                      <Trophy className="text-gow-red w-6 h-6 relative z-10" />
                      <motion.div animate={{ scale:[1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gow-red/30 rounded-full blur-md" />
                    </div>
                    <div>
                      <span className="block text-gow-text font-heading uppercase text-sm tracking-wide">Global Standing</span>
                      <span className="text-xs text-gow-muted uppercase tracking-wider">Contest Rank</span>
                    </div>
                  </div>
                  <div className="text-right relative z-10">
                    <p className="text-3xl font-bold text-white mb-1"><AnimatedCounter value={stats.globalRanking} /></p>
                    <p className="text-xs font-bold text-green-400 uppercase tracking-widest">{topPctDisplay}</p>
                  </div>
                </motion.div>

                {/* Streak + Active Days */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="group/s flex flex-col items-center justify-center p-5 bg-gow-bg/70 border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover/s:opacity-100 transition-opacity" />
                    <motion.div animate={{ scale: [1, 1.15, 1], filter:["drop-shadow(0 0 8px rgba(255,100,0,0.5))", "drop-shadow(0 0 18px rgba(255,100,0,0.9))", "drop-shadow(0 0 8px rgba(255,100,0,0.5))"] }}
                      transition={{ duration: 2, repeat: Infinity }} className="text-orange-400 mb-2 relative z-10">
                      <Flame className="w-7 h-7" />
                    </motion.div>
                    <p className="text-3xl font-heading text-white relative z-10"><AnimatedCounter value={stats.streak} /></p>
                    <span className="text-gow-muted/70 text-[10px] uppercase tracking-widest relative z-10 mt-1">Day Streak</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="group/a flex flex-col items-center justify-center p-5 bg-gow-bg/70 border-2 border-gow-gold/20 hover:border-gow-gold/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gow-gold/8 to-transparent opacity-0 group-hover/a:opacity-100 transition-opacity" />
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-gow-gold mb-2 relative z-10">
                      <Activity className="w-7 h-7" />
                    </motion.div>
                    <p className="text-3xl font-heading text-white relative z-10"><AnimatedCounter value={stats.totalActiveDays} /></p>
                    <span className="text-gow-muted/70 text-[10px] uppercase tracking-widest relative z-10 mt-1">Active Days</span>
                  </motion.div>
                </div>

                {/* Streak badges */}
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {[
                    { label: "200 Day", threshold: 200, color: "text-orange-500" },
                    { label: "100 Day", threshold: 100, color: "text-orange-400" },
                    { label: "50 Day",  threshold: 50,  color: "text-orange-300" },
                  ].map((badge, i) => {
                    const earned = stats.streak >= badge.threshold;
                    return (
                      <motion.div key={i}
                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className={`group/b flex flex-col items-center justify-center py-3 bg-gow-bg/70 border-2 transition-all duration-300 relative overflow-hidden ${earned ? "border-orange-500/40 hover:border-orange-500/70" : "border-gow-muted/15 opacity-35"}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover/b:opacity-100 transition-opacity" />
                        <motion.div className={`mb-1 ${badge.color} relative z-10`} animate={earned ? { scale:[1, 1.1, 1] } : {}} transition={{ duration: 2.5, repeat: Infinity }}>
                          <Flame className="w-4 h-4" />
                        </motion.div>
                        <span className="text-gow-text text-[10px] font-bold uppercase tracking-wider relative z-10">{badge.label}</span>
                        <span className="text-gow-muted/50 text-[9px] mt-0.5 uppercase tracking-widest relative z-10">{earned ? "✓ Earned" : "Locked"}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Recent submission */}
                {stats.recentTitle && (
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
                    className="relative z-10 mt-5 flex items-center gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded-sm">
                    <Zap className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-green-400/80 text-[10px] uppercase tracking-widest block">Last Victory</span>
                      <span className="text-white/70 text-xs truncate block">{stats.recentTitle}</span>
                    </div>
                    <span className="text-gow-muted/50 text-[10px] flex-shrink-0">{timeAgo(stats.recentTimestamp)}</span>
                  </motion.div>
                )}
              </motion.div>

              {/* ═══ RIGHT: Arena Stats ═══════════════════════════════════ */}
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="flex flex-col justify-between gap-6">

                {/* Total Solved + Radial Ring */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-[#13161d] to-[#0f1117] border-2 border-gow-gold/30 p-8 flex justify-between items-center relative overflow-hidden group hover:border-gow-gold/60 transition-all duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}>
                  <motion.div className="absolute inset-0 bg-gow-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gow-gold/40" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
                  <div className="relative z-10">
                    <h3 className="text-gow-muted uppercase tracking-[0.25em] text-xs mb-2 font-heading">Total Victories</h3>
                    <p className="text-6xl font-heading text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <AnimatedCounter value={stats.totalSolved} />
                    </p>
                    <p className="text-gow-muted/50 text-xs uppercase tracking-widest mt-2">
                      of {(stats.easyTotal + stats.mediumTotal + stats.hardTotal).toLocaleString()} problems
                    </p>
                  </div>
                  <RadialProgress percentage={overallPct} />
                </motion.div>

                {/* Difficulty Bars */}
                <div className="flex flex-col gap-4 flex-grow">
                  <DifficultyBar label="Easy"   sub="Warmup Battles"  count={stats.easySolved}   total={stats.easyTotal}   pct={easyPct}   beats={stats.beatsEasy}   icon={<Shield className="w-5 h-5" />} color="text-cyan-400"  bg="bg-cyan-400"  borderColor="border-cyan-400/40"  glowColor="rgba(34,211,238,0.5)"  delay={0.3} />
                  <DifficultyBar label="Medium" sub="Standard Combat" count={stats.mediumSolved} total={stats.mediumTotal} pct={mediumPct} beats={stats.beatsMedium} icon={<Sword  className="w-5 h-5" />} color="text-gow-gold" bg="bg-gow-gold" borderColor="border-gow-gold/40" glowColor="rgba(200,170,110,0.5)" delay={0.4} />
                  <DifficultyBar label="Hard"   sub="Boss Fights"     count={stats.hardSolved}   total={stats.hardTotal}   pct={hardPct}   beats={stats.beatsHard}   icon={<Target className="w-5 h-5" />} color="text-gow-red"  bg="bg-gow-red"  borderColor="border-gow-red/40"  glowColor="rgba(152, 40, 40, 0.5)"   delay={0.5} />
                </div>
              </motion.div>
            </div>

            {/* ═══ Heatmap ═══════════════════════════════════════════════ */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="mt-8 bg-gradient-to-br from-[#13161d] to-[#0f1117] border-2 border-gow-muted/20 p-6 relative overflow-hidden group hover:border-gow-red/30 transition-all duration-500"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-gow-red/5 via-transparent to-gow-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <h3 className="text-gow-muted/60 uppercase tracking-[0.2em] text-xs font-heading mb-1">Battle Log</h3>
                  <p className="text-gow-text font-heading uppercase text-sm tracking-wide">Last 26 Weeks of Combat</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-gow-muted uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04] border border-white/5" />None</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[2px] bg-gow-red/40" />Low</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-[2px] bg-gow-red" style={{ boxShadow: "0 0 6px rgba(152,40,40,0.8)" }} />High</span>
                </div>
              </div>
              <div className="relative z-10 overflow-x-auto pb-1">
                <SubmissionHeatmap heatmap={stats.heatmap} />
              </div>
            </motion.div>

            {/* ═══ Enter Arena Button ════════════════════════════════════ */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-16 text-center relative">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gow-red/40 to-transparent" />
                <span className="text-gow-red/40 text-sm font-heading">᛭</span>
                <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gow-red/40 to-transparent" />
              </div>
              <a href="https://leetcode.com/u/abdkhaleel/" target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-10 py-4 bg-transparent overflow-hidden group">
                <div className="absolute inset-0 border-2 border-gow-red/50 group-hover:border-gow-red transition-all duration-500"
                  style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }} />
                <div className="absolute inset-[3px] border border-gow-red/20 group-hover:border-gow-gold/40 transition-all duration-500"
                  style={{ clipPath: "polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 13px 100%, 0 calc(100% - 13px))" }} />
                <div className="absolute inset-0 bg-gow-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="absolute -top-2 -left-2 text-gow-red group-hover:text-gow-gold text-sm transition-colors">ᛏ</span>
                <span className="absolute -bottom-2 -right-2 text-gow-red group-hover:text-gow-gold text-sm transition-colors">ᛏ</span>
                <span className="relative z-10 text-gow-red group-hover:text-white transition-colors uppercase tracking-widest font-heading text-sm">Enter The Arena</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="relative z-10">
                  <ChevronRight className="w-5 h-5 text-gow-red group-hover:text-white transition-colors" />
                </motion.div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 40px rgba(152, 40, 40, 0.3)" }} />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── Difficulty Bar ───────────────────────────────────────────────────────────

function DifficultyBar({
  label, sub, count, total, pct, beats,
  icon, color, bg, borderColor, glowColor, delay,
}: {
  label: string; sub: string;
  count: number; total: number;
  pct: number;
  beats: number | null;
  icon: React.ReactNode;
  color: string; bg: string; borderColor: string;
  glowColor: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay }}
      whileHover={{ scale: 1.02, x: 5 }}
      className={`bg-gradient-to-r from-[#13161d] to-[#0f1117] border-2 ${borderColor} p-5 flex items-center justify-between group hover:border-opacity-100 transition-all duration-300 relative overflow-hidden shadow-lg`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-15 pointer-events-none" />

      {/* Background fill animated to real pct */}
      <motion.div
        initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        className={`absolute left-0 top-0 bottom-0 ${bg} opacity-[0.07]`}
      />

      <div className="flex items-center gap-4 relative z-10">
        <div className={`p-3 rounded bg-gow-bg border-2 border-gow-muted/30 ${color} relative overflow-hidden group-hover:scale-110 transition-all duration-300`}>
          {icon}
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 ${bg} opacity-20 blur-sm rounded`} />
        </div>
        <div>
          <h4 className={`${color} font-heading uppercase text-base tracking-wide group-hover:text-white transition-colors`}>{label}</h4>
          <p className="text-gow-muted text-[11px] uppercase tracking-wider">{sub}</p>
          {beats !== null && (
            <p className="text-[10px] mt-0.5 font-heading" style={{ color: glowColor }}>
              Beats {beats.toFixed(1)}% of users
            </p>
          )}
        </div>
      </div>

      <div className="text-right relative z-10">
        <p className="text-2xl font-bold text-white mb-1 group-hover:text-gow-gold transition-colors">
          {count.toLocaleString()}
          <span className="text-gow-muted/40 text-sm font-normal ml-1">/ {total.toLocaleString()}</span>
        </p>
        <div className="flex items-center justify-end gap-2">
          {/* Bar driven by real pct */}
          <div className="h-1.5 w-20 bg-gow-muted/20 rounded-full overflow-hidden border border-gow-muted/30">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              className={`h-full ${bg} relative`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          </div>
          <span className={`text-xs font-heading ${color} font-bold tabular-nums w-9 text-right`}>{pct}%</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-40 group-hover:opacity-100 transition-opacity"
        style={{ borderColor: label === "Easy" ? "#22d3ee" : label === "Medium" ? "#c8aa6e" : "#982828", clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
    </motion.div>
  );
}