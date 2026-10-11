"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonTranslations } from "@/data/lessonTranslations";

type VocabularyItem = {
  word: string;
  meaning: string;
  example?: string;
};

type VocabularyListProps = {
  level: string;
  lesson: string;
  vocabulary: VocabularyItem[];
};

export default function VocabularyList({
  level,
  lesson,
  vocabulary,
}: VocabularyListProps) {
  const { language } = useLanguage();
  const translatedVocabulary =
  lessonTranslations[level]?.[lesson]?.[language]
    ?.vocabulary;
  return (
    <div className="mt-4 space-y-3">
  
      {vocabulary.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border bg-white p-4"
        >
          <p className="font-semibold">
            {item.word}
          </p>

          <p className="mt-1 text-slate-600">
            {translatedVocabulary?.[index]?.meaning ||
              item.meaning}
          </p>

          {item.example && (
            <p className="mt-2 text-sm text-slate-500">
              {item.example}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}