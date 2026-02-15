import { useState } from "react";
import "./ContactUs.css";
import locationImg from "../../assets/img/Contact_Us/Map.webp";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export default function ContactUs() {

  const siteKey = "6Lee52gsAAAAAD07U43FOmGfQvtauhkApo2J4dbu";
  const secretKey = "6Lee52gsAAAAAOi3YyUkCROmsB9jDyoGawlB1G06"
  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    notRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const recaptchaValue = recaptchaRef.current.getValue();

  if (!recaptchaValue) {
    alert("يرجى تأكيد أنك لست روبوت");
    return;
  }

  console.log("Form Data:", formData);

  alert("تم إرسال الرسالة بنجاح ✅");

  recaptchaRef.current.reset();
};


  return (
    <>
      <div className="contactus-page">
        <div className="contactUs-header fw-bold text-center text-white">
          <h2>تواصل معنا</h2>
          <span>الرئيسية/تواصل معنا</span>
        </div>

        <div className="contctus-body">
          {/* عنوان الشركة */}
          <div className="location container my-5">
            <h2>عنوان الشركة</h2>
            <br />
            <p className="mb-4">
              <i className="fa-solid fa-location-dot fs-2 ps-3"></i>
              <span>تنظيم كفرسوسة، خلف دماسكينو مول</span>
            </p>
            <p>
              <i className="fa-solid fa-location-dot fs-2 ps-3"></i>
              <span>معضمية الشام، خلف صيدلية أبو راشد</span>
            </p>
            <img src={locationImg} alt="Map" className="locationimag" />
          </div>

          <div className="container w-50 border-bottom border-3 border-black my-2"></div>

          {/* أرقام الهاتف */}
          <div className="contact-number container my-5">
            <h2>أرقام الهواتف</h2>
            <br />
            <p className="mb-4">
              <i className="fa-solid fa-phone-flip fs-2 ps-5"></i>
              <span>0943767600 - (للاستفسار والشكاوي)</span>
            </p>
            <p>
              <i className="fa-solid fa-phone-flip fs-2 ps-5"></i>
              <span>0943767600 - (للاستفسار والشكاوي)</span>
            </p>
          </div>

          <div className="container w-50 border-bottom border-3 border-black mb-5"></div>

          {/* الفورم */}
          <div className="input-body my-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <div className="name-fields">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="recaptcha-box">
                <ReCAPTCHA
                  sitekey={siteKey}
                  ref={recaptchaRef}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
