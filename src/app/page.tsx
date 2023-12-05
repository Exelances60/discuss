import TopicsCreateForm from "@/components/topics/topics-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold">Create Topic</h1>
      </div>
      <div>
        <TopicsCreateForm />
      </div>
    </div>
  );
}
