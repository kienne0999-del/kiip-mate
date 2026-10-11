"use client";
import { useLanguage } from "@/app/components/LanguageProvider";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { questionData } from "@/data/questions";
import { practiceDetailTranslations } from "@/data/translations";
export default function PracticeLessonPage() {
  const params = useParams();

  const level = params.level as string;
  const lesson = params.lesson as string;

  const questions = useMemo(() => {
    const levelData =
      questionData[level as keyof typeof questionData];

    if (!levelData) return [];

    const lessonData =
      levelData[lesson as keyof typeof levelData];

    return lessonData ?? [];
  }, [level, lesson]);

  const [current, setCurrent] = useState(0);

 const [selected, setSelected] = useState<(number | null)[]>(
  Array(questions.length).fill(null)
);

  const [finished, setFinished] = useState(false);

 const { language } = useLanguage();
 const text =
  practiceDetailTranslations[language] ||
  practiceDetailTranslations.vi; 
function selectAnswer(index: number) {
  const newSelected = [...selected];
  newSelected[current] = index;
  setSelected(newSelected);
}
function markPracticeComplete() {
  const key = `practiceProgress-level-${level}`;
localStorage.setItem(
  "lastPracticePath",
  `/levels/${level}/practice/${lesson}`
);
  const oldProgress = JSON.parse(
    localStorage.getItem(key) || "[]"
  );

  if (oldProgress.includes(lesson)) {
    alert(text.alreadyCompletedAlert);
    return;
  }

  const newProgress = [
    ...oldProgress,
    lesson,
  ];

  localStorage.setItem(
    key,
    JSON.stringify(newProgress)
  );

  alert(text.completedAlert);
}
  useEffect(() => {
    setSelected(Array(questions.length).fill(null));
  }, [questions.length]);

  if (questions.length === 0) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">
          {text.noDataTitle}
        </h1>

        <p className="mt-3 text-slate-500">
          {text.noDataSubtitle}
        </p>
      </div>
    </main>
  );
}

  const question = questions[current];
const questionTranslation =
  question.translations[
    language as keyof typeof question.translations
  ] ?? question.translations.vi;

  function calculateScore() {
    let score = 0;

    selected.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++;
      }
    });

    return score;
  }

  if (finished) {
    const score = calculateScore();

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
  }}
  className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white"
>
  {text.retryButton}
</button>

<button
  onClick={markPracticeComplete}
  className="mt-4 rounded-lg bg-blue-600 px-5 py-3 text-white"
>
{text.completeButton}
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
                  key={item.id}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">
                {text.reviewQuestionLabel} {index + 1}
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

                  <div className="mt-3 rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      {translation}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p>
                      <span className="font-semibold">
                   {text.yourAnswerLabel}
                 </span>{" "}
                      {userAnswer !== null
                        ? `${String.fromCharCode(
                            65 + userAnswer
                          )}. ${item.answers[userAnswer]}`
                        : text.unansweredLabel}
                    </p>

                    <p>
                      <span className="font-semibold">
                    {text.correctAnswerLabel}
                    </span>{" "}
                      {String.fromCharCode(
                        65 + item.correct
                      )}
                      . {item.answers[item.correct]}
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl bg-blue-50 p-4">
                    <p className="font-semibold">
                    {text.explanationLabel}
                     </p>

                    <p className="mt-2 text-slate-700">
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
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <div className="mb-6">
          <p className="font-semibold text-blue-600">
          {text.levelLabel} {level} | {text.lessonLabel} {lesson}
          </p>

          <h1 className="mt-2 text-3xl font-bold">
          {text.currentQuestionLabel} {current + 1} / {questions.length}
          </h1>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <p className="text-xl font-semibold">
            {question.question}
          </p>
         <p className="mt-2 text-slate-500">
           {questionTranslation}
          </p>
          <div className="mt-8 space-y-3">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                className={`w-full rounded-xl border p-4 text-left ${
                  selected[current] === index
                    ? "border-blue-600 bg-blue-50"
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                <span className="mr-3 font-semibold">
                  {String.fromCharCode(65 + index)}.
                </span>

                {answer}
              </button>
            ))}
          </div>

        </div>

        <div className="mt-6 flex justify-between">
          <button
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
            className="rounded-lg border bg-white px-5 py-3 disabled:opacity-40"
          >
           {text.previousButton}
          </button>

          {current < questions.length - 1 ? (
            <button
              onClick={() => setCurrent(current + 1)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white"
            >
            {text.nextButton}
            </button>
          ) : (
            <button
              onClick={() => setFinished(true)}
              className="rounded-lg bg-green-600 px-5 py-3 text-white"
            >
            {text.submitButton}
            </button>
          )}
        </div>

        <div className="mt-8 rounded-xl border bg-white p-5">
          <p className="mb-4 font-semibold">
  {text.questionListLabel}
</p>

          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-10 w-10 rounded-lg border ${
                  current === index
                    ? "bg-blue-600 text-white"
                    : selected[index] !== null
                    ? "bg-blue-50 text-blue-600"
                    : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}