 "use client";

 import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";
import { homeTranslations } from "@/data/translations";
  export default function Home() {
  const { language } = useLanguage();
const text =
  homeTranslations[language] || homeTranslations.vi;
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="mb-10">
          <p className="text-blue-600 font-semibold mb-2">
            KIIP STUDY
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
          {text.title}
         </h1>

          <p className="text-slate-500 mt-3">
          {text.subtitle}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-3xl mb-4">📚</div>

            <h2 className="text-xl font-bold">
             {text.learn}
            </h2>

            <p className="text-slate-500 mt-2">
            {text.learnDescription}
            </p>

            <Link
  href="/levels"
  className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
>
  {text.learnButton}
</Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-3xl mb-4">📝</div>

            <h2 className="text-xl font-bold">
             {text.practice}
            </h2>

            <p className="text-slate-500 mt-2">
             {text.practiceDescription}
            </p>

            <Link
  href="/levels/1/practice"
  className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
>
  {text.practiceButton}
</Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-3xl mb-4">⏱️</div>

            <h2 className="text-xl font-bold">
            {text.exam}
            </h2>

            <p className="text-slate-500 mt-2">
            {text.examDescription}
            </p>

            <Link
  href="/exam"
  className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
>
  {text.examButton}
</Link>
          </div>

        </div>

      </div>
    </main>
  );
}