function FeatureCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Fertigungslinie erstellen
      </h3>

      <p className="text-gray-700 mb-4">
        Um eine neue Fertigungslinie zu erstellen, klickt der Nutzer auf den „
        <strong>Create</strong>“-Button. Anschließend wird ein Dialog geöffnet,
        in dem der Name der Fertigungslinie eingegeben wird. Nach dem Bestätigen
        wird die Linie im System angelegt und ist bereit zur weiteren
        Konfiguration oder Nutzung.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>
          <strong>Name der Linie</strong>
        </li>
      </ul>

      <p className="text-gray-700">
        Dieses Feature hilft dabei, den Fertigungsprozess strukturiert zu
        planen, zu dokumentieren und im System abzubilden. So wird eine bessere
        Übersicht und spätere Steuerung der Produktion ermöglicht.
      </p>
    </div>
  );
}

export default FeatureCard;
