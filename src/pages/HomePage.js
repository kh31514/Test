import Header from '../components/Header';
import ImgBanner from '../components/ImgBanner';
import Schedule from "../components/Schedule";
import TextSection from '../components/TextSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

import dragonBoatsImg from "../assets/dragonBoats.jpg";
import logo from "../assets/logo.png";
import dragonHeadsImg from "../assets/dragonHeads.png";

let whoWeAreText = "Dragon Boat at Cornell is a competitive dragon boat team based in Ithaca, NY. Founded a couple years ago, we aim to provide Cornell University students a culturally-enriching exercise routine and foster community with local residents. We collaborate with the Ithaca Dragon Boat Club to offer practices 3 times per week launching from Cass Park. See practice schedule above for exact dates/times."
let dragonBoatingText = "Dragon boating is a traditional Chinese sport where a team of (roughly 20) paddlers work together to propel a boat similar to a long canoe.";
let president = "Katie Huntley";
let presEmail = "kah294@cornell.edu";

function App() {
  return (
    <div className="App">
      <header>
        <Header
          title="Cornell Dragon Boat Club"
        />
        <ImgBanner
          source={dragonBoatsImg}
        />
      </header>
      <main>
        <Schedule />
        <TextSection
          title="Who We Are"
          body={whoWeAreText}
          bkgrnd="gray"
          imgPos="right"
          imgSrc={logo}
          imgSize="portrait"
        />
        <TextSection
          title="What is Dragon Boating?"
          body={dragonBoatingText}
          bkgrnd="white"
          imgPos="left"
          imgSrc={dragonHeadsImg}
          imgSize="square"
        />
        <FAQ
          president={president}
          presEmail={presEmail}
        />
        <Contact
          president={president}
          presEmail={presEmail}
        />
      </main>
    </div>
  );
}

export default App;