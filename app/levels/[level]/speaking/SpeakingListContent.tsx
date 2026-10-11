"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { speakingListTranslations } from "@/data/translations";

type SpeakingItem = {
  id: number;
  title: string;
 titles?: Partial<Record<string, string>>;
};

type SpeakingListContentProps = {
  level: string;
  prompts: SpeakingItem[];
};

export default function SpeakingListContent({
  level,
  prompts,
}: SpeakingListContentProps) {
  const { language } = useLanguage();

  const text =
    speakingListTranslations[language] ||
    speakingListTranslations.vi;

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

      <div className="mt-10 space-y-4">
        {prompts.map((item) => (
          <Link
            key={item.id}
            href={`/levels/${level}/speaking/${item.id}`}
            className="block rounded-xl border bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold">
             {text.lessonLabel} {item.id}: {item.titles?.[language] || item.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}