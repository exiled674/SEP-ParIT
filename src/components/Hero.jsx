import React from "react";

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-t from-blue-900 to-blue-300 text-white flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Linker Textbereich */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Leistungsstarkes Konfigurations-Tool für SISAM.
          </h1>
          <p className="text-lg mb-6">
            Unsere Anwendung hilft ihnen, effizient Fertigungslinien zu
            erstellen – mit modernem Design und intuitiver Bedienung.
          </p>
          <a
            href="#download"
            className="bg-white text-blue-700 hover:text-white hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Jetzt herunterladen
          </a>
        </div>

        {/* Rechter Bild-/Designbereich */}
        <div className="relative flex justify-center items-center">
          {/* Person am Laptop (z.B. SVG/PNG Illustration) */}
          <img
            src="/images/PersonAmLaptop.svg"
            alt="Person mit Laptop"
            className="w-64 z-10"
          />

          {/* Fenster mit App-Vorschau – als Overlay */}
          <img
            src="/images/HomeScreenshotApp.png"
            alt="App Fenster 1"
            className="absolute top-0 left-0 bottom-0 right-0 w-60 h-auto z-20 shadow-lg rounded-md hidden md:block"
          />
          <img
            src="/images/HomeScreenshotApp.png"
            alt="App Fenster 2"
            className="absolute bottom-1 right-0 w-60 h-auto z-20 shadow-lg rounded-md hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
