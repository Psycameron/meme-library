import DefaultLayout from "@/layouts/default";

import { useMemes } from "@/hooks/useMemes";
import MemeTable from "@/components/memeTable";

export default function TablePage() {
  const { memes, loading, error, fetchMemes } = useMemes();

  if (error) return <p>Oops, something went wrong try again later</p>;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <MemeTable memes={memes} updateMemes={fetchMemes} />
        )}
      </section>
    </DefaultLayout>
  );
}
