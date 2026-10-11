"use client";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { writingListTranslations } from "@/data/translations";
import { writingData } from "@/data/writing";

type WritingListContentProps = {
  level: string;
};

export default function WritingListContent({
  level,
}: WritingListContentProps) {
  const { language } = useLanguage();

  const text =
    writingListTranslations[language] ||
    writingListTranslations.vi;
    const prompts =
  writingData[level as keyof typeof writingData] || [];

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
      <div className="mt-8 grid gap-4 md:grid-cols-2">
  {prompts.map((item) => (
    <Link
      key={item.id}
      href={`/levels/${level}/writing/${item.id}`}
      className="rounded-xl border bg-white p-5 transition hover:border-blue-500 hover:shadow-sm"
    >
      <p className="text-sm font-semibold text-blue-600">
        #{item.id}
      </p>

      <h2 className="mt-2 text-lg font-bold">
        {item.titles?.[language as keyof typeof item.titles] || item.title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {item.translations?.[
          language as keyof typeof item.translations
        ] || item.prompt}
      </p>
    </Link>
  ))}
</div>
    </>
  );
}