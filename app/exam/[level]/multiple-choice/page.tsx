"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { questionData } from "@/data/questions";
import { useLanguage } from "@/app/components/LanguageProvider";
import { examMultipleChoiceTranslations } from "@/data/translations";
export default function MultipleChoiceExamPage() {
  const params = useParams();

  const level = params.level as string;

  const questions = useMemo(() => {
    const levelData =
      questionData[level as keyof typeof questionData];

    if (!levelData) return [];

  const allQuestions = Object.values(levelData).flat();

const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);

const examQuestionCount: Record<string, number> = {
  "1": 10,
  "2": 15,
  "3": 20,
  "4": 28,
  "5": 28,
};

const limit = examQuestionCount[level] ?? 10;

return shuffled.slice(0, limit);
  }, [level]);

  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState<(number | null)[]>(
  Array(questions.length).fill(null)
);

  const [finished, setFinished] = useState(false);

  const { language } = useLanguage();
const text =
  examMultipleChoiceTranslations[language] ||
  examMultipleChoiceTranslations.vi;
 const examTimeByLevel: Record<string, number> = {
  "1": 600,   // 10 phút
  "2": 900,   // 15 phút
  "3": 1200,  // 20 phút
  "4": 2400,  // 40 phút
  "5": 2400,  // 40 phút
};
const [timeLeft, setTimeLeft] = useState(
  examTimeByLevel[level] ?? 600
);

  useEffect(() => {
    if (finished) return;

    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished]);
useEffect(() => {
  if (!finished || questions.length === 0) {
    return;
  }

  const wrongQuestions = questions
    .map((item, index) => ({
      ...item,
      userAnswer: selected[index],
    }))
    .filter(
      (item) => item.userAnswer !== item.correct
    );

  localStorage.setItem(
    `wrongQuestions-level-${level}`,
    JSON.stringify(wrongQuestions)
  );
}, [finished, questions, selected, level]);
useEffect(() => {
  if (!finished || questions.length === 0) {
    return;
  }

  let correctCount = 0;

  selected.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correctCount++;
    }
  });

  const oldStats = JSON.parse(
    localStorage.getItem("kiipStats") ||
      `{
        "totalQuestions": 0,
        "correctAnswers": 0,
        "examCount": 0
      }`
  );

  const newStats = {
    totalQuestions:
      oldStats.totalQuestions + questions.length,

    correctAnswers:
      oldStats.correctAnswers + correctCount,

    examCount:
      oldStats.examCount + 1,
  };

  localStorage.setItem(
    "kiipStats",
    JSON.stringify(newStats)
  );
}, [finished, questions, selected]);
useEffect(() => {
  if (!finished || questions.length === 0) {
    return;
  }

  let correctCount = 0;

  selected.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correctCount++;
    }
  });

  const key = `kiipStats-level-${level}`;

  const oldLevelStats = JSON.parse(
    localStorage.getItem(key) ||
      `{
        "totalQuestions": 0,
        "correctAnswers": 0,
        "examCount": 0
      }`
  );

  const newLevelStats = {
    totalQuestions:
      oldLevelStats.totalQuestions + questions.length,

    correctAnswers:
      oldLevelStats.correctAnswers + correctCount,

    examCount:
      oldLevelStats.examCount + 1,
  };

  localStorage.setItem(
    key,
    JSON.stringify(newLevelStats)
  );
}, [finished, questions, selected, level]);
useEffect(() => {
  if (!finished || questions.length === 0) {
    return;
  }

  let correctCount = 0;

  selected.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correctCount++;
    }
  });

  const percent = Math.round(
    (correctCount / questions.length) * 100
  );

  const oldHistory = JSON.parse(
    localStorage.getItem("examHistory") || "[]"
  );

  const newItem = {
    id: Date.now(),
    level,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    percent,
    date: new Date().toLocaleString(),
  };

  const newHistory = [
    newItem,
    ...oldHistory,
  ].slice(0, 20);

  localStorage.setItem(
    "examHistory",
    JSON.stringify(newHistory)
  );
}, [finished, questions, selected, level]);
  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">
  {text.noQuestionsText}
</h1>

        </div>
      </main>
    );
  }

  const question = questions[current];

  function selectAnswer(index: number) {
    const newSelected = [...selected];

    newSelected[current] = index;

    setSelected(newSelected);
  }

  function calculateScore() {
    let score = 0;

    selected.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++;
      }
    });

    return score;}
  function calculatePercent() {
  const score = calculateScore();

  if (questions.length === 0) {
    return 0;
  }

  return Math.round(
    (score / questions.length) * 100
  );
}

function getPassScore() {
  const passScoreByLevel: Record<string, number> = {
    "1": 60,
    "2": 60,
    "3": 60,
    "4": 60,
    "5": 60,
  };

  return passScoreByLevel[level] ?? 60;
}

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  }

  if (finished) {
    const score = calculateScore();
const percent = calculatePercent();
const passScore = getPassScore();
const passed = percent >= passScore;
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <p className="font-semibold text-blue-600">
             {text.resultLabel}
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              {score} / {questions.length}
            </h1>
<p className="mt-3 text-2xl font-bold">
  {percent}%
</p>

<p
  className={`mt-3 font-semibold ${
    passed
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {passed ? text.passLabel : text.failLabel}
</p>
            <p className="mt-3 text-slate-500">
             {text.correctText} {score} / {questions.length}{" "}
             {text.questionText}.
            </p>

            <button
              onClick={() => {
                setCurrent(0);
                setSelected(
                  Array(questions.length).fill(null)
                );
                setFinished(false);
                setTimeLeft(examTimeByLevel[level] ?? 600);
              }}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white"
            >
             {text.retryButton}
            </button>
          </div>

          <div className="mt-8 space-y-5">
            {questions.map((item, index) => {
              const userAnswer = selected[index];

              const isCorrect =
                userAnswer === item.correct;

              const translation =
                item.translations[
                  language as keyof typeof item.translations
                ] ?? item.translations.vi;

              const explanation =
                item.explanations[
                  language as keyof typeof item.explanations
                ] ?? item.explanations.vi;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="rounded-2xl border bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold">
                     {text.questionLabel} {index + 1}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        isCorrect
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {isCorrect ? text.correctLabel : text.wrongLabel}
                    </span>
                  </div>

                  <p className="mt-4 text-lg font-medium">
                    {item.question}
                  </p>

                  <p className="mt-5">
                    <span className="font-semibold">
                      {text.yourAnswerLabel}                                                                   
                    </span>{" "}
                   {userAnswer != null
                      ? `${String.fromCharCode(
                          65 + userAnswer
                        )}. ${item.answers[userAnswer]}`
                      : text.unansweredLabel}
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">
                      {text.correctAnswerLabel}
                    </span>{" "}
                    {String.fromCharCode(
                      65 + item.correct
                    )}
                    . {item.answers[item.correct]}
                  </p>

                  <div className="mt-5 rounded-xl bg-blue-50 p-4">
                    <p className="font-semibold">
                      {text.explanationLabel}
                    </p>

                    <p className="mt-2">
                      {explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    );
  }

 return (
  <main className="min-h-screen bg-slate-50 px-4 py-6">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">

        {/* CỘT TRÁI */}
        <div className="space-y-4">
          <section className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  {text.levelLabel} {level}
                </p>

                <h1 className="mt-1 text-2xl font-bold">
                  {text.questionLabel} {current + 1}
                </h1>
              </div>

              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                {current + 1} / {questions.length}
              </div>
            </div>

            {/* CÂU HỎI */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-lg font-semibold leading-7 text-slate-900">
                {question.question}
              </p>
            </div>

            {/* ĐÁP ÁN */}
            <div className="mt-4 space-y-2.5">
              {question.answers.map((answer, index) => {
                const isSelected = selected[current] === index;

                return (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-bold ${
                        isSelected
                          ? "border-white bg-white text-slate-900"
                          : "border-slate-300 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-medium">
                      {answer}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ĐIỀU HƯỚNG */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
                className="rounded-lg border bg-white px-5 py-2.5 font-medium disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← {text.previousButton}
              </button>

              {current < questions.length - 1 ? (
                <button
  disabled={selected[current] === null}
  onClick={() => setCurrent(current + 1)}
  className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
>
  {text.nextButton} →
</button>
              ) : (
                <button
                  onClick={() => setFinished(true)}
                  className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white hover:bg-green-700"
                >
                  {text.submitButton}
                </button>
              )}
            </div>
          </section>

          {/* VÙNG QUẢNG CÁO */}
          <div className="flex h-[100px] items-center justify-center rounded-2xl border border-dashed bg-white text-sm text-slate-400">
            {text.adLabel}
          </div>
        </div>

        {/* CỘT PHẢI */}
        <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">

          {/* TIMER */}
          <section className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-base font-bold text-slate-700">
              ⏱ {text.timeLabel}
            </p>

            <p className="mt-2 text-center text-4xl font-bold tracking-wide text-slate-950">
              {formatTime(timeLeft)}
            </p>
          </section>

          {/* BẢNG ĐÁP ÁN */}
          <section className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">
                {text.questionListLabel}
              </h2>

              <span className="text-sm text-slate-500">
                {questions.length}
              </span>
            </div>

            <div className="space-y-[1px] overflow-hidden pr-1 text-[10px] [&_button]:h-5 [&_button]:w-5 [&_button]:text-[9px]">
              {questions.map((_, questionIndex) => {
                const chosenAnswer = selected[questionIndex];
                const isCurrent = current === questionIndex;

                return (
                  <div
                    key={questionIndex}
                   className={`grid grid-cols-[20px_repeat(4,1fr)] items-center gap-[2px] rounded px-0.5 py-[1px] ${
                      isCurrent ? "bg-blue-50" : ""
                    }`}
                  >
                    <button
                      onClick={() => setCurrent(questionIndex)}
                      className={`text-sm font-bold ${
                        isCurrent
                          ? "text-blue-600"
                          : "text-slate-700"
                      }`}
                    >
                      {questionIndex + 1}
                    </button>

                    {[0, 1, 2, 3].map((answerIndex) => {
                      const chosen =
                        chosenAnswer === answerIndex;

                      return (
                        <div
                          key={answerIndex}
                          className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                            chosen
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-300 bg-white text-slate-600"
                          }`}
                        >
                          {String.fromCharCode(
                            65 + answerIndex
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 border-t pt-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-900" />
                {text.selectedStatusLabel}
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-2 border-blue-500 bg-blue-50" />
                {text.currentQuestionStatusLabel}
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border bg-white" />
                {text.unselectedStatusLabel}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </main>
);
}