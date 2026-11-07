export default function Home() {
  const categories = [
    "Personality",
    "Leadership",
    "Honesty",
    "Lifestyle",
    "Communication",
    "Dressing & Fashion",
    "Intelligence",
    "Kindness",
    "Confidence",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-amber-400">
          RATE ME
        </h1>
        <a href="/results" className="text-sm">
          Public Results
        </a>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-28 h-28 rounded-full bg-amber-400 text-slate-950 mx-auto flex items-center justify-center text-4xl font-bold">
          AI
        </div>

        <p className="text-amber-400 mt-8">
          WELCOME TO MY PERSONAL SPACE
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Abubakar Idris
        </h2>

        <p className="text-slate-300 mt-6 leading-8">
          I am Abubakar Idris, 25 years old, born in
          Calabar Road, Old GRA, Maiduguri, Borno State.
          I enjoy football and spending time in quiet places.
          I believe respect should always be mutual.
        </p>

        <div className="mt-10">
          <a
            href="/register"
            className="inline-block bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl"
          >
            Rate My Personality
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Rate Me From Your Heart
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-center"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center p-8 border-t border-slate-800 text-slate-400">
        © 2026 Abubakar Idris. All rights reserved.
      </footer>
    </main>
  );
}
