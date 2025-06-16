import { useState } from "react";
import { FaCogs, FaClipboardList, FaChartBar } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Fertigungslinie erstellen",
    description: "Erklärung zu Feature A. Es zeigt die Hauptfunktion.",
    image: "/images/HomeScreenshotApp.png",
    bgColor: "bg-blue-100",
    icon: FaCogs,
  },
  {
    title: "Mehrbenutzerbetrieb",
    description: "Erklärung zu Feature B. Es beschreibt die Vorteile.",
    image: "/images/feature-b.png",
    bgColor: "bg-red-100",
    icon: FaClipboardList,
  },
  {
    title: "Export",
    description: "Beschreibung für Feature C. Es hebt ein Extra hervor.",
    image: "/images/feature-c.png",
    bgColor: "bg-yellow-100",
    icon: FaChartBar,
  },
];

function FeaturesSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="h-screen bg-white py-20 px-6" id="features">
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className="flex items-center gap-3 transition group"
            >
              <div
                className={`p-2 rounded-lg transition-colors ${
                  selected === index
                    ? feature.bgColor
                    : "bg-gray-200 group-hover:" +
                      feature.bgColor.replace("bg-", "")
                }`}
              >
                <IconComponent className="w-4 h-4 text-gray-700" />
              </div>
              <span className="text-black font-medium">{feature.title}</span>
            </button>
          );
        })}
      </div>
      {/* Inhalt: Bild + Text in einem Fenster */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`${features[selected].bgColor} rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200`}
        >
          <img
            src={features[selected].image}
            alt={features[selected].title}
            className="w-full rounded-lg"
          />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
