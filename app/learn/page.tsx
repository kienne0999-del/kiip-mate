"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { homeTranslations } from "@/data/translations";

export default function LearnPage() {
  const { language } = useLanguage();

  const text =
    homeTranslations[language] ||
    homeTranslations.vi;

  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold">
        📚 {text.learn}
      </h1>

      <p className="mt-3 text-slate-500">
        {text.learnDescription}
      </p>
    </main>
  );
}