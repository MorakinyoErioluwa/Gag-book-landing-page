import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
    

      <header className="fixed top-0 left-0 w-full z-50 bg-yellow-300/90 backdrop-blur-md border-b border-black/20 shadow-sm">
        <div className="lg:max-w-6xl md:max-w-4xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <div className="font-body font-black text-lg tracking-tight text-amber-950">
            B.J NONMOM
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-amber-950">
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#inside" className="hover:opacity-70 transition">Inside</a>
            <a href="#preview" className="hover:opacity-70 transition">Preview</a>
            <a href="#reviews" className="hover:opacity-70 transition">Reviews</a>
          </nav>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:scale-105 transition duration-300">
            Buy Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl font-black text-amber-950"
          >
            ☰
          </button>

        </div>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}

      {/* MOBILE MENU */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-yellow-200 shadow-2xl z-50 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex items-center justify-between px-5 py-5 border-b border-black/10">

          <p className="font-black text-lg text-amber-950">Menu</p>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl font-black"
          >
            ×
          </button>

        </div>

        <div className="flex flex-col px-5 py-8 gap-6 text-amber-950 font-semibold">

          <a href="#about" onClick={() => setOpen(true)}>About</a>
          <a href="#inside" onClick={() => setOpen(false)}>Inside</a>
          <a href="#preview" onClick={() => setOpen(false)}>Preview</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>

          <button className="mt-6 bg-black text-white py-3 rounded-full font-semibold">
            Buy Book
          </button>

        </div>

      </div>
    </>
  );
}