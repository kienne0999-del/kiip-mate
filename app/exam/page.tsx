"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { examOverviewTranslations } from "@/data/translations";

const levels = [1, 2, 3, 4, 5];

export default function ExamPage() {
  const { language } = useLanguage();

const text =
  examOverviewTranslations[language] ||
  examOverviewTranslations.vi;
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
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {levels.map((level) => (
            <Link
              key={level}
              href={`/exam/${level}`}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                {level}
              </div>

              <h2 className="mt-4 text-xl font-bold">
                {text.levelLabel} {level}
              </h2>

              <p className="mt-2 text-slate-500">
                {text.cardDescription} {level}.
              </p>

              <p className="mt-5 font-medium text-blue-600">
             {text.chooseLevelLabel}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}