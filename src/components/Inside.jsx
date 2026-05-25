export default function Inside() {
  return (
    <section id="inside" className="py-24 px-6 bg-yellow-50">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="font-body inline-block bg-white border-4 border-black px-4 py-2 font-bold uppercase">
            Inside The Book
          </p>

          <h2 className="font-display mt-6 text-4xl md:text-6xl font-black uppercase">
            What’s Inside The Book?
          </h2>

          <p className="font-display mt-4 max-w-2xl mx-auto text-lg text-black/70">
            A practical and entertaining breakdown of debate fundamentals, sharper rebuttals and smarter argument strategies—designed to help you think faster and respond better.
          </p>

        </div>

        {/* TOP CARDS */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="border-4 border-black bg-white p-8 shadow-xl  hover:-translate-y-2 transition duration-300">

            <p className="font-body inline-block border-2 border-black px-3 py-1 text-sm font-bold uppercase">
              Core System
            </p>

            <h3 className="font-display mt-4 text-3xl font-black uppercase">
              69 Easy Steps To Master Debating
            </h3>

            <p className="font-body mt-4 text-black/80 leading-relaxed">
              A structured breakdown of 69 practical steps to help you build stronger arguments, sharper timing and better rebuttals.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="border-4 border-black bg-yellow-100 p-8 shadow-xl  hover:-translate-y-2 transition duration-300">

            <p className="font-body inline-block border-2 border-black px-3 py-1 text-sm font-bold uppercase">
              Practice
            </p>

            <h3 className="font-display mt-4 text-3xl font-black uppercase">
              Practice Exercises & Debate Drills
            </h3>

            <p className="font-body mt-4 text-black/80 leading-relaxed">
              Sharpen your thinking with guided exercises designed to improve confidence, speed and clarity under pressure.
            </p>

          </div>

        </div>

        {/* BONUS CARD */}
        <div className="mt-12 flex justify-center">

          <div className="max-w-2xl border-4 border-black bg-yellow-200 p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <p className="font-body inline-block bg-white border-2 border-black px-3 py-1 font-bold uppercase">
              Bonus
            </p>

            <h3 className="font-display mt-4 text-2xl md:text-3xl font-black uppercase">
              Quick Recovery Strategies
            </h3>

            <p className="font-body mt-4 text-black/80 leading-relaxed">
              Learn how to recover from weak points, regain control and turn shaky moments into stronger comebacks when the pressure is on.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}