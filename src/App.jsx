import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import ProcessSection from "./components/ProcessSection";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FeatureSection />
      <ProcessSection />

      <section
        className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white py-20 px-6"
        id="download"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt herunterladen</h2>
          <p className="text-lg mb-6">
            Hol dir unsere App jetzt und erlebe die Funktionen direkt auf deinem
            Gerät.
          </p>
          <a
            href="/downloads/app.zip"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Download starten
          </a>
        </div>
      </section>

      <footer id="kontakt" className="bg-black text-white p-6 text-center">
        <p>&copy; 2025 ParIT – Impressum – Kontakt</p>
      </footer>
    </div>
  );
}

export default App;
