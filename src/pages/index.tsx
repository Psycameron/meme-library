import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <p className="max-w-lg text-3xl">
            The best memes from around the world collected in one place
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
