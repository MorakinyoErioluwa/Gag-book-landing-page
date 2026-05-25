export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-yellow-100">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="font-body inline-block bg-yellow-300 border-4 border-black px-4 py-2 font-bold uppercase">
            Reader Reactions
          </p>

          <h2 className="font-display mt-6 text-4xl md:text-6xl font-black uppercase">
            What Readers Are Saying
          </h2>

          <p className="font-display mt-4 max-w-2xl mx-auto text-lg text-black/70">
            Real reviews. Real experiences. Questionable results.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="border-4 border-black bg-white p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <p className="font-body text-lg font-medium leading-relaxed">
              "When I started debating, I could only last a few seconds.
              This book helped me outlast anyone!"
            </p>

            <p className="font-display mt-6 font-black uppercase">
              — Mike Rotch
            </p>

          </div>

          {/* CARD 2 */}
          <div className="border-4 border-black bg-yellow-50 p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <p className="font-body text-lg font-medium leading-relaxed">
              "BJ NOMNOM saved my marriage. My wife used to win all of the arguments and hurt our relationship.
              But not anymore.
              In fact, now we master debate each other!"
            </p>

            <p className="font-display mt-6 font-black uppercase">
              — Ben Dover
            </p>

          </div>

          {/* CARD 3 */}
          <div className="border-4 border-black bg-yellow-200 p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <p className="font-body text-lg font-medium leading-relaxed">
              "I was always envious of people master debating in public, so easily and with no shame.
              I never thought it could be me.
              But thanks to the principles in this book, here I am—master debating in front of large audiences all over the world!"
            </p>

            <p className="font-display mt-6 font-black uppercase">
              — I.P Freely
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}