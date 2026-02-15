import "./Home.css";
import {
  About,
  CEO,
  ContactUs,
  Details,
  Footer,
  Header,
  LatestNews,
  Portfolio,
  Services,
} from "../../Sections/Index";

export default function Home() {
  return (
    <>
      <div className="home-page">
        <Details />
        <About />
        <Services />
        <Portfolio />
        <CEO />
        <LatestNews />
        <ContactUs />
      </div>
    </>
  );
}
