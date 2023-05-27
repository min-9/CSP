import Template from '@/components/Template';

export default function Page({ params }) {
  const { id } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <Template id={+id} />
          </div>
        </section>
      </div>
    </main>
  );
}
