"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonTranslations } from "@/data/lessonTranslations";
import { lessonDetailTranslations } from "@/data/translations";
type GrammarItem = {
  title: string;
  explanation: string;
  example?: string;
};

type GrammarListProps = {
  level: string;
  lesson: string;
  grammar: GrammarItem[];
};

export default function GrammarList({
  level,
  lesson,
  grammar,
}: GrammarListProps) {
  const { language } = useLanguage();
const text =
  lessonDetailTranslations[language] ||
  lessonDetailTranslations.vi;
  const translatedGrammar =
    lessonTranslations[level]?.[lesson]?.[language]
      ?.grammar;

  return (
    <div className="mt-5 space-y-5">
      {grammar.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold">
            {item.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {translatedGrammar?.[index]?.explanation ||
              item.explanation}
          </p>

          {item.example && (
            <p className="mt-2 rounded-lg bg-slate-50 p-3">
{text.exampleLabel} {item.example}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}