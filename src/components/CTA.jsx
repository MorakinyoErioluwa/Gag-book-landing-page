export default function CTA() {
  return (
    <section
      id="buy"
      className="py-24 px-6 bg-black text-white overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* BADGE */}
            <p className="font-display inline-block bg-yellow-300 text-black border-2 border-white px-4 py-2 font-bold uppercase">
              Final Chance
            </p>

            {/* HEADING */}
            <h2 className="font-display mt-6 text-4xl md:text-6xl font-black uppercase leading-[0.95]">
              Ready To Master Debate?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Get the complete guide packed with practical strategies,
              debate drills and recovery methods designed to help you
              argue smarter, respond faster and win stronger.
            </p>

            {/* CHECKLIST */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <span className="text-yellow-300 text-xl">✔</span>
                <p className="font-dislay">69 practical debate steps</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-300 text-xl">✔</span>
                <p className="font-dislay">Exercises to sharpen your rebuttals</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-300 text-xl">✔</span>
                <p className="font-dislay">Quick recovery strategies under pressure</p>
              </div>

            </div>

            {/* BUTTON + PRICE */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">

              <a
                href="#buy"
                className="font-body bg-yellow-300 text-black px-8 py-4 border-2 border-white font-bold uppercase hover:-translate-y-1 transition duration-300"
              >
                Get Your Copy
              </a>

              <p className="font-display text-2xl font-black text-yellow-300">
                Only $30
              </p>

            </div>

            {/* SMALL TEXT */}
            <p className="mt-6 text-sm uppercase tracking-wide text-white/60">
              Don’t wait until your next argument to wish you had it.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <img
              src="book_mockup_11.png"
              alt="Book Mockup"
              className="w-72 md:w-80 lg:w-[380px] object-contain drop-shadow-2xl hover:-translate-y-2 transition duration-300"
            />

          </div>

        </div>

      </div>

    </section>
  );
}