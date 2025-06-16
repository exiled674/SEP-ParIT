function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Links */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Unsere Architektur
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Die Architektur beschreibt eine Client-Server-Anwendung mit einer
              Blazor-UI auf der Client-Maschine, die über ein Backend mit
              verschiedenen Diensten kommuniziert. Der ExportService ermöglicht
              den Datenexport in JSON- oder Excel-Formate, während der
              DataService die Datenverarbeitung übernimmt. Die
              Echtzeitkommunikation erfolgt über den SignalRService, der
              Nachrichten mit dem SignalR-System auf der Server-Maschine
              austauscht. Der Server speichert Daten in einer SQL-Datenbank und
              stellt über SignalR eine bidirektionale Verbindung zum Client her.
            </p>
          </div>

          {/* System Architecture Diagramm Rechts */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 800 500"
              className="w-full max-w-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Device / Client Machine Container */}
              <rect
                x="20"
                y="20"
                width="520"
                height="360"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                rx="8"
              />
              <text
                x="30"
                y="40"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
              >
                &lt;device&gt;
              </text>
              <text
                x="30"
                y="55"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
              >
                Client Machine
              </text>

              {/* Frontend Container */}
              <rect
                x="40"
                y="70"
                width="240"
                height="120"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
              />
              <text
                x="50"
                y="90"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
              >
                Frontend
              </text>

              {/* BlazorUI Component */}
              <rect
                x="60"
                y="100"
                width="120"
                height="60"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="120"
                y="135"
                fontFamily="Arial, sans-serif"
                fontSize="11"
                textAnchor="middle"
              >
                BlazorUI
              </text>
              <rect
                x="160"
                y="105"
                width="15"
                height="10"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="162" y="107" width="11" height="2" fill="#333" />
              <rect x="162" y="110" width="11" height="2" fill="#333" />

              {/* Backend Container */}
              <rect
                x="40"
                y="200"
                width="480"
                height="160"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
              />
              <text
                x="50"
                y="220"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
              >
                Backend
              </text>

              {/* ExportService */}
              <rect
                x="60"
                y="240"
                width="100"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="110"
                y="265"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                ExportService
              </text>
              <rect
                x="145"
                y="245"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="146" y="246" width="10" height="2" fill="#333" />
              <rect x="146" y="249" width="10" height="2" fill="#333" />

              {/* DataService */}
              <rect
                x="200"
                y="240"
                width="100"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="250"
                y="265"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                DataService
              </text>
              <rect
                x="285"
                y="245"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="286" y="246" width="10" height="2" fill="#333" />
              <rect x="286" y="249" width="10" height="2" fill="#333" />

              {/* SignalRService */}
              <rect
                x="340"
                y="240"
                width="100"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="390"
                y="265"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                SignalRService
              </text>
              <rect
                x="425"
                y="245"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="426" y="246" width="10" height="2" fill="#333" />
              <rect x="426" y="249" width="10" height="2" fill="#333" />

              {/* JSONExport */}
              <rect
                x="60"
                y="300"
                width="80"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="100"
                y="325"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                JSONExport
              </text>
              <rect
                x="125"
                y="305"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="126" y="306" width="10" height="2" fill="#333" />
              <rect x="126" y="309" width="10" height="2" fill="#333" />

              {/* ExcelExport */}
              <rect
                x="180"
                y="300"
                width="80"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="220"
                y="325"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                ExcelExport
              </text>
              <rect
                x="245"
                y="305"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="246" y="306" width="10" height="2" fill="#333" />
              <rect x="246" y="309" width="10" height="2" fill="#333" />

              {/* Server Machine Container */}
              <rect
                x="580"
                y="240"
                width="180"
                height="140"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                rx="8"
              />
              <text
                x="590"
                y="260"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
              >
                Server Machine
              </text>

              {/* SQLServer */}
              <rect
                x="600"
                y="280"
                width="70"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="635"
                y="305"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                SQLServer
              </text>
              <rect
                x="655"
                y="285"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="656" y="286" width="10" height="2" fill="#333" />
              <rect x="656" y="289" width="10" height="2" fill="#333" />

              {/* SignalRSystem */}
              <rect
                x="680"
                y="280"
                width="70"
                height="40"
                fill="#e8e8e8"
                stroke="#333"
                strokeWidth="1"
              />
              <text
                x="715"
                y="305"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                textAnchor="middle"
              >
                SignalRSystem
              </text>
              <rect
                x="735"
                y="285"
                width="12"
                height="8"
                fill="none"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="736" y="286" width="10" height="2" fill="#333" />
              <rect x="736" y="289" width="10" height="2" fill="#333" />

              {/* Arrows and Connections */}

              {/* BlazorUI to Backend Services */}
              <line
                x1="120"
                y1="160"
                x2="120"
                y2="200"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="115,195 120,205 125,195" fill="#333" />

              {/* BlazorUI to DataService */}
              <line
                x1="180"
                y1="130"
                x2="250"
                y2="130"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="250"
                y1="130"
                x2="250"
                y2="240"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="245,235 250,245 255,235" fill="#333" />

              {/* ExportService to JSONExport */}
              <line
                x1="110"
                y1="280"
                x2="110"
                y2="290"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="110"
                y1="290"
                x2="100"
                y2="290"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="290"
                x2="100"
                y2="300"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="95,295 100,305 105,295" fill="#333" />

              {/* JSONExport to ExcelExport */}
              <line
                x1="140"
                y1="320"
                x2="180"
                y2="320"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="175,315 185,320 175,325" fill="#333" />

              {/* DataService to SQLServer */}
              <line
                x1="300"
                y1="250"
                x2="550"
                y2="250"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="550"
                y1="250"
                x2="550"
                y2="290"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="550"
                y1="290"
                x2="600"
                y2="290"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="595,285 605,290 595,295" fill="#333" />

              {/* SignalRService to SignalRSystem */}
              <line
                x1="440"
                y1="270"
                x2="570"
                y2="270"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="570"
                y1="270"
                x2="570"
                y2="310"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="570"
                y1="310"
                x2="680"
                y2="310"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon points="675,305 685,310 675,315" fill="#333" />

              {/* Callback arrow from SignalRService to BlazorUI (dashed) */}
              <line
                x1="390"
                y1="240"
                x2="390"
                y2="140"
                stroke="#666"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <line
                x1="390"
                y1="140"
                x2="180"
                y2="140"
                stroke="#666"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <polygon points="175,135 185,140 175,145" fill="#666" />
              <text
                x="280"
                y="125"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#666"
              >
                invokes callback
              </text>

              {/* Message flow label */}
              <text
                x="370"
                y="130"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#333"
              >
                sends &amp; receives messages
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
