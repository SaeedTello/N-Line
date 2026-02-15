import "./LatestNews.css";
import { newsData } from "../../data/newsData";
import { useState } from "react";
import NewsModal from "./NewsModal";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <>
      <div className="container px-0 my-5 py-5 LN-container">
        <div className="LN-header text-center">
          <h1>
            Latest <span className="news"> News</span>
          </h1>
          <p>
            We bring you the latest developments in the valet parking industry,
            including new technologies,
            <br />
            regulatory updates, and trends in customer preferences.
          </p>
          <div className="portfolio-border"></div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <div className="card LN-card">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.text}</p>
                  <button
                    onClick={() => setSelectedNews(news)}
                    className="btn cards-btn"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
    </>
  );
}
