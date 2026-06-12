import { LEGAL_IMPRINT_LINK } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-6 md:px-12 xl:px-24">
      <div className="max-w-[1000px]">
        <h1 className="text-display-lg font-bold">Datenschutzhinweise</h1>
        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Präambel</h2>
          <p className="mt-4">
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten
            Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu
            welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für
            alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
            Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen
            Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
          </p>
          <p className="mt-4">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p className="mt-4 text-sm text-black-02">Stand: 12. Juni 2026</p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Verantwortlicher</h2>
          <ul className="mt-4">
            <li>Cedric Zitzmann</li>
            <li>Flensburger Str. 19</li>
            <li>99085 Erfurt</li>
            <li>Deutschland</li>
          </ul>

          <ul className="flex flex-col gap-1 mt-4">
            <li>Vertretungsberechtigte Personen: Cedric Zitzmann</li>
            <li>
              E-Mail-Adresse:{" "}
              <a className="outline-bracket" href="mailto:cedric.zitzmann@gmail.com">
                cedric.zitzmann@gmail.com
              </a>
            </li>
            <li>
              Impressum:{" "}
              <a className="outline-bracket" href={LEGAL_IMPRINT_LINK} target="_blank">
                {LEGAL_IMPRINT_LINK}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Übersicht der Verarbeitungen</h2>
          <p className="mt-4">
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
            Verarbeitung zusammen und verweist auf die betroffenen Personen.
          </p>
          <h3 className="text-xl font-semibold mt-4">Arten der verarbeiteten Daten</h3>
          <ul className="mt-2 pl-5">
            <li className="list-disc">Bestandsdaten.</li>
            <li className="list-disc">Beschäftigtendaten.</li>
            <li className="list-disc">Zahlungsdaten.</li>
            <li className="list-disc">Kontaktdaten.</li>
            <li className="list-disc">Inhaltsdaten.</li>
            <li className="list-disc">Vertragsdaten.</li>
            <li className="list-disc">Nutzungsdaten.</li>
            <li className="list-disc">Meta-, Kommunikations- und Verfahrensdaten.</li>
            <li className="list-disc">Protokolldaten.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Kategorien betroffener Personen</h3>
          <ul className="mt-2 pl-5">
            <li className="list-disc">Leistungsempfänger und Auftraggeber.</li>
            <li className="list-disc">Beschäftigte.</li>
            <li className="list-disc">Interessenten.</li>
            <li className="list-disc">Kommunikationspartner.</li>
            <li className="list-disc">Nutzer.</li>
            <li className="list-disc">Geschäfts- und Vertragspartner.</li>
            <li className="list-disc">Dritte Personen.</li>
            <li className="list-disc">Hinweisgeber.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Zwecke der Verarbeitung</h3>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.
            </li>
            <li className="list-disc">Kommunikation.</li>
            <li className="list-disc">Sicherheitsmaßnahmen.</li>
            <li className="list-disc">Reichweitenmessung.</li>
            <li className="list-disc">Büro- und Organisationsverfahren.</li>
            <li className="list-disc">Organisations- und Verwaltungsverfahren.</li>
            <li className="list-disc">Feedback.</li>
            <li className="list-disc">Profile mit nutzerbezogenen Informationen.</li>
            <li className="list-disc">
              Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li className="list-disc">Informationstechnische Infrastruktur.</li>
            <li className="list-disc">Hinweisgeberschutz.</li>
            <li className="list-disc">Öffentlichkeitsarbeit.</li>
            <li className="list-disc">Geschäftsprozesse und betriebswirtschaftliche Verfahren.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Maßgebliche Rechtsgrundlagen</h2>
          <p className="mt-4">
            <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden erhalten Sie
            eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene
            Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
            nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
            Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir
            Ihnen diese in der Datenschutzerklärung mit.
          </p>
          <ul className="mt-4 pl-5">
            <li className="list-disc">
              <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene
              Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden
              personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke
              gegeben.
            </li>
            <li className="list-disc">
              <strong>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
              </strong>{" "}
              - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
              betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
              die auf Anfrage der betroffenen Person erfolgen.
            </li>
            <li className="list-disc">
              <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die
              Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der
              Verantwortliche unterliegt.
            </li>
            <li className="list-disc">
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die
              Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder
              eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und
              Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten
              verlangen, nicht überwiegen.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich zu den
            Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in
            Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch
            personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das
            BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
            Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
            personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner
            können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Sicherheitsmaßnahmen</h2>
          <p className="mt-4">
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
            Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der
            Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und
            des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
            technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
            zu gewährleisten.
          </p>
          <p className="mt-4">
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
            Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den
            Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung
            der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
            eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz
            personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
            sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
            durch datenschutzfreundliche Voreinstellungen.
          </p>
          <p className="mt-4">
            Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um
            die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten
            Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure
            Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren
            Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die
            zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern)
            übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die
            weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle
            Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website
            durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in
            der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten
            sicher und verschlüsselt übertragen werden.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Übermittlung von personenbezogenen Daten</h2>
          <p className="mt-4">
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an
            andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder
            Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den
            Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister gehören
            oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In
            solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere
            entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
            Empfängern Ihrer Daten ab.
          </p>
          <p className="mt-4">
            Datenübermittlung innerhalb der Organisation: Wir können personenbezogene Daten an
            andere Abteilungen oder Einheiten innerhalb unserer Organisation übermitteln oder ihnen
            den Zugriff darauf gewähren. Sofern die Datenweitergabe zu administrativen Zwecken
            erfolgt, beruht sie auf unseren berechtigten unternehmerischen und
            betriebswirtschaftlichen Interessen oder erfolgt, sofern sie zur Erfüllung unserer
            vertragsbezogenen Verpflichtungen erforderlich ist beziehungsweise wenn eine
            Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Internationale Datentransfers</h2>
          <p className="mt-4">
            Datenverarbeitung in Drittländern: Sofern wir Daten in ein Drittland (d. h. außerhalb
            der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln
            oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw.
            Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht (was
            erkennbar wird anhand der Postadresse des jeweiligen Anbieters oder wenn in der
            Datenschutzerklärung ausdrücklich auf den Datentransfer in Drittländer hingewiesen
            wird), erfolgt dies stets im Einklang mit den gesetzlichen Vorgaben.
          </p>
          <p className="mt-4">
            Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy
            Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom
            10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den
            jeweiligen Anbietern Standardvertragsklauseln abgeschlossen, die den Vorgaben der
            EU-Kommission entsprechen und vertragliche Verpflichtungen zum Schutz Ihrer Daten
            festlegen.
          </p>
          <p className="mt-4">
            Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF
            bildet die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche
            Sicherheit dienen. Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die
            Standardvertragsklauseln als zuverlässige Rückfalloption ein. So stellen wir sicher,
            dass Ihre Daten auch bei etwaigen politischen oder rechtlichen Veränderungen stets
            angemessen geschützt bleiben.
          </p>
          <p className="mt-4">
            Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF
            zertifiziert sind und ob Standardvertragsklauseln vorliegen. Weitere Informationen zum
            DPF und eine Liste der zertifizierten Unternehmen finden Sie auf der Website des
            US-Handelsministeriums unter{" "}
            <a
              className="outline-bracket"
              href="https://www.dataprivacyframework.gov/"
              target="_blank">
              https://www.dataprivacyframework.gov/
            </a>{" "}
            (in englischer Sprache).
          </p>
          <p className="mt-4">
            Für Datenübermittlungen in andere Drittländer gelten entsprechende Sicherheitsmaßnahmen,
            insbesondere Standardvertragsklauseln, ausdrückliche Einwilligungen oder gesetzlich
            erforderliche Übermittlungen. Informationen zu Drittlandtransfers und geltenden
            Angemessenheitsbeschlüssen können Sie dem Informationsangebot der EU-Kommission
            entnehmen:{" "}
            <a
              className="outline-bracket"
              href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
              target="_blank">
              https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de.
            </a>
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">
            Allgemeine Informationen zur Datenspeicherung und Löschung
          </h2>
          <p className="mt-4">
            Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen
            Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine
            weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
            denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt
            werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder
            besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
          </p>
          <p className="mt-4">
            Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt
            werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz
            der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert
            werden.
          </p>
          <p className="mt-4">
            Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und
            Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.
          </p>
          <p className="mt-4">
            Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist
            stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich
            vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe
            aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung
            rechtfertigen.
          </p>
          <p className="mt-4">
            Aufbewahrung und Löschung von Daten: Die folgenden allgemeinen Fristen gelten für die
            Aufbewahrung und Archivierung nach deutschem Recht:
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>10 Jahre</strong> - Aufbewahrungsfrist für Bücher und Aufzeichnungen,
              Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem
              Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§
              147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4
              HGB).
            </li>
            <li className="list-disc">
              <strong>8 Jahre</strong> - Buchungsbelege, wie z.B. Rechnungen und Kostenbelege (§ 147
              Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4
              HGB).
            </li>
            <li className="list-disc">
              <strong>6 Jahre</strong> - Übrige Geschäftsunterlagen: empfangene Handels- oder
              Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige
              Unterlagen, soweit sie für die Besteuerung von Bedeutung sind, z.B. Stundenlohnzettel,
              Betriebsabrechnungsbögen, Kalkulationsunterlagen, Preisauszeichnungen, aber auch
              Lohnabrechnungsunterlagen, soweit sie nicht bereits Buchungsbelege sind und
              Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3
              i.V.m. Abs. 4 HGB).
            </li>
            <li className="list-disc">
              <strong>3 Jahre</strong> - Daten, die erforderlich sind, um potenzielle
              Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und
              Rechte zu berücksichtigen sowie damit verbundene Anfragen zu bearbeiten, basierend auf
              früheren Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die Dauer der
              regulären gesetzlichen Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199 BGB).
            </li>
          </ul>
          <p className="mt-4">
            Fristbeginn mit Ablauf des Jahres: Beginnt eine Frist nicht ausdrücklich zu einem
            bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende
            des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall
            laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das
            fristauslösende Ereignis der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige
            Beendigung des Rechtsverhältnisses.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Rechte der betroffenen Personen</h2>
          <p className="mt-4">
            Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der
            DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>
                Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes
                Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger
                Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                Direktwerbung in Verbindung steht.
              </strong>
            </li>
            <li className="list-disc">
              <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte
              Einwilligungen jederzeit zu widerrufen.
            </li>
            <li className="list-disc">
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu
              verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
              sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen
              Vorgaben.
            </li>
            <li className="list-disc">
              <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen
              Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die
              Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
            </li>
            <li className="list-disc">
              <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach
              Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
              unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
              eine Einschränkung der Verarbeitung der Daten zu verlangen.
            </li>
            <li className="list-disc">
              <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende
              Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in
              einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren
              Übermittlung an einen anderen Verantwortlichen zu fordern.
            </li>
            <li className="list-disc">
              <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines
              anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf
              Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
              gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
              Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Geschäftliche Leistungen</h2>
          <p className="mt-4">
            Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner, etwa
            Kunden, Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner
            (zusammenfassend „Vertragspartner"), zur Anbahnung, Durchführung und Abwicklung von
            Vertragsverhältnissen sowie vergleichbaren Rechtsverhältnissen. Dies umfasst auch
            vorvertragliche Maßnahmen, die auf Anfrage erfolgen, sowie die Kommunikation im
            Zusammenhang mit dem jeweiligen Vertragsverhältnis.
          </p>
          <p className="mt-4">
            Die Verarbeitung dient insbesondere der Erfüllung unserer vertraglichen Haupt- und
            Nebenpflichten. Hierzu zählen die Erbringung der vereinbarten Leistungen, etwaige
            Aktualisierungs- und Informationspflichten, die Bearbeitung von Gewährleistungs- und
            sonstigen Leistungsstörungen, die Abwicklung von Widerrufen, Kündigungen von
            Dauerschuldverhältnissen, Rückabwicklungen, Erstattungen sowie die Bearbeitung sonstiger
            vertragsbezogener Erklärungen und Anfragen. Erfasst sind sowohl einmalige Verträge als
            auch fortlaufende Vertragsbeziehungen.
          </p>
          <p className="mt-4">
            Verarbeitet werden insbesondere Stammdaten wie Name, Anschrift und ggf. Firma,
            Kontaktdaten wie E-Mail-Adresse und Telefonnummer, Vertrags- und Leistungsdaten wie
            Vertragsgegenstand, Vertragslaufzeit, Bestell- oder Vorgangsnummer, Nutzungs- und
            Leistungsdaten, Zahlungs- und Abrechnungsdaten sowie Kommunikationsinhalte und
            -historien. Soweit erforderlich, verarbeiten wir auch Daten, die uns im Rahmen der
            Durchführung eines Auftrags offengelegt oder übermittelt werden.
          </p>
          <p className="mt-4">
            Darüber hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte sowie zur Erfüllung
            gesetzlicher Verpflichtungen. Dies umfasst insbesondere handels- und steuerrechtliche
            Aufbewahrungspflichten, Dokumentationspflichten sowie gegebenenfalls Nachweis- und
            Rechenschaftspflichten. Zudem erfolgt eine Verarbeitung auf Grundlage unserer
            berechtigten Interessen an einer ordnungsgemäßen Geschäftsführung, internen Verwaltung,
            Risikosteuerung und IT-Sicherheit sowie am Schutz unseres Geschäftsbetriebs und unserer
            Vertragspartner vor Missbrauch, Gefährdung von Daten, Geheimnissen und sonstigen
            Rechtsgütern. Hierzu kann auch die Einbindung externer Dienstleister wie IT- und
            Telekommunikationsanbieter, Transport- und Logistikunternehmen, Zahlungsdienstleister,
            Banken, Steuer- und Rechtsberater oder sonstige Erfüllungsgehilfen gehören, soweit dies
            für die Vertragsdurchführung oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.
          </p>
          <p className="mt-4">
            Eine Weitergabe personenbezogener Daten an Dritte erfolgt ausschließlich, soweit dies
            zur Vertragserfüllung, zur Durchführung vorvertraglicher Maßnahmen, zur Wahrung
            berechtigter Interessen oder zur Erfüllung gesetzlicher Verpflichtungen erforderlich
            ist. Über darüberhinausgehende Verarbeitungen, insbesondere zu Marketingzwecken,
            informieren wir gesondert im Rahmen dieser Datenschutzerklärung.
          </p>
          <p className="mt-4">
            Welche Daten im Einzelfall erforderlich sind, teilen wir den Vertragspartnern im Rahmen
            der Datenerhebung mit, etwa in Onlineformularen durch entsprechende Kennzeichnung oder
            im persönlichen Kontakt.
          </p>
          <p className="mt-4">
            Die Löschung der Daten erfolgt, sobald sie für die vorgenannten Zwecke nicht mehr
            erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            Gesetzliche Aufbewahrungsfristen, insbesondere nach Handels- und Steuerrecht, können
            eine längere Speicherung erfordern. Daten, die im Rahmen eines konkreten Auftrags
            übermittelt wurden, löschen wir nach Abschluss des Auftrags und Ablauf etwaiger
            Aufbewahrungsfristen, sofern keine weiteren gesetzlichen oder vertraglichen
            Verpflichtungen zur Speicherung bestehen.
          </p>
          <p className="mt-4">
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO zur Durchführung
            vorvertraglicher Maßnahmen und zur Erfüllung des jeweiligen Vertragsverhältnisses sowie
            Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Verpflichtungen. Soweit die
            Verarbeitung auf berechtigten Interessen beruht, erfolgt sie auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO gestützt
            wird, erfolgt sie zur Wahrung unserer berechtigten Interessen an einer ordnungsgemäßen
            und effizienten Geschäftsorganisation, der internen Verwaltung und Dokumentation von
            Geschäftsvorgängen, der Durchsetzung und Verteidigung von Rechtsansprüchen, der
            Sicherstellung der IT- und Datensicherheit, der Verhinderung von Missbrauch und Betrug
            sowie der wirtschaftlichen Steuerung und Weiterentwicklung unseres Geschäftsbetriebs.
            Diese Interessen bestehen insbesondere in der Gewährleistung eines sicheren und
            rechtssicheren Geschäftsbetriebs sowie in der Wahrung unserer unternehmerischen
            Handlungsfähigkeit.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. der vollständige Name,
              Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z.B.
              Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z.B. Post- und
              E-Mail-Adressen oder Telefonnummern); Vertragsdaten (z.B. Vertragsgegenstand,
              Laufzeit, Kundenkategorie); Nutzungsdaten (z.B. Seitenaufrufe und Verweildauer,
              Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
              Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations-
              und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
              beteiligte Personen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber;
              Interessenten. Geschäfts- und Vertragspartner.
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung
              vertraglicher Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmaßnahmen;
              Kommunikation; Büro- und Organisationsverfahren; Organisations- und
              Verwaltungsverfahren. Geschäftsprozesse und betriebswirtschaftliche Verfahren.
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
              (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit.
              c) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p className="mt-2">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Onlineshop, Bestellformulare, E-Commerce und Leistungserfüllung: </strong>Wir
              verarbeiten die Daten unserer Kunden, um ihnen die Auswahl, den Erwerb, bzw. die
              Bestellung der gewählten Produkte, Waren sowie verbundener Leistungen, als auch deren
              Bezahlung und Bereitstellung, bzw. Zustellung, oder Ausführung zu ermöglichen. Sofern
              für die Ausführung einer Bestellung erforderlich, setzen wir Dienstleister,
              insbesondere Post-, Speditions- und Versandunternehmen ein, um die Lieferung, bzw.
              Ausführung gegenüber unseren Kunden durchzuführen. Für die Abwicklung der
              Zahlungsvorgänge nehmen wir die Dienste von Banken und Zahlungsdienstleistern in
              Anspruch. Die erforderlichen Angaben sind als solche im Rahmen des Bestell- bzw.
              vergleichbaren Erwerbsvorgangs gekennzeichnet und umfassen die zur Auslieferung, bzw.
              Zurverfügungstellung und Abrechnung benötigten Angaben sowie Kontaktinformationen, um
              etwaige Rücksprache halten zu können;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </span>
            </li>
            <li className="list-disc">
              <strong>Agenturdienstleistungen: </strong>Wir verarbeiten die Daten unserer Kunden im
              Rahmen unserer vertraglichen Leistungen, zu denen z.B. konzeptionelle und strategische
              Beratung, Kampagnenplanung, Software- und Designentwicklung/-beratung oder -pflege,
              Umsetzung von Kampagnen und Prozessen, Handling, Serveradministration, Datenanalyse/
              Beratungsleistungen und Schulungsleistungen gehören können;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </span>
            </li>
            <li className="list-disc">
              <strong>Projekt- und Entwicklungsleistungen: </strong>Wir verarbeiten die Daten
              unserer Kunden sowie Auftraggeber (nachfolgend einheitlich als "Kunden" bezeichnet),
              um ihnen die Auswahl, den Erwerb bzw. die Beauftragung der gewählten Leistungen oder
              Werke sowie verbundener Tätigkeiten als auch deren Bezahlung und Zurverfügungstellung
              bzw. Ausführung oder Erbringung zu ermöglichen.
              <br />
              <br />
              Die erforderlichen Angaben sind als solche im Rahmen des Auftrags-, Bestell- bzw.
              vergleichbaren Vertragsschlusses gekennzeichnet und umfassen die zur
              Leistungserbringung und Abrechnung benötigten Angaben sowie Kontaktinformationen, um
              etwaige Rücksprachen halten zu können. Soweit wir Zugang zu Informationen der
              Endkunden, Mitarbeitern oder anderer Personen erhalten, verarbeiten wir diese im
              Einklang mit den gesetzlichen und vertraglichen Vorgaben;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </span>
            </li>
            <li className="list-disc">
              <strong>Technische Dienstleistungen: </strong>Wir verarbeiten die Daten unserer Kunden
              sowie Auftraggeber (nachfolgend einheitlich als "Kunden" bezeichnet), um ihnen die
              Auswahl, den Erwerb bzw. die Beauftragung der gewählten Leistungen oder Werke sowie
              verbundener Tätigkeiten als auch deren Bezahlung und Zurverfügungstellung bzw.
              Ausführung oder Erbringung zu ermöglichen.
              <br />
              <br />
              Die erforderlichen Angaben sind als solche im Rahmen des Auftrags-, Bestell- bzw.
              vergleichbaren Vertragsschlusses gekennzeichnet und umfassen die zur
              Leistungserbringung und Abrechnung benötigten Angaben sowie Kontaktinformationen, um
              etwaige Rücksprachen halten zu können. Soweit wir Zugang zu Informationen der
              Endkunden, Mitarbeitern oder anderer Personen erhalten, verarbeiten wir diese im
              Einklang mit den gesetzlichen und vertraglichen Vorgaben;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">
            Bereitstellung des Onlineangebots und Webhosting
          </h2>
          <p className="mt-4">
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung
            stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die
            notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder
            das Endgerät der Nutzer zu übermitteln.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und
              Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
              Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations-
              und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
              beteiligte Personen). Protokolldaten (z.B. Logfiles betreffend Logins oder den Abruf
              von Daten oder Zugriffszeiten.).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Bereitstellung
              unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur
              (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten
              (Computer, Server etc.)); Sicherheitsmaßnahmen. Erbringung vertraglicher Leistungen
              und Erfüllung vertraglicher Pflichten.
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </li>
          </ul>
          <p className="mt-2">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die
              Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und
              Software, die wir von einem entsprechenden Serveranbieter (auch "Webhoster" genannt)
              mieten oder anderweitig beziehen;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO).
              </span>
            </li>
            <li className="list-disc">
              <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser
              Onlineangebot wird in Form von sogenannten "Server-Logfiles" protokolliert. Zu den
              Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien,
              Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen
              Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die
              zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider
              gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden,
              z.B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
              missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die
              Auslastung der Server und ihre Stabilität sicherzustellen;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO).{" "}
              </span>
              <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer von
              maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren
              weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen
              Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
            </li>
            <li className="list-disc">
              <strong>Content-Delivery-Network: </strong>Wir setzen ein "Content-Delivery-Network"
              (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes,
              insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe
              regional verteilter und über das Internet verbundener Server schneller und sicherer
              ausgeliefert werden können;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO).
              </span>
            </li>
            <li className="list-disc">
              <strong>1&1 IONOS: </strong>Leistungen auf dem Gebiet der Bereitstellung von
              informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z.B.
              Speicherplatz und/oder Rechenkapazitäten); <strong>Dienstanbieter:</strong> 1&1 IONOS
              SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO);{" "}
              </span>
              <strong>Website:</strong>{" "}
              <a className="outline-bracket" href="https://www.ionos.de" target="_blank">
                https://www.ionos.de
              </a>
              ; <strong>Datenschutzerklärung:</strong>{" "}
              <a
                className="outline-bracket"
                href="https://www.ionos.de/terms-gtc/terms-privacy"
                target="_blank">
                https://www.ionos.de/terms-gtc/terms-privacy
              </a>
              . <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
              <a
                className="outline-bracket"
                href="https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/vereinbarung-zur-auftragsverarbeitung-avv-mit-ionos-abschliessen/"
                target="_blank">
                https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/vereinbarung-zur-auftragsverarbeitung-avv-mit-ionos-abschliessen/
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Einsatz von Cookies</h2>
          <p className="mt-4">
            Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der
            Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf
            unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der
            Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der
            Besucherströme. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen
            wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht
            notwendig, setzen wir auf unsere berechtigten Interessen. Dies gilt, wenn das Speichern
            und Auslesen von Informationen unerlässlich ist, um ausdrücklich angeforderte Inhalte
            und Funktionen bereitstellen zu können. Dazu zählen etwa die Speicherung von
            Einstellungen sowie die Sicherstellung der Funktionalität und Sicherheit unseres
            Onlineangebots. Die Einwilligung kann jederzeit widerrufen werden. Wir informieren klar
            über deren Umfang und welche Cookies genutzt werden.
          </p>
          <p className="mt-4">
            <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Ob wir
            personenbezogene Daten mithilfe von Cookies verarbeiten, hängt von einer Einwilligung
            ab. Liegt eine Einwilligung vor, dient sie als Rechtsgrundlage. Ohne Einwilligung
            stützen wir uns auf unsere berechtigten Interessen, die vorstehend in diesem Abschnitt
            und im Kontext der jeweiligen Dienste und Verfahren erläutert sind.
          </p>
          <p className="mt-4">
            <strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden
            Arten von Cookies unterschieden:
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Temporäre Cookies (auch: Session- oder Sitzungscookies):</strong> Temporäre
              Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und
              sein Endgerät (z.B. Browser oder mobile Applikation) geschlossen hat.
            </li>
            <li className="list-disc">
              <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem
              Schließen des Endgeräts gespeichert. So können beispielsweise der Log-in-Status
              gespeichert und bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine
              Website erneut besucht. Ebenso können die mithilfe von Cookies erhobenen Nutzerdaten
              zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern keine expliziten Angaben
              zur Art und Speicherdauer von Cookies mitteilen (z.B. im Rahmen der Einholung der
              Einwilligung), sollten sie davon ausgehen, dass diese permanent sind und die
              Speicherdauer bis zu zwei Jahre betragen kann.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out): </strong>Nutzer
            können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen
            Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels
            der Privatsphäre-Einstellungen ihres Browsers, erklären.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und Verfahrensdaten
              (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
            </li>
          </ul>
          <p className="mt-2">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir
              setzen eine Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer
              zur Verwendung von Cookies oder zu den im Rahmen der Einwilligungs-Management-Lösung
              genannten Verfahren und Anbietern eingeholt wird. Dieses Verfahren dient der
              Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen,
              insbesondere bezogen auf den Einsatz von Cookies und vergleichbaren Technologien, die
              zur Speicherung, zum Auslesen und zur Verarbeitung von Informationen auf den
              Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses Verfahrens werden die
              Einwilligungen der Nutzer für die Nutzung von Cookies und die damit verbundenen
              Verarbeitungen von Informationen, einschließlich der im
              Einwilligungs-Management-Verfahren genannten spezifischen Verarbeitungen und Anbieter,
              eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu verwalten
              und zu widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute
              Abfrage zu vermeiden und den Nachweis der Einwilligung gemäß der gesetzlichen
              Anforderungen führen zu können. Die Speicherung erfolgt serverseitig und/oder in einem
              Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer Technologien, um die
              Einwilligung einem spezifischen Nutzer oder dessen Gerät zuordnen zu können. Sofern
              keine spezifischen Angaben zu den Anbietern von Einwilligungs-Management-Diensten
              vorliegen, gelten folgende allgemeine Hinweise: Die Dauer der Speicherung der
              Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer
              Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den
              Angaben zum Umfang der Einwilligung (z.B. betreffende Kategorien von Cookies und/oder
              Diensteanbieter) sowie Informationen über den Browser, das System und das verwendete
              Endgerät gespeichert wird;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Blogs und Publikationsmedien</h2>
          <p className="mt-4">
            Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation
            (nachfolgend "Publikationsmedium"). Die Daten der Leser werden für die Zwecke des
            Publikationsmediums nur insoweit verarbeitet, als es für dessen Darstellung und die
            Kommunikation zwischen Autoren und Lesern oder aus Gründen der Sicherheit erforderlich
            ist. Im Übrigen verweisen wir auf die Informationen zur Verarbeitung der Besucher
            unseres Publikationsmediums im Rahmen dieser Datenschutzhinweise.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. der vollständige Name,
              Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z.B. Post- und
              E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z.B. textliche oder bildliche
              Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z.B. Angaben
              zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z.B. Seitenaufrufe
              und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen
              und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-,
              Kommunikations- und Verfahrensdaten (z.B. IP-Adressen, Zeitangaben,
              Identifikationsnummern, beteiligte Personen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Feedback (z.B.
              Sammeln von Feedback via Online-Formular); Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit; Sicherheitsmaßnahmen. Organisations- und Verwaltungsverfahren.
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </li>
          </ul>
          <p className="mt-4">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Kommentare und Beiträge: </strong>Wenn Nutzer Kommentare oder sonstige
              Beiträge hinterlassen, können ihre IP-Adressen auf Grundlage unserer berechtigten
              Interessen gespeichert werden. Das erfolgt zu unserer Sicherheit, falls jemand in
              Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen,
              verbotene politische Propaganda etc.). In diesem Fall können wir selbst für den
              Kommentar oder Beitrag belangt werden und sind daher an der Identität des Verfassers
              interessiert.
              <br />
              <br />
              Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen die
              Angaben der Nutzer zwecks Spamerkennung zu verarbeiten.
              <br />
              <br />
              Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen die
              IP-Adressen der Nutzer für deren Dauer zu speichern und Cookies zu verwenden, um
              Mehrfachabstimmungen zu vermeiden.
              <br />
              <br />
              Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur Person,
              etwaige Kontakt- sowie Webseiteninformationen als auch die inhaltlichen Angaben werden
              von uns bis zum Widerspruch der Nutzer dauerhaft gespeichert;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO).
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Kontakt- und Anfrageverwaltung</h2>
          <p className="mt-4">
            Bei der Kontaktaufnahme mit uns (z.B. per Post, Kontaktformular, E-Mail, Telefon oder
            via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden
            die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der
            Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. Post- und E-Mail-Adressen
              oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und
              Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft
              oder Zeitpunkt der Erstellung). Meta-, Kommunikations- und Verfahrensdaten (z. B.
              IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Kommunikationspartner.
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation;
              Organisations- und Verwaltungsverfahren; Feedback (z.B. Sammeln von Feedback via
              Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
              DSGVO).
            </li>
          </ul>
          <p className="mt-4">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Kontaktformular: </strong>Bei Kontaktaufnahme über unser Kontaktformular, per
              E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten
              personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens.
              Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls
              weitere Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung
              erforderlich sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der
              Kontaktaufnahme und Kommunikation;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO).
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Webanalyse, Monitoring und Optimierung</h2>
          <p className="mt-4">
            Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der
            Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder demografische
            Informationen zu den Besuchern, wie beispielsweise Alter oder Geschlecht, als pseudonyme
            Werte umfassen. Mithilfe der Reichweitenanalyse können wir zum Beispiel erkennen, zu
            welcher Zeit unser Onlineangebot oder dessen Funktionen beziehungsweise Inhalte am
            häufigsten genutzt werden, oder zur Wiederverwendung einladen. Ebenso ist es uns
            möglich, nachzuvollziehen, welche Bereiche der Optimierung bedürfen.{" "}
          </p>
          <p className="mt-4">
            Neben der Webanalyse können wir auch Testverfahren einsetzen, um etwa unterschiedliche
            Versionen unseres Onlineangebots oder seiner Bestandteile zu testen und zu optimieren.
          </p>
          <p className="mt-4">
            Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile, also zu
            einem Nutzungsvorgang zusammengefasste Daten, angelegt und Informationen in einem
            Browser bzw. in einem Endgerät gespeichert und dann ausgelesen werden. Zu den erhobenen
            Angaben gehören insbesondere besuchte Websites und dort genutzte Elemente sowie
            technische Auskünfte, wie etwa der verwendete Browser, das benutzte Computersystem sowie
            Angaben zu Nutzungszeiten. Sofern sich Nutzer in die Erhebung ihrer Standortdaten uns
            gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste einverstanden
            erklärt haben, ist auch die Verarbeitung von Standortdaten möglich.
          </p>
          <p className="mt-4">
            Darüber hinaus werden die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein
            IP-Masking-Verfahren (d. h. Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz
            der Nutzer. Generell werden die im Rahmen von Webanalyse, A/B-Testings und Optimierung
            keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
            Pseudonyme. Das heißt, wir als auch die Anbieter der eingesetzten Software kennen nicht
            die tatsächliche Identität der Nutzer, sondern nur die zum Zweck der jeweiligen
            Verfahren in deren Profilen gespeicherten Angaben.
          </p>
          <p className="mt-4">
            Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um deren Einwilligung in den Einsatz
            der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die
            Einwilligung dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten
            Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen
            Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
            Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und
              Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
              Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations-
              und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
              beteiligte Personen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong>{" "}
              Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
              Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung". Speicherung von Cookies
              von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche
              Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer
              gespeichert werden.).
            </li>
            <li className="list-disc">
              <strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">
            Präsenzen in sozialen Netzwerken (Social Media)
          </h2>
          <p className="mt-4">
            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem
            Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen
            über uns anzubieten.
          </p>
          <p className="mt-4">
            Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen
            Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben,
            weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
          </p>
          <p className="mt-4">
            Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für
            Marktforschungs- und Werbezwecke verarbeitet. So können beispielsweise anhand des
            Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile
            erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa
            Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den
            Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern
            der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer
            gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von
            den Nutzern verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder
            der jeweiligen Plattformen und dort eingeloggt sind).
          </p>
          <p className="mt-4">
            Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
            Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die Datenschutzerklärungen und
            Angaben der Betreiber der jeweiligen Netzwerke.
          </p>
          <p className="mt-4">
            Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen
            wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden
            können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und können direkt
            entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
            benötigen, dann können Sie sich an uns wenden.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. Post- und E-Mail-Adressen
              oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und
              Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft
              oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
              Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
              Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
            </li>
            <li className="list-disc">
              <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li className="list-disc">
              <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation;
              Feedback (z.B. Sammeln von Feedback via Online-Formular). Öffentlichkeitsarbeit.
            </li>
            <li className="list-disc">
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li className="list-disc">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </li>
          </ul>
          <p className="mt-4">
            <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>LinkedIn: </strong>Soziales Netzwerk - Wir sind gemeinsam mit LinkedIn Irland
              Unlimited Company für die Erhebung (jedoch nicht die weitere Verarbeitung) von Daten
              der Besucher verantwortlich, die zur Erstellung der „Page-Insights" (Statistiken)
              unserer LinkedIn-Profile genutzt werden. Zu diesen Daten gehören Informationen über
              die Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie interagieren, sowie
              die von ihnen vorgenommenen Handlungen. Außerdem werden Details über die genutzten
              Geräte erfasst, wie z.B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen
              und Cookie-Daten, sowie Angaben aus den Nutzerprofilen, wie Berufsfunktion, Land,
              Branche, Hierarchieebene, Unternehmensgröße und Beschäftigungsstatus.
              Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch LinkedIn können den
              Datenschutzhinweisen von LinkedIn entnommen werden:{" "}
              <a
                className="outline-bracket"
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">
                https://www.linkedin.com/legal/privacy-policy.
              </a>
              <br />
              Wir haben mit LinkedIn Irland eine spezielle Vereinbarung geschlossen („Page Insights
              Joint Controller Addendum",{" "}
              <a
                className="outline-bracket"
                href="https://legal.linkedin.com/pages-joint-controller-addendum"
                target="_blank">
                https://legal.linkedin.com/pages-joint-controller-addendum
              </a>
              ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen LinkedIn beachten
              muss und in der LinkedIn sich bereit erklärt hat, die Rechte der Betroffenen zu
              erfüllen (d. h. Nutzer können z.B. Auskunfts- oder Löschungsanfragen direkt an
              LinkedIn richten). Die Rechte der Nutzer (insbesondere das Recht auf Auskunft,
              Löschung, Widerspruch und Beschwerde bei der zuständigen Aufsichtsbehörde) werden
              durch die Vereinbarungen mit LinkedIn nicht eingeschränkt. Die gemeinsame
              Verantwortlichkeit beschränkt sich auf die Erhebung und Übermittlung der Daten an
              LinkedIn Irland Unlimited Company, ein Unternehmen mit Sitz in der EU. Die weitere
              Verarbeitung der Daten obliegt ausschließlich LinkedIn Irland Unlimited Company,
              insbesondere was die Übermittlung der Daten an die Muttergesellschaft LinkedIn
              Corporation in den USA betrifft; <strong>Dienstanbieter:</strong> LinkedIn Ireland
              Unlimited Company, Wilton Plaza, Dublin 2, Irland;{" "}
              <span className="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                f) DSGVO);{" "}
              </span>
              <strong>Website:</strong>{" "}
              <a className="outline-bracket" href="https://www.linkedin.com" target="_blank">
                https://www.linkedin.com
              </a>
              ; <strong>Datenschutzerklärung:</strong>{" "}
              <a
                className="outline-bracket"
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">
                https://www.linkedin.com/legal/privacy-policy
              </a>
              ; <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF),
              Standardvertragsklauseln (
              <a
                className="outline-bracket"
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">
                https://www.linkedin.com/legal/privacy-policy
              </a>
              ). <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>{" "}
              <a
                className="outline-bracket"
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank">
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Änderung und Aktualisierung</h2>
          <p className="mt-4">
            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
            informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns
            durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald
            durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
            sonstige individuelle Benachrichtigung erforderlich wird.
          </p>
          <p className="mt-4">
            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von
            Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich
            über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-display-xs font-bold">Begriffsdefinitionen</h2>
          <p className="mt-4">
            In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung
            verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind,
            gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen
            vor allem dem Verständnis dienen.
          </p>
          <ul className="mt-2 pl-5">
            <li className="list-disc">
              <strong>Beschäftigte:</strong> Als Beschäftigte werden Personen bezeichnet, die in
              einem Beschäftigungsverhältnis stehen, sei es als Mitarbeiter, Angestellte oder in
              ähnlichen Positionen. Ein Beschäftigungsverhältnis ist eine rechtliche Beziehung
              zwischen einem Arbeitgeber und einem Arbeitnehmer, die durch einen Arbeitsvertrag oder
              eine Vereinbarung festgelegt wird. Es beinhaltet die Verpflichtung des Arbeitgebers,
              dem Arbeitnehmer eine Vergütung zu zahlen, während der Arbeitnehmer seine
              Arbeitsleistung erbringt. Das Beschäftigungsverhältnis umfasst verschiedene Phasen,
              darunter die Begründung, in der der Arbeitsvertrag geschlossen wird, die Durchführung,
              in der der Arbeitnehmer seine Arbeitstätigkeit ausübt, und die Beendigung, wenn das
              Beschäftigungsverhältnis endet, sei es durch Kündigung, Aufhebungsvertrag oder
              anderweitig. Beschäftigtendaten sind alle Informationen, die sich auf diese Personen
              beziehen und im Kontext ihrer Beschäftigung stehen. Dies umfasst Aspekte wie
              persönliche Identifikationsdaten, Identifikationsnummern, Gehalts- und Bankdaten,
              Arbeitszeiten, Urlaubsansprüche, Gesundheitsdaten und Leistungsbeurteilungen.{" "}
            </li>
            <li className="list-disc">
              <strong>Bestandsdaten:</strong> Bestandsdaten umfassen wesentliche Informationen, die
              für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten, Profilen
              und ähnlichen Zuordnungen notwendig sind. Diese Daten können u.a. persönliche und
              demografische Angaben wie Namen, Kontaktinformationen (Adressen, Telefonnummern,
              E-Mail-Adressen), Geburtsdaten und spezifische Identifikatoren (Benutzer-IDs)
              beinhalten. Bestandsdaten bilden die Grundlage für jegliche formelle Interaktion
              zwischen Personen und Diensten, Einrichtungen oder Systemen, indem sie eine eindeutige
              Zuordnung und Kommunikation ermöglichen.{" "}
            </li>
            <li className="list-disc">
              <strong>Inhaltsdaten:</strong> Inhaltsdaten umfassen Informationen, die im Zuge der
              Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden.
              Diese Kategorie von Daten kann Texte, Bilder, Videos, Audiodateien und andere
              multimediale Inhalte einschließen, die auf verschiedenen Plattformen und Medien
              veröffentlicht werden. Inhaltsdaten sind nicht nur auf den eigentlichen Inhalt
              beschränkt, sondern beinhalten auch Metadaten, die Informationen über den Inhalt
              selbst liefern, wie Tags, Beschreibungen, Autoreninformationen und
              Veröffentlichungsdaten{" "}
            </li>
            <li className="list-disc">
              <strong>Kontaktdaten:</strong> Kontaktdaten sind essentielle Informationen, die die
              Kommunikation mit Personen oder Organisationen ermöglichen. Sie umfassen u.a.
              Telefonnummern, postalische Adressen und E-Mail-Adressen, sowie Kommunikationsmittel
              wie soziale Medien-Handles und Instant-Messaging-Identifikatoren.{" "}
            </li>
            <li className="list-disc">
              <strong>Meta-, Kommunikations- und Verfahrensdaten:</strong> Meta-, Kommunikations-
              und Verfahrensdaten sind Kategorien, die Informationen über die Art und Weise
              enthalten, wie Daten verarbeitet, übermittelt und verwaltet werden. Meta-Daten, auch
              bekannt als Daten über Daten, umfassen Informationen, die den Kontext, die Herkunft
              und die Struktur anderer Daten beschreiben. Sie können Angaben zur Dateigröße, dem
              Erstellungsdatum, dem Autor eines Dokuments und den Änderungshistorien beinhalten.
              Kommunikationsdaten erfassen den Austausch von Informationen zwischen Nutzern über
              verschiedene Kanäle, wie E-Mail-Verkehr, Anrufprotokolle, Nachrichten in sozialen
              Netzwerken und Chat-Verläufe, inklusive der beteiligten Personen, Zeitstempel und
              Übertragungswege. Verfahrensdaten beschreiben die Prozesse und Abläufe innerhalb von
              Systemen oder Organisationen, einschließlich Workflow-Dokumentationen, Protokolle von
              Transaktionen und Aktivitäten, sowie Audit-Logs, die zur Nachverfolgung und
              Überprüfung von Vorgängen verwendet werden.{" "}
            </li>
            <li className="list-disc">
              <strong>Nutzungsdaten:</strong> Nutzungsdaten beziehen sich auf Informationen, die
              erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder Plattformen
              interagieren. Diese Daten umfassen eine breite Palette von Informationen, die
              aufzeigen, wie Nutzer Anwendungen nutzen, welche Funktionen sie bevorzugen, wie lange
              sie auf bestimmten Seiten verweilen und über welche Pfade sie durch eine Anwendung
              navigieren. Nutzungsdaten können auch die Häufigkeit der Nutzung, Zeitstempel von
              Aktivitäten, IP-Adressen, Geräteinformationen und Standortdaten einschließen. Sie sind
              besonders wertvoll für die Analyse des Nutzerverhaltens, die Optimierung von
              Benutzererfahrungen, das Personalisieren von Inhalten und das Verbessern von Produkten
              oder Dienstleistungen. Darüber hinaus spielen Nutzungsdaten eine entscheidende Rolle
              beim Erkennen von Trends, Vorlieben und möglichen Problembereichen innerhalb digitaler
              Angebote{" "}
            </li>
            <li className="list-disc">
              <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten" sind alle
              Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
              Person (im Folgenden "betroffene Person") beziehen; als identifizierbar wird eine
              natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
              zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer
              Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
              identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen,
              psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen
              Person sind.{" "}
            </li>
            <li className="list-disc">
              <strong>Profile mit nutzerbezogenen Informationen:</strong> Die Verarbeitung von
              "Profilen mit nutzerbezogenen Informationen", bzw. kurz "Profilen" umfasst jede Art
              der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass
              diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die
              sich auf eine natürliche Person beziehen (je nach Art der Profilbildung können dazu
              unterschiedliche Informationen betreffend die Demographie, Verhalten und Interessen,
              wie z.B. die Interaktion mit Webseiten und deren Inhalten, etc.) zu analysieren, zu
              bewerten oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder
              Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken
              des Profilings werden häufig Cookies und Web-Beacons eingesetzt.{" "}
            </li>
            <li className="list-disc">
              <strong>Protokolldaten:</strong> Protokolldaten sind Informationen über Ereignisse
              oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden. Diese Daten
              enthalten typischerweise Informationen wie Zeitstempel, IP-Adressen, Benutzeraktionen,
              Fehlermeldungen und andere Details über die Nutzung oder den Betrieb eines Systems.
              Protokolldaten werden oft zur Analyse von Systemproblemen, zur Sicherheitsüberwachung
              oder zur Erstellung von Leistungsberichten verwendet.{" "}
            </li>
            <li className="list-disc">
              <strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als Web Analytics
              bezeichnet) dient der Auswertung der Besucherströme eines Onlineangebotes und kann das
              Verhalten oder Interessen der Besucher an bestimmten Informationen, wie z.B. Inhalten
              von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können Betreiber von
              Onlineangeboten z.B. erkennen, zu welcher Zeit Nutzer ihre Webseiten besuchen und für
              welche Inhalte sie sich interessieren. Dadurch können sie z.B. die Inhalte der
              Webseiten besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der
              Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons eingesetzt, um
              wiederkehrende Besucher zu erkennen und so genauere Analysen zur Nutzung eines
              Onlineangebotes zu erhalten.{" "}
            </li>
            <li className="list-disc">
              <strong>Verantwortlicher:</strong> Als "Verantwortlicher" wird die natürliche oder
              juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam
              mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet, bezeichnet.{" "}
            </li>
            <li className="list-disc">
              <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe
              automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
              Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst
              praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern,
              das Übermitteln oder das Löschen.{" "}
            </li>
            <li className="list-disc">
              <strong>Vertragsdaten:</strong> Vertragsdaten sind spezifische Informationen, die sich
              auf die Formalisierung einer Vereinbarung zwischen zwei oder mehr Parteien beziehen.
              Sie dokumentieren die Bedingungen, unter denen Dienstleistungen oder Produkte
              bereitgestellt, getauscht oder verkauft werden. Diese Datenkategorie ist wesentlich
              für die Verwaltung und Erfüllung vertraglicher Verpflichtungen und umfasst sowohl die
              Identifikation der Vertragsparteien als auch die spezifischen Bedingungen und
              Konditionen der Vereinbarung. Vertragsdaten können Start- und Enddaten des Vertrages,
              die Art der vereinbarten Leistungen oder Produkte, Preisvereinbarungen,
              Zahlungsbedingungen, Kündigungsrechte, Verlängerungsoptionen und spezielle Bedingungen
              oder Klauseln umfassen. Sie dienen als rechtliche Grundlage für die Beziehung zwischen
              den Parteien und sind entscheidend für die Klärung von Rechten und Pflichten, die
              Durchsetzung von Ansprüchen und die Lösung von Streitigkeiten.{" "}
            </li>
            <li className="list-disc">
              <strong>Zahlungsdaten:</strong> Zahlungsdaten umfassen sämtliche Informationen, die
              zur Abwicklung von Zahlungstransaktionen zwischen Käufern und Verkäufern benötigt
              werden. Diese Daten sind von entscheidender Bedeutung für den elektronischen Handel,
              das Online-Banking und jede andere Form der finanziellen Transaktion. Sie beinhalten
              Details wie Kreditkartennummern, Bankverbindungen, Zahlungsbeträge, Transaktionsdaten,
              Verifizierungsnummern und Rechnungsinformationen. Zahlungsdaten können auch
              Informationen über den Zahlungsstatus, Rückbuchungen, Autorisierungen und Gebühren
              enthalten.{" "}
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <p className="seal">
            <a
              href="https://datenschutz-generator.de/"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="outline-bracket text-black-02 text-sm">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
