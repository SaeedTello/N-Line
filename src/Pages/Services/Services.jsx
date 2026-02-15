import "./Services.css";
import angel from "../../assets/img/Services/angel.svg"
import image1 from "../../assets/img/Services/2.webp";
import image2 from "../../assets/img/Services/3.webp";
import image3 from "../../assets/img/Services/4.webp";
import image4 from "../../assets/img/Services/5.webp";

const servicesData = [
  { id: 1, image: image1, title: "خدمات صفّ السيارات",subject:"تمتلك Line in خبرة طويلة تزيد عن عشرين عامًا في تقديم خدمات صفّ السيارات الخاصة، ما جعلها مرجعًا موثوقًا في هذا المجال داخل سورية" },
  { id: 2, image: image2, title: "إدارة الفعاليات والمناسبات" },
  { id: 3, image: image3, title: "عربات الغولف" },
  { id: 4, image: image4, title: "إدارة وتشغيل المواقف" },
];

export default function Sevices() {
  return (
    <>
      <div className="services-body">
        <div className="services-header text-white">
          <h2>الخدمات</h2>
          <span>الرئيسية/الخدمات</span>
        </div>
        <div className="cards-services my-5">
          <ul className="cards ">
            {servicesData.map((service, index) => (
              <>
              <li
                className="card services-card w-50  p-0 text-center"
                key={service.id}
                >
                <img src={service.image} alt={service.title} />
                <div className="srevices-card-budy">
                  <h5 className="fw-bold my-3">{service.title}</h5>
                  <p className="mx-2 fw">{service.subject}</p>
                  <img src={angel} className="angelSvg" alt="" />
                </div>
              </li>
              {index < servicesData.length - 1 && (
                <div className="portfolio-border w-50"></div>
              )}
            </>
            ))}
          </ul>
        </div>
        </div>
    </>
  );
}
