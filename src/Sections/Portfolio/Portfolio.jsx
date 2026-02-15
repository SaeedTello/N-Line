import "./Portfolio.css";
import image1 from "../../assets/img/Home/Portfolio/Home3_1.webp";
import image2 from "../../assets/img/Home/Portfolio/Home3_2.webp";
import image3 from "../../assets/img/Home/Portfolio/Home3_3.webp";
import image4 from "../../assets/img/Home/Portfolio/Home3_4.webp";
import image5 from "../../assets/img/Home/Portfolio/Home3_5.webp";
import image6 from "../../assets/img/Home/Latest_News/1.webp";

export default function Portfolio() {
  // Portfolio images data - 6 images matching the design
  const portfolioItems = [
    {
      id: 1,
      image: image1,
      className: "span-col-2"
    },
    {
      id: 2,
      image: image4,
      className: "span-row-2"
    },
    {
      id: 3,
      image: image3,
      className: ""
    },
    {
      id: 4,
      image: image2,
      className: ""
    },
    {
      id: 5,
      image: image5,
      className: ""
    },{
      id: 6,
      image: image6,
      className: ""
    }
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        {/* Title Section */}
        <div className="portfolio-title">
          <h2>
            Our <span>Portfolio</span>
          </h2>
          <p>
            Our collection of records showcases our commitment to providing top-quality
            <br /> valet parking services to our clients.
          </p>
          <div className="portfolio-border"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.className}`}>
              <img src={item.image} alt={item.alt} />
              <div className="portfolio-overlay"></div>
              <div className="portfolio-text">
                <p>{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}