export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="inline-block bg-yellow-300 border-4 border-black px-4 py-2 font-bold uppercase">
            Sound Familiar?
          </p>

          <h2 className="font-display mt-6 text-4xl md:text-6xl font-black uppercase">
            Ever Been In These Situations?
          </h2>

          <p className="font-display mt-4 max-w-2xl mx-auto text-lg text-black/70">
            Every great debater has been here. The difference is knowing how to recover, respond and come back stronger.
          </p>

        </div>

        {/* CARDS GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="hover:scale-105 transition duration-300 border-4 border-black  bg-yellow-100 p-8 shadow-xl">

            <div className="text-5xl">💬</div>

            <h3 className="font-display mt-4 text-2xl font-black uppercase">
              Lost An Argument?
            </h3>

            <p className="font-body mt-4 text-black/80">
              You had the perfect point—just five minutes too late.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="border-4 hover:scale-105 transition duration-300 border-black bg-white p-8 shadow-xl">

            <div className="text-5xl">🧠</div>

            <h3 className="font-display mt-4 text-2xl font-black uppercase">
              Froze Mid-Debate?
            </h3>

            <p className="font-body mt-4 text-black/80">
              Your mind went blank right when the pressure hit.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="border-4 hover:scale-105 transition duration-300 border-black bg-yellow-50 p-8 shadow-xl">

            <div className="text-5xl">😵</div>

            <h3 className="font-display mt-4 text-2xl font-black uppercase">
              Fumbled Your Point?
            </h3>

            <p className="font-body mt-4 text-black/80">
              One bad response. One awkward silence. Total collapse.
            </p>

          </div>

        </div>

        {/* FOOT NOTE */}
        <div className="mt-16 flex justify-center">

          <p className="font-display inline-block bg-black text-white px-8 py-4 font-bold uppercase shadow-xl">
            Good news: debate recovery starts here.
          </p>

        </div>

      </div>

    </section>
  );
}