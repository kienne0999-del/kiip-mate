"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { levelOverviewTranslations } from "@/data/translations";

type LevelOverviewContentProps = {
  level: string;
};

export default function LevelOverviewContent({
  level,
}: LevelOverviewContentProps) {
  const { language } = useLanguage();

  const text =
    levelOverviewTranslations[language] ||
    levelOverviewTranslations.vi;

  return (
    <>
      <p className="font-semibold text-blue-600">
        {text.levelLabel} {level}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {text.title} {level}
      </h1>

      <p className="mt-3 text-slate-500">
        {text.subtitle}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link
          href={`/levels/${level}/learn`}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl">📚</div>

          <h2 className="mt-4 text-xl font-bold">
            {text.learnTitle}
          </h2>

          <p className="mt-2 text-slate-500">
            {text.learnSubtitle}
          </p>
        </Link>

        <Link
          href={`/levels/${level}/practice`}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl">📝</div>

          <h2 className="mt-4 text-xl font-bold">
            {text.practiceTitle}
          </h2>

          <p className="mt-2 text-slate-500">
            {text.practiceSubtitle}
          </p>
        </Link>

        <Link
          href={`/levels/${level}/writing`}
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
          href={`/levels/${level}/speaking`}
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