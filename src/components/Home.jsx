import Start from "./Start";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <>
      <Start />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
  );
}
