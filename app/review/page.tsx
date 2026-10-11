"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { reviewTranslations } from "@/data/translations";
type WrongQuestion = {
  id: number;
  question: string;
  answers: string[];
  correct: number;
  userAnswer: number | null;
  translations: {
    vi: string;
    en: string;
  };
  explanations: {
    vi: string;
    en: string;
  };
};

export default function ReviewPage() {
  const { language } = useLanguage();

const text =
  reviewTranslations[language] ||
  reviewTranslations.vi;
  const [questions, setQuestions] =
    useState<WrongQuestion[]>([]);

  const [level, setLevel] = useState("1");

  useEffect(() => {
    const saved = localStorage.getItem(
      `wrongQuestions-level-${level}`
    );

    if (saved) {
      setQuestions(JSON.parse(saved));
    } else {
      setQuestions([]);
    }
  }, [level]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="font-semibold text-blue-600">
          KIIP STUDY
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {text.title}
        </h1>

        <p className="mt-3 text-slate-500">
          {text.subtitle}
        </p>

        <div className="mt-8">
          <label className="font-semibold">
            {text.levelSelectLabel}
          </label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="ml-3 rounded-lg border bg-white px-4 py-2"
          >
           <option value="1">{text.levelLabel} 1</option>
<option value="2">{text.levelLabel} 2</option>
<option value="3">{text.levelLabel} 3</option>
<option value="4">{text.levelLabel} 4</option>
<option value="5">{text.levelLabel} 5</option>
          </select>
        </div>

        {questions.length === 0 ? (
          <div className="mt-8 rounded-2xl border bg-white p-8 text-center text-slate-500">
            {text.emptyText}
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {questions.map((item, index) => {
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
                  <h2 className="font-bold">
                    {text.questionLabel} {index + 1}
                  </h2>

                  <p className="mt-4 text-lg font-semibold">
                    {item.question}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {translation}
                  </p>

                  <p className="mt-5">
                    <span className="font-semibold">
                      {text.yourAnswerLabel}
                    </span>{" "}
                    {item.userAnswer !== null
                      ? `${String.fromCharCode(
                          65 + item.userAnswer
                        )}. ${
                          item.answers[item.userAnswer]
                        }`
                      : "text.unansweredLabel"}
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
        )}

      </div>
    </main>
  );
}