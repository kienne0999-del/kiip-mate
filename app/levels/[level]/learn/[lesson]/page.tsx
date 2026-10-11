import LessonSectionTitle from "./LessonSectionTitle";
import { lessonData } from "@/data/lessons";
import CompleteLessonButton from "@/app/components/CompleteLessonButton";
import LessonContent from "./LessonContent";
import VocabularyList from "./VocabularyList";
import GrammarList from "./GrammarList";
import DialogueList from "./DialogueList";
import CultureText from "./CultureText";
import LessonNotFound from "./LessonNotFound";
export default async function LessonPage({
  params,
}: {
  params: Promise<{
    level: string;
    lesson: string;
  }>;
}) {
  const { level, lesson } = await params;

  const levelData =
    lessonData[level as keyof typeof lessonData];

  const lessonInfo = levelData?.[
    lesson as keyof typeof levelData
  ];

  if (!lessonInfo) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <LessonNotFound />
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <LessonContent
      level={level}
       lesson={lesson}
      title={lessonInfo.title}
/>

        <div className="mt-10 space-y-6">

          <section className="rounded-xl border bg-white p-6">
           <LessonSectionTitle
           type="vocabulary"
           icon="📘"
/>

            <VocabularyList
           level={level}
            lesson={lesson}
           vocabulary={lessonInfo.vocabulary.map((item) => ({
          word: item.korean,
         meaning: item.meaning,
           }))}
/>
          </section>

          <section className="rounded-xl border bg-white p-6">
            <LessonSectionTitle
          type="grammar"
          icon="🧩"
/>

            <GrammarList
  level={level}
  lesson={lesson}
  grammar={lessonInfo.grammar}
/>
              
          </section>

          <section className="rounded-xl border bg-white p-6">
            <LessonSectionTitle
             type="dialogue"
            icon="💬"
            />

            <DialogueList
  level={level}
  lesson={lesson}
  conversation={lessonInfo.conversation}
/>
          </section>

          <section className="rounded-xl border bg-white p-6">
            <LessonSectionTitle
           type="culture"
           icon="🇰🇷"
           />
          <CultureText
           level={level}
           lesson={lesson}
           culture={lessonInfo.culture}
/>
          </section>
<CompleteLessonButton
  level={level}
  lesson={lesson}
/>

        </div>
      </div>
    </main>
  );
}