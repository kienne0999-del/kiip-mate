import ExamWritingContent from "./ExamWritingContent";
export default async function WritingExamPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
       <ExamWritingContent level={level} />
      </div>
    </main>
  );
}