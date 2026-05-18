const districts = [
  {
    id: "01",
    name: "The Undercity",
    mood: "einsam + hypnotisch",
    details: "U-Bahn-Tunnel, Wasser, Rohre, kaputte Screens und Sleepwalkers im Smartphone-Trance.",
  },
  {
    id: "02",
    name: "The Archive",
    mood: "sakral + algorithmisch",
    details: "Eine gigantische Bibliothek aus Datenservern, Diagrammen und rot glimmenden Augenprojektionen.",
  },
  {
    id: "03",
    name: "The Spire",
    mood: "vertikal + überwacht",
    details: "Wind, Drohnen, Präzisionssprünge und eine Megastruktur, die wie ein Kontrollturm atmet.",
  },
  {
    id: "04",
    name: "The Null Chamber",
    mood: "abstrakt + philosophisch",
    details: "Fast vollständige Schwärze, geometrische Linien und eine Welt aus reiner Egometrie.",
  },
];

const abilities = ["wall slide", "air dash", "glitch teleport", "gravity flip", "shadow phase", "symbol grappling"];
const enemies = ["The Watchers", "Sleepwalkers", "The Hollow", "The Choir"];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="scanline" />
        <div className="hero__copy">
          <p className="eyebrow">Egometry playable form / cinematic 2D platform adventure</p>
          <h1>
            rokz. <span>:</span> GODS AWAKE
          </h1>
          <p className="lede">
            Kein klassischer Held. Ein fragmentiertes Bewusstsein wandert durch BABYLON: eine kollabierende
            Megastruktur aus dystopischem Köln, sakraler Geometrie, kaputter digitaler Infrastruktur und Traumlogik.
          </p>
          <div className="hero__actions" aria-label="Core genre tags">
            <a href="#loop">Gameplay Loop</a>
            <a href="#world">World Map</a>
            <a href="#signature">Glitch Shift</a>
          </div>
        </div>
        <div className="sigil" aria-hidden="true">
          <div className="sigil__ring" />
          <div className="sigil__core" />
          <div className="wanderer" />
        </div>
      </section>

      <section className="section-shell manifesto" id="signature">
        <p className="eyebrow">Signature Feature</p>
        <div>
          <h2>GLITCH SHIFT</h2>
          <p>
            Der Wanderer verzerrt für Sekunden die Realität: verborgene Plattformen werden sichtbar, bestimmte Wände
            verlieren ihre Materie und die Bildfläche bricht in CRT-Shift, rote Artefakte und Datamosh-Fragmente auf.
          </p>
        </div>
      </section>

      <section className="section-shell loop" id="loop">
        <p className="eyebrow">Core Loop</p>
        <h2>Explore. Climb. Decode. Descend.</h2>
        <div className="loop__grid">
          {[
            "Erkunden",
            "Springen / Klettern",
            "Symbole aktivieren",
            "Gegner umgehen oder minimal bekämpfen",
            "Erinnerungsfragmente sammeln",
            "Neue Fähigkeit erhalten",
          ].map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell world" id="world">
        <p className="eyebrow">BABYLON / Districts</p>
        <h2>Eine Stadt, die eher Zustand als Ort ist.</h2>
        <div className="world__grid">
          {districts.map((district) => (
            <article className="district-card" key={district.name}>
              <span>{district.id}</span>
              <h3>{district.name}</h3>
              <p className="district-card__mood">{district.mood}</p>
              <p>{district.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell systems">
        <div>
          <p className="eyebrow">Movement Kit</p>
          <h2>Es muss sich gut anfühlen.</h2>
          <div className="pill-row">
            {abilities.map((ability) => (
              <span key={ability}>{ability}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Symbolic Threats</p>
          <h2>Wenige Gegner, starke Bedeutung.</h2>
          <div className="pill-row pill-row--red">
            {enemies.map((enemy) => (
              <span key={enemy}>{enemy}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell boss">
        <p className="eyebrow">Archetype Boss</p>
        <h2>THE ARCHITECT</h2>
        <p>
          Ein gigantisches Auge kontrolliert die Stadtstruktur. Der Kampf ist kein reiner Damage-Test, sondern
          Plattforming, Pattern Recognition und ein philosophisches Verhör aus fragmentierten Sätzen.
        </p>
      </section>
    </main>
  );
}
