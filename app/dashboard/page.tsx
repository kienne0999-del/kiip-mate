"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { dashboardTranslations } from "@/data/translations";
type Stats = {
  totalQuestions: number;
  correctAnswers: number;
  examCount: number;
};
type LevelStats = {
  totalQuestions: number;
  correctAnswers: number;
  examCount: number;
};
type WritingHistoryItem = {
  id: number;
  level: string;
  promptId: number;
  title: string;
  answer: string;
  characterCount: number;
  date: string;
};
type SpeakingHistoryItem = {
  id: number;
  level: string;
  promptId: number;
  title: string;
  question: string;
  date: string;
};
type ExamHistoryItem = {
  id: number;
  level: string;
  totalQuestions: number;
  correctAnswers: number;
  percent: number;
  date: string;
};
const levelTargets: Record<
  string,
  {
    learn: number;
    practice: number;
    writing: number;
    speaking: number;
    exam: number;
  }
> = {
  "1": {
    learn: 10,
    practice: 10,
    writing: 5,
    speaking: 5,
    exam: 5,
  },

  "2": {
    learn: 15,
    practice: 15,
    writing: 5,
    speaking: 5,
    exam: 5,
  },

  "3": {
    learn: 20,
    practice: 20,
    writing: 8,
    speaking: 8,
    exam: 5,
  },

  "4": {
    learn: 20,
    practice: 20,
    writing: 10,
    speaking: 10,
    exam: 10,
  },

  "5": {
    learn: 20,
    practice: 20,
    writing: 10,
    speaking: 10,
    exam: 10,
  },
};
export default function DashboardPage() {
  const { language } = useLanguage();

const text =
  dashboardTranslations[language] ||
  dashboardTranslations.vi;
  const [stats, setStats] = useState<Stats>({
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  });

  const [wrongCount, setWrongCount] =
    useState(0);
const [levelStats, setLevelStats] = useState<
  Record<string, LevelStats>
>({

  "1": {
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  },
  "2": {
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  },
  "3": {
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  },
  "4": {
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  },
  "5": {
    totalQuestions: 0,
    correctAnswers: 0,
    examCount: 0,
  },
});
const [history, setHistory] =
  useState<ExamHistoryItem[]>([]);
  const [historyLevel, setHistoryLevel] =
  useState("all");
  const [writingHistory, setWritingHistory] =
  useState<WritingHistoryItem[]>([]);
  const [speakingHistory, setSpeakingHistory] =
  useState<SpeakingHistoryItem[]>([]);
  const [learnProgress, setLearnProgress] = useState<
  Record<string, number>
>({
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
});
const [practiceProgress, setPracticeProgress] = useState<
  Record<string, number>
>({
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
});
const [lastLearningPath, setLastLearningPath] =
  useState<string | null>(null);
  const [lastPracticePath, setLastPracticePath] =
  useState<string | null>(null);
  const [lastWritingPath, setLastWritingPath] =
  useState<string | null>(null);
const [lastSpeakingPath, setLastSpeakingPath] =
  useState<string | null>(null);
  useEffect(() => {
  const savedStats =
    localStorage.getItem("kiipStats");

  if (savedStats) {
    setStats(JSON.parse(savedStats));
  }

  let totalWrong = 0;

  for (let level = 1; level <= 5; level++) {
    const savedWrong =
      localStorage.getItem(
        `wrongQuestions-level-${level}`
      );

    if (savedWrong) {
      const questions =
        JSON.parse(savedWrong);

      totalWrong += questions.length;
    }
  }

  setWrongCount(totalWrong);

  const newLevelStats: Record<
    string,
    LevelStats

  > = {};

  for (let level = 1; level <= 5; level++) {
    const savedLevelStats =
      localStorage.getItem(
        `kiipStats-level-${level}`
      );

    if (savedLevelStats) {
      newLevelStats[String(level)] =
        JSON.parse(savedLevelStats);
    } else {
      newLevelStats[String(level)] = {
        totalQuestions: 0,
        correctAnswers: 0,
        examCount: 0,
      };
    }
  }

  setLevelStats(newLevelStats);

const savedHistory =
  localStorage.getItem("examHistory");

if (savedHistory) {
  setHistory(JSON.parse(savedHistory));
}
const savedWriting =
  localStorage.getItem("writingHistory");

if (savedWriting) {
  setWritingHistory(JSON.parse(savedWriting));
}
const savedSpeaking =
  localStorage.getItem("speakingHistory");

if (savedSpeaking) {
  setSpeakingHistory(JSON.parse(savedSpeaking));
}
const newLearnProgress: Record<string, number> = {};

for (let level = 1; level <= 5; level++) {
  const savedLearn =
    localStorage.getItem(
      `learnProgress-level-${level}`
    );

  if (savedLearn) {
    const completedLessons =
      JSON.parse(savedLearn);

    newLearnProgress[String(level)] =
      completedLessons.length;
  } else {
    newLearnProgress[String(level)] = 0;
  }
}

setLearnProgress(newLearnProgress);
const newPracticeProgress: Record<string, number> = {};

for (let level = 1; level <= 5; level++) {
  const savedPractice =
    localStorage.getItem(
      `practiceProgress-level-${level}`
    );

  if (savedPractice) {
    const completedPractice =
      JSON.parse(savedPractice);

    newPracticeProgress[String(level)] =
      completedPractice.length;
  } else {
    newPracticeProgress[String(level)] = 0;
  }
}

setPracticeProgress(newPracticeProgress);
 
 const savedLastLearningPath =
  localStorage.getItem("lastLearningPath");

if (savedLastLearningPath) {
  setLastLearningPath(savedLastLearningPath);
}
const savedLastPracticePath =
  localStorage.getItem("lastPracticePath");

if (savedLastPracticePath) {
  setLastPracticePath(savedLastPracticePath);
}
const savedLastWritingPath =
  localStorage.getItem("lastWritingPath");

if (savedLastWritingPath) {
  setLastWritingPath(savedLastWritingPath);
}
const savedLastSpeakingPath =
  localStorage.getItem("lastSpeakingPath");

if (savedLastSpeakingPath) {
  setLastSpeakingPath(savedLastSpeakingPath);
}
}, []);
function getProgressStatus(percent: number): string {
  if (percent === 0) {
    return text.notStartedLabel ?? "Not Started";
  }

  if (percent < 100) {
    return text.inProgressLabel ?? "In Progress";
  }

  return text.completedStatusLabel ?? "Completed";
}

function getProgressStatusClass(status: string) {
  if (status === text.notStartedLabel) {
    return "bg-slate-100 text-slate-600";
  }

  if (status === text.inProgressLabel) {
    return "bg-blue-100 text-blue-700";
  }

  return "bg-green-100 text-green-700";
}

function getProgressBarClass(status: string) {
  if (status === text.notStartedLabel) {
    return "bg-slate-300";
  }

  if (status === text.inProgressLabel) {
    return "bg-blue-600";
  }

  return "bg-green-600";
}
  historyLevel === "all"
    ? history
    : history.filter(
        (item) => item.level === historyLevel
      );
const filteredHistory =
  historyLevel === "all"
    ? history
    : history.filter(
        (item) => item.level === historyLevel
      );
function clearHistory() {
  const confirmed = window.confirm(
  text.deleteHistoryConfirm
);

  if (!confirmed) {
    return;
  }

  localStorage.removeItem("examHistory");
  setHistory([]);
}
  const correctPercent =
    stats.totalQuestions > 0
      ? Math.round(
          (stats.correctAnswers /
            stats.totalQuestions) *
            100
        )
      : 0;

  return (

    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div>
          <p className="font-semibold text-blue-600">
            KIIP STUDY
          </p>

          <h1 className="mt-2 text-4xl font-bold">
  {text.title}
</h1>

          <p className="mt-3 text-slate-500">
  {text.subtitle}
</p>
{lastLearningPath && (
  <a
    href={lastLearningPath}
    className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
  >
    {text.continueLearn} →
  </a>
)}
{lastPracticePath && (
  <a
    href={lastPracticePath}
    className="ml-3 mt-5 inline-block rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-600"
  >
    {text.continuePractice} →
  </a>
)}
{lastWritingPath && (
  <a
    href={lastWritingPath}
    className="ml-3 mt-5 inline-block rounded-lg border border-green-600 px-5 py-3 font-semibold text-green-600"
  >
    {text.continueWriting} →
  </a>
)}
{lastSpeakingPath && (
  <a
    href={lastSpeakingPath}
    className="ml-3 mt-5 inline-block rounded-lg border border-purple-600 px-5 py-3 font-semibold text-purple-600"
  >
    {text.continueSpeaking} →
  </a>
)}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">

          <div className="rounded-2xl border bg-white p-6">
            <p className="text-sm text-slate-500">
              {text.questionsDoneLabel}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.totalQuestions}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <p className="text-sm text-slate-500">
              {text.correctRateLabel}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {correctPercent}%
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <p className="text-sm text-slate-500">
              {text.examsDoneLabel}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.examCount}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <p className="text-sm text-slate-500">
              {text.reviewQuestionsLabel}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {wrongCount}
            </p>
          </div>

        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">
              {text.resultOverviewTitle}
            </h2>
<section className="mt-8 rounded-2xl border bg-white p-6">
  <h2 className="text-xl font-bold">
    {text.levelStatsTitle}
  </h2>

  <div className="mt-6 space-y-6">
    {[1, 2, 3, 4, 5].map((level) => {
      const info =
        levelStats[String(level)];
const writingCount =
  writingHistory.filter(
    (item) => item.level === String(level)
  ).length;

const speakingCount =
  speakingHistory.filter(
    (item) => item.level === String(level)
  ).length;
const target = levelTargets[String(level)];

const completedParts =
  Math.min(
    learnProgress[String(level)],
    target.learn
  ) +
  Math.min(
    practiceProgress[String(level)],
    target.practice
  ) +
  Math.min(
    writingCount,
    target.writing
  ) +
  Math.min(
    speakingCount,
    target.speaking
  ) +
  Math.min(
    info.examCount,
    target.exam
  );

const totalTargets =
  target.learn +
  target.practice +
  target.writing +
  target.speaking +
  target.exam;

const percent =
  totalTargets > 0
    ? Math.round(
        (completedParts / totalTargets) * 100
      )
    : 0;
const status = getProgressStatus(percent);
const statusText =
  status === "Đang học"
    ? text.inProgressLabel
    : status === "Hoàn thành"
      ? text.completedStatusLabel
      : text.notStartedLabel;
  return (
  <div key={level}>
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            {text.levelLabel} {level}
          </p>

          <span
            className={`rounded-full px-2 py-1 text-xs ${getProgressStatusClass(
              status
            )}`}
          >
            {statusText}
          </span>
        </div>

        <div className="text-sm text-slate-500">
          <p className="mt-1 text-xs text-slate-400">
            {completedParts} / {totalTargets} {text.completedLabel}
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <span>
              {text.learnLabel} {learnProgress[String(level)] || "-"}
            </span>

            <span>
              {text.practiceLabel} {practiceProgress[String(level)] || "-"}
            </span>

            <span>
              {text.writingLabel} {writingCount} {text.lessonUnit}
            </span>

            <span>
              {text.speakingLabel} {speakingCount} {text.sessionUnit}
            </span>

            <span>
              {text.examLabel} {info.examCount} {text.examUnit}
            </span>

            <span>
              {info.totalQuestions} {text.questionUnit}
            </span>
          </div>
        </div>
      </div>

      <p className="font-bold">
        {percent}%
      </p>
    </div>

    <div className="mt-3 h-3 rounded-full bg-slate-100">
      <div
        className={`h-3 rounded-full ${getProgressBarClass(status)}`}
        style={{
          width: `${percent}%`,
        }}
      />
    </div>
  </div>
);
})}
  </div>
</section>
            <div className="mt-6">

              <div className="flex justify-between">
                <span>
                  {text.correctAnswerRateTitle}
                </span>

                <span className="font-semibold">
                  {correctPercent}%
                </span>
              </div>

              <div className="mt-3 h-3 rounded-full bg-slate-100">
                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{
                    width: `${correctPercent}%`,
                  }}
                />
              </div>

            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">
              {text.reviewSectionTitle}
            </h2>

            {wrongCount === 0 ? (
              <p className="mt-6 text-slate-500">
                {text.noReviewQuestions}
              </p>
            ) : (
              <>
                <p className="mt-6">
  {(text.wrongQuestionsSummary ?? "Bạn đang có {count} câu cần xem lại.").replace(
  "{count}",
  String(wrongCount)
)}
</p>

                <a
  href="/review"
  className="mt-4 inline-block font-semibold text-blue-600"
>
  {text.reviewQuestionsLabel} →
</a>
              </>
            )}

          </section>
<section className="mt-8 rounded-2xl border bg-white p-6">
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <h2 className="text-xl font-bold">
    {text.recentExamHistoryTitle}
  </h2>

  <div className="flex flex-wrap gap-3">
    <select
      value={historyLevel}
      onChange={(e) => setHistoryLevel(e.target.value)}
      className="rounded-lg border bg-white px-3 py-2"
    >
      <option value="all">{text.allLevelsLabel}</option>
      <option value="1">{text.levelLabel} 1</option>
<option value="2">{text.levelLabel} 2</option>
<option value="3">{text.levelLabel} 3</option>
<option value="4">{text.levelLabel} 4</option>
<option value="5">{text.levelLabel} 5</option>
    </select>

    <button
      onClick={clearHistory}
      className="rounded-lg border px-3 py-2 text-red-600"
    >
      {text.deleteHistoryLabel}
    </button>
  </div>
</div>

{filteredHistory.length === 0 ? (
    <p className="mt-6 text-slate-500">
      {text.noExamHistoryText}
    </p>
  ) : (
    <div className="mt-6 space-y-4">
{filteredHistory.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between gap-3 rounded-xl border p-4 md:flex-row md:items-center"
        >
          <div>
            <p className="font-semibold">
             {text.levelLabel} {item.level}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {item.date}
            </p>
          </div>

          <div className="text-right">
            <p className="font-bold">
              {item.correctAnswers} / {item.totalQuestions}
            </p>

            <p className="text-sm text-slate-500">
              {item.percent}%
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</section>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="font-bold">
              📝 {text.practiceLabel}
            </h2>

           <p className="mt-3 text-slate-500">
  {(text.questionsDoneSummary ?? "Đã làm {count} câu.").replace(
  "{count}",
  String(stats.totalQuestions)
)}
</p>
          </section>

         <section className="rounded-2xl border bg-white p-6">
  <h2 className="font-bold">
  🔥 {text.writingLabel}
</h2>

  <p className="mt-3 text-slate-500">
  {(text.writingSavedSummary ?? "Đã lưu {count} bài viết.").replace(
  "{count}",
  String(writingHistory.length)
)}
</p>

  {writingHistory.length > 0 && (
    <div className="mt-4 border-t pt-4">
      <p className="text-sm font-semibold">
  {text.recentLabel}
</p>

      <p className="mt-2 text-sm text-slate-600">
{text.levelLabel} {writingHistory[0].level}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        {writingHistory[0].title}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {writingHistory[0].date}
      </p>
    </div>
  )}
</section>
<section className="rounded-2xl border bg-white p-6">
  <h2 className="font-bold">
    🎤 ▶ {text.speakingHistoryTitle}
  </h2>

  <p className="mt-3 text-slate-500">
   {text.savedSpeakingCountLabel} {speakingHistory.length} {text.sessionUnit}.
  </p>

  {speakingHistory.length > 0 && (
    <div className="mt-4 border-t pt-4">
      <p className="text-sm font-semibold">
       {text.recentLabel}
      </p>

      <p className="mt-2 text-sm text-slate-600">
       {text.levelLabel} {speakingHistory[0].level}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        {speakingHistory[0].title}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {speakingHistory[0].date}
      </p>
    </div>
  )}

  <a
    href="/speaking-history"
    className="mt-4 inline-block font-semibold text-blue-600"
  >
   {text.viewSpeakingHistoryLabel} →
  </a>
</section>
        </div>

      </div>
    </main>
  );
}