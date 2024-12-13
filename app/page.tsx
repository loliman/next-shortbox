import Image from 'next/image';

export default function Page() {
  return (
      <main>
          <Image
              src="/shortbox_logo.png"
              width={150}
              height={50}
              alt="Shortbox Logo"
          />

          <h1>Willkommen auf Shortbox</h1>
          <h2>Dein Archiv für deutsche Marvel Comics</h2>

          <p>
              Shortbox listet alle deutschen Marvel Veröffentlichungen detailliert auf und ordnet diese den
              entsprechenden US Geschichten zu.

              Angefangen über Geschichten der bekanntesten Superhelden Spider-Man, Deadpool, den X-Men oder den Avengers
              oder unbekannteren Helden wie Moon Knight und den New Mutants, über Comics zum Marvel Cinematic Universe
              mit Captain America, Captain Marvel und Iron Man bis hin zu Western-Comics, Horror-Comics und
              Kinder-Comics wie den Glücksbärchis oder der Police Acadamy findet ihr hier alle Veröffentlichungen in
              offiziellen Ausgaben, Raubkopien oder Fan-Comics.

              Inspiriert durch maxithecat's UHBMCC wurde Shortbox 2018 ins Leben gerufen. Shortbox ist ein vollständig
              privates Projekt von mir für alle Marvel Fans.
              Aus diesem Grund unterliegen alle auf Shortbox gelisteten Informationen der Creative Commons License 3.0
              und stehen somit, unter Angabe der Quelle, jedem zur freien und kostenlosen Verfügung. Ausgenommen sind
              davon lediglich durch den ComicGuide bereitgestellte Cover, welche nicht ohne Genehmigung weiter
              verbreitet werden dürfen.
          </p>

          <Image
              src="https://www.comicguide.de/pics/large/97334.jpg"
              width={100}
              height={150}
              alt="Ein Cover"
              priority
          />
      </main>
  );
}
