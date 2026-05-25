export default function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">

      <div className="lg:max-w-6xl md:max-w-5xl mx-auto px-4 grid lg:grid-cols-[4.89fr_2.5fr] items-center gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* BADGE */}
          <p className="inline-flex border border-black/70 px-3 py-1 rounded-full text-sm font-semibold mb-4 text-amber-950">
            69 Easy Steps To Becoming A Master Debater
          </p>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-amber-950 max-w-xl">
            Become A Master Debater.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-black/80">
            Learn how to build stronger arguments, sharpen your rebuttals and develop the confidence to outthink and outlast your opponents—one step at a time.
          </p>

          {/* MOBILE IMAGE */}
          <div className="lg:hidden mt-8 flex justify-center">
            <img
              src="book_mockup_11.png"
              alt="Book Cover"
              className="w-56 drop-shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start">

            <a
              href="#"
              className="bg-black text-white px-6 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition duration-300 shadow-lg"
            >
              Order Book
            </a>

            <p className="text-xl font-black text-amber-950">
              Only $30
            </p>

          </div>

          {/* TRUST LINE */}
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-black/70">
            Trusted by aspiring master debaters worldwide.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-end relative">

          {/* BACKGROUND BLOB */}
          <div className="absolute w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-60"></div>

          {/* BOOK IMAGE */}
          <img
            src="book_mockup_11.png"
            alt="Book Mockup"
            className="relative w-[80%] rotate-[-4deg] hover:rotate-0 hover:scale-105 transition duration-300 drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}