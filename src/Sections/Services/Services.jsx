import "./Services.css";

const servicesData = [
  { id: 1, title: "خدمات صفّ السيارات" },
  { id: 2, title: "إدارة الفعاليات والمناسبات" },
  { id: 3, title: "عربات الغولف" },
  { id: 4, title: "إدارة وتشغيل المواقف" },
  { id: 5, title: "الاستشارات والتقييمات الفنية" },
  { id: 6, title: "تصميم وتحليل مواقع المواقف" },
  { id: 7, title: "الترويج والتسويق الميداني" },
  { id: 8, title: "نظام صفّ سيارات ذكي" },
];

export default function Services() {
  return (
    <>
      <div className="services ">
        <div className=" container services py-5">
          <div className="title text-center">
            <h2>
              Our <span>Services</span>
            </h2>
            <p cx-2 py-1 e="fw">
              We are dedicated to providing a seamless and professional parking
              experience
              <br /> for our clients and their guests.
            </p>
            <span className="borderr m-auto mb-3"></span>
          </div>
          <div className="row gap-2">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="card w-auto services-card py-5 px-3 text-center"
              >
                <i class="fa-solid fa-p py-1 P"></i>
                <span className=" fw-bold">{service.title}</span>
                <i class="fa-solid fa-angles-right arrow py-1"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
