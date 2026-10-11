"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { examLevelTranslations } from "@/data/translations";

type ExamLevelContentProps = {
  level: string;
};

export default function ExamLevelContent({
  level,
}: ExamLevelContentProps) {
  const { language } = useLanguage();

  const text =
    examLevelTranslations[language] ||
    examLevelTranslations.vi;

  return (
    <>
      <p className="font-semibold text-blue-600">
        {text.levelLabel} {level}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {text.title}
      </h1>

      <p className="mt-3 text-slate-500">
        {text.subtitle}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link
          href={`/exam/${level}/multiple-choice`}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl">📝</div>

          <h2 className="mt-4 text-xl font-bold">
            {text.multipleChoiceTitle}
          </h2>

          <p className="mt-2 text-slate-500">
            {text.multipleChoiceSubtitle}
          </p>
        </Link>

        <Link
          href={`/exam/${level}/writing`}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl">✍️</div>

          <h2 className="mt-4 text-xl font-bold">
            {text.writingTitle}
          </h2>

          <p className="mt-2 text-slate-500">
            {text.writingSubtitle}
          </p>
        </Link>

        <Link
          href={`/exam/${level}/speaking`}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl">🎤</div>

          <h2 className="mt-4 text-xl font-bold">
            {text.speakingTitle}
          </h2>

          <p className="mt-2 text-slate-500">
            {text.speakingSubtitle}
          </p>
        </Link>
      </div>
    </>
  );
}