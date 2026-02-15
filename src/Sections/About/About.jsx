import "./About.css";
import imag from "../../assets/img/Home/AboutUS/About_Us.webp";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className=" container py-5">
        <div className=" d-flex row">
          <div className=" col-lg-6 col-md-6 col-sm-6">
            <h1 className="titleAbout">
              <span className="About">About</span> LINE IN
            </h1>
            <p className="p-1">
              We provide solutions that would alleviate unnecessary community
              stress arising due to the lack of parking, traffic and congested
              streets.
            </p>
            <p className="p-2">
              Our Mission is to be the market leader in the provision of
              World-Class comprehensive and fully integrated parking management
              solutions and services.
            </p>
            <Link
              to="/about"
              className="btn-About border-0 rounded-1 px-2 py-1 text-white"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              MORE INFO
            </Link>
          </div>
          <div className="About-img col-lg-6 col-md-6 col-sm-6">
            <img src={imag} className="rounded-2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
