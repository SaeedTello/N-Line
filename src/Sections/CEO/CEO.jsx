import "./CEO.css";
import ceoImag from "../../assets/img/Home/CEO/CEO.webp";
export default function CEO() {
  return (
    <>
      <div className="main-cont-CEO position-relative my-5">
        <div className="ceo-bg-Cimag"></div>
        <div className=" container ">
          <div className="row ceo-container">
            <div className="ceo-content p-0">
              <img src={ceoImag} className="ceoImag rounded-2 m-auto d-flex" alt="" />
              
              <p className="text-white text-center fw-bold mt-2">
                Chady Habr
                <br />
                <span className="fw-normal mt-2"> CEO </span>
              </p>
            </div>
            <div className="CEO-Descreption col-lg-6">
              <p className=" text-white">
                <i class="fa-solid fa-quote-left fa-2x text-white"></i>
                <br />
                Our business is not guess work. We have clear goals we are
                heading to, capabilities to assess and materialize opportunities
                and real value to deliver to all our stakeholders
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
