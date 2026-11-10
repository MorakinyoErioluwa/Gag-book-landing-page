export default function Preview() {
  return (
    <section id="preview" className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="inline-block bg-yellow-300 border-4 border-black px-4 py-2 font-bold uppercase">
            Sneak Peek
          </p>

          <h2 className="font-display mt-6 text-4xl md:text-6xl font-black uppercase">
            Take A Look Inside
          </h2>

          <p className="font-display mt-4 max-w-2xl mx-auto text-lg text-black/70">
            A quick look at the pages, lessons and chaos waiting inside.
          </p>

        </div>

        {/* IMAGE GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* IMAGE 1 */}
          <div className="border-4 border-black overflow-hidden shadow-xl">

            <img
              src="/master front cover1.png" 
              alt="Book Preview Page"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />

          </div>

          {/* IMAGE 2 */}
          <div className="border-4 border-black overflow-hidden shadow-xl">

            <img
              src="/book_mockup_11.png"
              alt="Book Preview Page"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />

          </div>

          {/* IMAGE 3 */}
          <div className="border-4 border-black overflow-hidden shadow-xl">

            <img
              src="/master debater bake.png"
              alt="Book Jacket"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />

          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="font-display mt-10 text-center font-bold uppercase text-black/70">
          And that’s just the beginning.
        </p>

      </div>

    </section>
  );
}