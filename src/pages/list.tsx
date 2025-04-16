import MemeCard from "@/components/memeCard";
import { useMemes } from "@/hooks/useMemes";
import DefaultLayout from "@/layouts/default";

export default function ListPage() {
  const { memes, loading, error } = useMemes();

  if (error) return <p>Oops, something went wrong. Try again later.</p>;

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-6 py-8 md:py-10">
        {loading ? (
          <p>Loading memes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {memes.map(meme => (
              <MemeCard meme={meme} />
            ))}
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
