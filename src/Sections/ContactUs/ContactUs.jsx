import "./ContactUs.css";
import imageForUs from "../../assets/img/Home/Contact_Us/1.webp";
import { Link } from "react-router-dom";
export default function ContactUs() {
  return (
    <>
      <div className="contactUs-container mb-0 position-relative">
        <img src={imageForUs} alt="" />
        <div className=" container position-absolute text-center text-white">
          <h1 className=" fw-bold">Ready to Hire us in your New Project?</h1>
          <p className="">
            With effective systems in place, we offer quick turn-around time
            <br /> in parking and retrieval of vehicles.
          </p>
          <Link
            to="/contacts"
            className="contactUs-btn text-white fs-5 py-2 px-4 border-0 rounded-2"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
