import "../components/about.css";
import Footer from "../components/Footer.jsx";
import { useRevealOnScroll4 } from "../Hooks/ScrollAni3.jsx";

export default function Blog() {
  useRevealOnScroll4();

  // bruges til at fixe src pathing, forslået af chatGPT
  const withBase = (p = "") => {
    const base = import.meta.env.BASE_URL || "/";
    return base + p.replace(/^public\//, "").replace(/^\/?/, "");
  };

  return (
    <div>
      <section className="upperDetail">
        <img
          id="mainvideoDetail"
          src={withBase("videos/FrameVideo.jpg")}
          alt=""
        />
      </section>
      <div>
        <div className="BlogSectionMain">
          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 30/1 </h1>
              <p className="PText">
                Jeg er kommet i gang med arkitektladens hjemmeside nu, og jeg
                har lavet headeren, så den fungerer som tænkt samt lavet den
                responsiv. Det lyder ikke af meget men den voldte mange
                problemer. Jeg havde fået et basis template af Jacob jeg kunne
                bruge men jeg skulle selv læse og forstå den custom kode han har
                skrevet så jeg kunne anvende den til mit projekt. Jeg synes jeg
                er nået langt i forløbet, og jeg er snart halvvejs gennem
                praktikforløbet.<br></br>
                <br></br> Arbejds fremgangen her er meget metodisk. Der er nogle
                helt bestemte måder, de arbejder på. Dette spiller også ind i
                mit læringsmål om at være på et større team, da det standard kan
                hjælpe de andre udviklere med at forstå opbygningen af din
                løsning. Dette er anderledes end skolen hvor man typisk koder
                den første løsning der falder en ind. Det er på en måde lidt
                ligesom at have et benspænd på.<br></br>
                <br></br> Jeg har vedhæftet headeren på arkitektladen nedenfor:
              </p>

              <img
                className="imagecontainer1"
                src={withBase("Images/3001.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 28/1 & 29/1 </h1>
              <p className="PText">
                Jeg har kæmpet videre med webflow i dag. Jeg har lavet nogle af
                de sidste justeringer på testsiden, ved at gøre den responsiv i
                alle formater. Jeg føler jeg har forstået hvordan man bygger
                hjemmesider på i webflow på et basalt niveau nu. Med de sidste
                justeringer er jeg klar til at starte på Arkitektladens
                hjemmeside i webflow (jeg ved godt jeg har sagt det mange gange
                nu, men min mentor mener for real jeg er klar nu) <br></br>{" "}
                <br></br> Nu skal Jonas oprette variablene i dokumentet så jeg
                kan komme i gang med den. I dag (29/1) har været lidt sløv. Jeg
                har rettet de allersidste småting på øvelses hjemmesiden duotec,
                så den er lavet på den PRÆCISE måde, Jysk webbureau ville have
                lavet den. Jeg sidder lige pt. og skriver ansøgning til
                hovedopgave hos steno, jeg venter dog med at sende den afsted
                til jeg har snakket med min vejleder.<br></br> <br></br> Jeg har
                nu arbejdet med arkitektladen og startet op på sitet, jeg er
                ikke nået ret langt (har ikke engang fået det første element til
                at virke endnu) fordi jeg skulle hjælpe med noget tweaking af en
                animation jeg havde hjulpet udviklerholdet. I Morgen hjælper
                Jacob mig med at sætte CMS op til den slider der skal være
                øverst på forsiden. <br></br> <br></br> (28/1) Jeg brugte også
                en del krudt på at tænke over hovedopgaven, da Steno har
                kontaktet mig med en case der virker meget interessant for mig.
                Jeg har kontaktet min vejleder og skal snakke imorgen om
                hovedopgaven. Min mentor siger jeg snart er klar til at starte
                på Arkitektladen.
              </p>

              <img
                className="imagecontainer1"
                src={withBase("Images/2901.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 27/1 </h1>
              <p className="PText">
                Det har været en hård dag i dag. Jeg er startet op med en lidt
                mere virkelig case (stadig øvelse før jeg går til arkitektladen)
                Føler virkelig jeg har fået meget ud af dagen med en masse hjælp
                fra Web-Udviklings holdet. Tænker ikke der går mere end et par
                dage før jeg rigtigt kan starte op på Arkitektladens hjemmeside
                i webflow.<br></br> <br></br>
                Refleksioner: <br></br> Det har været en stor udfordring at
                starte op på webflow. Der er en meget specifik måde som siderne
                skal bygges op på (udover client first). Dette er meget
                anderledes end min normale måde at tænke på når jeg koder. Jeg
                plejer for eksempel at bygge mine sektioner op af forskellige
                div’er så jeg kan give margins (synes det er lettest). Her
                bruger men i stedet div’er mellem hvert enkelt element og giver
                dem en højde (så bagvendt ift. hvad jeg plejer). <br></br>{" "}
                <br></br> Det gør det ekstremt svært for mig at tænke mig
                hurtigt til løsninger, da det ikke rent kode mæssigt er som det
                plejer at være. Overall synes jeg dagen har været produktiv og
                jeg er kommet lagt på så kort tid.
              </p>
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 23/1 & 26/1 </h1>
              <p className="PText">
                Jeg har siddet og set introduktionen af materialet til webflow
                samt forfinet animationen til Kripthonite. Webflow er det CMS
                system Jysk Webbureau bruger og det virker faktisk bedre end
                Wordpress (det system min arbejdsgiver pt. bruger). Det er
                selvfølgelig et nyt system jeg skal lære, men det gør faktisk
                ikke noget, da det kode vi har lært i skolen stadig er
                fundamentet for hvordan systemet fungerer. <br></br> <br></br>{" "}
                Jeg har også spurgt om jeg gerne må observere salg holdet lidt
                senere i forløbet så jeg kan lære noget af det. Jeg beskriver
                hvorfor under noterne til mit andet læringsmål (de uploades
                først til sidst i praktikforløbet) Derudover vil jeg også gerne
                være en smule med på SEO holdet for at lære hvordan man
                optimerer siderne til at rangere højt på søgemaskinerne.{" "}
                <br></br> <br></br> I løbet af den 26. har jeg fortsat min
                oplæring af Webflow og er gået videre med faktisk at bygge min
                første test side. Dette er for at lære det mest basale, så jeg
                kaster mig selv ud i dybt vand med arkitektladen fra start. Her
                har jeg set følgende tutorials fra henholdsvis webflow og
                youtube: <br></br> <br></br>
                <a href="https://university.webflow.com/courses/getting-started-with-webflow">
                  Getting Started With WebFlow
                </a>
                <br></br> <br></br>
                <a href="https://university.webflow.com/courses/lay-out-style-your-site">
                  Lay Out Style Your Site
                </a>
                <br></br> <br></br>
                <a href="https://university.webflow.com/courses/full-site-build">
                  Full Site Build WebFlow
                </a>
                <br></br> <br></br>
                Dette sætter mig godt op til at gå igang med Arkitektladens
                website imorgen. Heldigvis er siden ikke super kompleks, så det
                er en god en at starte med, så jeg kan få en fornemmelse af
                hvordan jeg laver en komplet (statisk men scalable side) i
                webflow.<br></br> <br></br> Desuden har jeg arbejdet med noget
                der hedder client first. Dette er et framework der minder om
                tailwind css. Her arbejder man med standard class navne så andre
                developers der arbejder sammen med dig let kan afkode præcis
                hvad hvert objekt gør samt hvad deres class er.<br></br>{" "}
                <br></br>
                <a href="https://www.youtube.com/watch?v=Qt2yAW6zN_U">
                  Client-First Intro
                </a>
                <br></br> <br></br>
                <a href="https://www.youtube.com/watch?v=IVy1N9ncCEE">
                  Getting Started With Client-First
                </a>
              </p>

              <img
                className="imagecontainer1"
                src={withBase("Images/2601.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 21/1 & 22/1 </h1>
              <p className="PText">
                Jeg var med ude til video shoot i Aalborg Universitetshospital.
                Her havde en af Jysk webbureaus kunder lavet automatiske
                levering robotter som selv kunne navigere rundt, og se hvad der
                foregår ved hjælp af magneter under gulvet samt sensorer hvis
                der skulle gå nogen forbi så de kan stoppe for folk og andre
                ting. <br></br> <br></br> Målet var at fremvise automationen og
                løsningens effektivitet på video og billedmateriale. Under
                forløbet af dagen var jeg med som tilskuer, altså tog jeg ikke
                nogen videoer eller billeder til produktionen. <br></br>{" "}
                <br></br> Af det som jeg kunne observere var der ikke et så
                stort mellemrum mellem mine og deres filmtekniske kompetencer.
                Ofte ville jeg se vinkler på videoen hvor jeg tænkte “det er
                præcis der jeg ville have stillet mig”. Det mest imponerende var
                for mig hvordan filmholdet holdt overblik over præcis hvilke
                shots de skulle bruge og de var gode i deres kommunikation med
                kunden (som skulle hjælpe os med at stille robotterne rigtigt
                op). Mit takeaway her er at der selvfølgelig stadig er et
                mellemrum i skill, men det ikke er nær så stort som på nogle af
                de andre felter jeg har været inde for i løbet af min
                praktikperiode.<br></br> <br></br> Jeg blev heller ikke briefet
                på hvad præcis opgaven var inden vi tog afsted, så derfor havde
                jeg ikke noget overblik over hvordan dagen ville komme til at
                forløbe sig eller hvad kunden præcis skulle bruge. Dette fandt
                jeg ud af i løbet af shootet. <br></br> <br></br> Derudover
                havde de selvfølgelig også bedre gear end det jeg bruger til
                event hos min nuværende arbejdsgiver. Herunder DJI Ronin, et
                SONY A7s (vs vores SONY A3) Sådan nogle ting kan gøre en kæmpe
                forskel, især under dynamisk video optagelse.<br></br> <br></br>{" "}
                Vi har også modtaget feedback fra Arkitektladen, der var ikke
                ret meget ud over det som blev nævnt under mødet. Faktisk var
                der kun 3 kommentarer til hele siden, som nu er rettet til, og
                vi er klar til mødet på fredag, hvor vi bliver enige om det
                endelige design så jeg kan komme i gang med at udvikle siden for
                dem. Se billedet nedenunder for de 3 hovedsider vi har designet
                til på fredag:<br></br> <br></br> Derudover kan man se en
                animation jeg har lavet til kryptonite inde på den her side, det
                er scroll animationen jeg har lavet i AE:{" "}
                <a href="https://kripthonite-therapeutics.webflow.io/">
                  Kripthonite
                </a>
              </p>

              <img
                className="imagecontainer1"
                src={withBase("Images/2201.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 20/1 </h1>
              <p className="PText">
                Jeg har nu været i kontakt med Arkitektladen, og overall var
                feedbacken faktisk ret god især taget i betragtning af at min
                chef sagde “det er en besværlig kunde”. Der var selvfølgelig
                nogle ting, som skulle ændres. De vender tilbage onsdag med
                skriftlig kritik så vi kan have et endeligt design til fredag
                (23/1) hvor vi bliver enige om et design så jeg kan begynde at
                udvikle siden. <br></br> <br></br>
                Refleksion: Selvom Jonas har været inde og rette til, var 80-90%
                af designet noget jeg havde stået for, så det at der var positiv
                feedback giver mig selvtillid til mine kommende opgaver og viser
                mig samtidig hvor langt i processen jeg er nået. Selvom jeg
                knoklede lidt hårdt for at nå det til endelige design, har det
                hjulpet en hel masse med både firma og forståelsen med at
                arbejde for en kunde.<br></br> <br></br>Ellers har jeg brugt
                dagen på at lave en lille animation til en hjemmeside der er
                under udvikling.
              </p>
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 14/1 - 19/1 </h1>
              <p className="PText">
                {" "}
                Mig og min mentor Jonas blev enige om at jeg overlader de sidste
                design tweaks til ham da det er hans job at sørge for kunden er
                100% tilfreds med designet (såvel som ham selv) da jeg ikke kan
                matche han vision 100% har vi aftalt at jeg for vore begges
                skyld (det er muligt at nå til et punkt hvor vi begge synes om
                det, men der kræver en masse tid og arbejde for os begge at hans
                skal give feedback og derefter skal jeg tweake, dette skal gøres
                MANGE gange hen mod slutningen). De designs jeg endte med at
                lave finde inde under denne{" "}
                <a href="https://www.figma.com/board/Pu0CxK2Sjrvulz7h8fIStZ/Untitled?node-id=0-1&t=gGQhRPchoePVWtEH-1">
                  FigJam
                </a>
                : <br></br> <br></br>
                Jeg har her over de sidste par dage øvet mig på After Effects,
                dette inkluderer studie af Null objekter såvel som shape
                morphing og 3D assets i AE. I dag (fredag) er jeg blevet sat til
                nogle små forskellige animationer i AE. De inkluderer, en
                counter animation, og en lille intro video til BMS (som jeg ikke
                endnu er færdig med) <br></br>
                <br></br> Jysk Webbureau har ikke nogle grafiske designere som
                sådan, det vil sige at mine skills i Illustrator og AE kunne
                komme til at være nyttige så de ikke behøver at hyre freelancere
                som de har gjort op til nu. <br></br>
                <br></br> På mandag har jeg møde sammen med Jonas og
                arkitektladen, så jeg ved ikke lige hvornår min nuværende
                animation er færdig. <br></br>
                <br></br> Refleksion: Jeg synes ugen er gået fint, jeg er glad
                for jeg har fået nogle forskellige opgaver. Jeg har haft en del
                frihed til at øve/producere hvad jeg tænker kunne forbedre mine
                skills. De mennesker som arbejder her er dygtige, det gør det
                svært at producere noget som faktisk er op til standarden og som
                er brugbart for mine kollegaer. Forhåbentligt bliver jeg i stand
                til at bidrage bedre senere i forløbet. Generelt synes jeg ugen
                har været produktiv og jeg er glad for de skills jeg har lært
                indtil videre. Jeg stræber mig efter at være så produktiv så
                muligt samt lære det der skal til for at bidrage væsentligt til
                produktionen og processen i flere cases.
                <br></br>
                <br></br>
                (Brugt som læring til AE videoer:<br></br>
                <a href="https://youtu.be/aWxlWgBEcnI?si=-idh8ug6uWX1WwBu">
                  Logo Animations Ep.2
                </a>
                <br></br>
                <a
                  href="https://www.youtube.com/watch?v=XJIr419bY9E&list=PL6MHR9pCfkWMER6HpcW_Gm-45CC_AinXs&index=13&t=91s
                )<br></br>"
                >
                  Shape Morphing Tutorial
                </a>
                <br></br>
                <br></br>
                Øvelses arbejde i AE (lavet med tutorials som ses ovenfor, Ideen
                var ikke at designe noget konkret her, men i stedet at de assets
                der skulle bruges var tilgængelige så jeg kunne fokusere på
                selve animation og koncepterne bag):<br></br>
                <br></br>
                <a href="https://youtu.be/oCyo0LphwmA">Øvelse produktion 1</a>
                <br></br>
                <a href="https://youtu.be/hQPA4sghNiM">
                  Øvelse produktion 2
                </a>{" "}
                <br></br>
                <a href="https://youtube.com/shorts/px0PoFIx2WA">
                  Øvelse produktion 3
                </a>
                <br></br>
                <br></br>
                Kundecase Animationer: <br></br>
                <a href="https://youtu.be/fqGKosK0AmY">
                  BMS intro video animation
                </a>
                <br></br>
                <a href="https://youtu.be/sKyLYwxb_Wo">
                  BMS intro video Square Version
                </a>
                <br></br>
              </p>

              <img
                className="imagecontainer1"
                src={withBase("Images/2001.jpg")}
                alt=""
              />
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 13/1 </h1>
              <p className="PText">
                Jeg er nået i mål med mine undersider nu (eller så langt at
                Jonas nu skal have tid til at sidde og rette småting til så det
                er klar til et møde på næste mandag med Arkitektladen (kunden)).
                Jeg synes designet er blevet nydeligt. Jeg har dog haft meget
                svært ved at designe kontakt siden da der ikke er ret mange ting
                på siden og jeg derfor er limited af hvordan jeg kan opstille
                dem. <br></br> <br></br> Jeg er nu blevet sat på nogle lidt mere
                grafiske opgaver (som passer mig lidt bedre) dem starter jeg på
                i morgen. Jeg kommer yderligere til at reflektere over min
                designprocess når jeg har været i kontakt med arkitektladen på
                næste mandag (19/1-2026)
              </p>
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 9/1 - 12/1 </h1>
              <p className="PText">
                Nu har jeg siddet med webdesign af arkitektladen i 6 dage (ca.
                45 timer samlet) og jeg kan godt mærke at jeg er ved at løbe tør
                for motivation ift. at arbejde videre med det. Konkret har jeg
                siddet med de samme fire undersider i 6 hele arbejdsdage.{" "}
                <br></br>
                <br></br> I stedet for en enkelt feedback runde har der været
                noget sparring på 30-60 minutter hvor der var brug for det. Jeg
                vil sige at feedbacken er blevet mindre konkret siden mit første
                forsøg. Nogle ting gør jeg fordi jeg får at vide at jeg skal
                gøre dem, og derefter bliver der rettet på dem igen selvom det
                var det som jeg blev bedt om at gøre. <br></br>
                <br></br> Jeg er indforstået med at designprocessen er meget
                subjektiv og man kan ændre holdning flere gange i løbet af den.
                Jeg tror også mest at jeg er træt af at sidde med den samme
                opgave i så lang tid, jeg har stirret mig blind i den
                efterhånden. <br></br>
                <br></br> Jeg føler også jeg er nået til det punkt i
                designprocessen hvor det ikke er tekniske fejl, men rettere
                subjektive holdninger om hvordan designet skal være, der er de
                primære rettelser jeg får på mit arbejde. Mit takeaway her er at
                jeg teknisk i denne designprocess, er nået til et punkt hvor jeg
                nogenlunde kan følge med. Jeg har blevet meget bedre til Figma
                og kan mange flere shortcuts. Men det det meget svært ved at
                arbejde så længe på noget hvor langt de fleste rettelser er
                småting eller noget som er relativt subjektivt <br></br>
                <br></br>. Når jeg stiller det op imod det arbejde jeg har lavet
                i skolen, er det selvfølgelig bedre, men der (time-invested /
                quality) er langt lavere. Det vi laver i skolen er også meget
                mere bredt, vi skal være med i alle processerne (UX, Design og
                Programmering). <br></br>
                <br></br> Når design opgaven er så ensartet (dvs, ingen graphic
                design, animation, skitsering, moodboards, farvevalg osv…) så
                bliver det meget hårdt for hovedet at arbejde. Det har om ikke
                andet åbnet mine øjne inden for hvor lang tid man kan regne med
                at bruge på bare at designe en web page.
              </p>
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 7/1 & 8/1 </h1>
              <p className="PText">
                Jeg fik feedback på mit designarbejde i figma, Min første dage
                var mest at prøve sig frem. Under feedbacken fik jeg nogle meget
                konkrete ting jeg skulle holde høje med og rette. <br></br>
                <br></br>Udgangspunktet var ikke dårligt men der var mange
                småfejl som: Hierarki af fonte og billeder: H1 og H2 elementer
                skal kun bruges øverst, alt brødtekst skal stå med P 18 eller 16
                ikke nogle af de mindre headings. Scalability: hvordan kommer
                tingene til at se ud hvis der skal tilføjes til siden? og
                hvordan ser det responsivt ud. Det er overvejelser man hele
                tiden skal have, især under kundecases.
                <br></br>
                <br></br>
                Dette er fundamentalt anderledes end skolearbejdet, da der
                typisk kun er 1 revision af siden og den ikke opdateres efter
                aflevering. Developer Friendly: Her skal jeg være god til at
                genbruge de samme størrelser og komponenter hvor muligt så der
                ikke er en uanet mængde af arbejde for developer teamet (hvor
                Anker er på :) ). Derudover har jeg lært en masse shortcuts i
                figma og er blevet en smule rutineret i hvordan man bruger
                komponenter og varianter såvel som autolayout. <br></br>
                <br></br>
                Overall har de sidste to dage været produktive. Der er nogle
                andre design tanker man skal have i hovedet når man arbejder med
                en kundecase, som giver nogle benspænd ift. processen vi har
                kørt i skolen. Det kan både være fedt men også frustrerende når
                jeg synes jeg har lavet noget godt men det ikke passer til
                virksomheden eller der mangler scalability. Jeg bliver typisk
                mod slutningen af dagen ret træt.
              </p>
            </div>
          </div>

          <div className="things reveal4 stagger">
            <div className="Daily">
              <h1> 5/1 & 6/1 </h1>
              <p className="PText">
                Designarbejde - hvad skal jeg huske og hvordan er vores flow?
                Opsætning af kontorplads for bedst mulig læring og arbejde
                (hentning af egen skærm og peripherals) Lidt om bureauet og
                hvordan vi kommer til at arbejde med teamet. <br></br>
                <br></br> Lille præsentation af CEO og vores mentorer. Mig og
                Jonas gennemgik mine opgaver og startede mig op på en relevant
                case i Figma (arkitektladens website og design heraf). Her var
                der relevant info om hvordan virksomheden arbejder i figma og
                hvordan vi overgiver de forskellige designs når vi er færdige.
                <br></br>
                <br></br>
                Derefter fik jeg designet 2 sider i figma som ser sådan ud: (se
                figjam for billeder og process) <br></br> <br></br>
                <a href="https://www.figma.com/board/Pu0CxK2Sjrvulz7h8fIStZ/Untitled?node-id=0-1&p=f&t=kOyPotv5zMbOj07W-0">
                  Figma
                </a>
                <br></br>
                <br></br>
                Informationen er opstillet på en platform det hedder octopus,
                dette fungerer både som et IA og Sitemap: Jeg har både lånt
                nogle designs fra nogle af de tidligere sider og lavet nogle
                selv, det kom an på hvad der lige passede. Jeg har ikke været i
                kontakt med nogle kunder endnu eller fået feedback, men det skal
                nok komme. Generelt er jeg glad for de to første dage, jeg synes
                jeg er nået langt allerede med mit design arbejde. <br></br>
                <br></br> Refleksioner: Det er hårdt at være på så længe af
                gangen, 8 timers arbejde (dog med pause) er længere end jeg
                plejer at sidde (typisk ved projekter) plejer jeg at opdele mit
                arbejde efter 4 timer hvorefter jeg tager ned og træner og
                derefter fortsætter mit arbejde i 2-3 timer mere. Det er god
                læring for mig, og min mentor Jonas er altid klar til at jeg kan
                spørge ham til råds under mit og hans arbejde. Jeg er også glad
                for at jeg er kommet på en virksomhedscase lige fra start.
              </p>
              <img
                className="imagecontainer1"
                src={withBase("Images/1901.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
