import "./AboutUs.css";
import { aboutData } from "../../data/newsData";

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      <div className="about-us-title position-absolute ">
        <span className="text-center fw-bold fs-3">من نحن</span>
        <br />
        الرئيسية/من نحن
      </div>
      <div className="container history-section my-5">
        <h2 className=" fw-bold fs-3">
          تاريخ <span className="الشركة">الشركة</span>
        </h2>
        <p>
          عمل شركة Line In على تقديم حلول ذكية وعملية لمعالجة مشكلة نقص مواقف
          السيارات والازدحام المروري. نركّز على تطوير أنظمة وخدمات تساهم في
          تحسين الحركة وتنظيم استخدام الأماكن العامة، بما ينعكس إيجابًا على
          المجتمع والأعمال
        </p>
      </div>
      <div className="cards my-5">
        {aboutData.map((item) => (
          <div className="card mb-3 w-50" key={item.id}>
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
