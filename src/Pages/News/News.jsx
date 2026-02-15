import "./News.css";
import { Link } from "react-router-dom";
import { newsData } from "../../data/newsData";

export default function News() {
  return (
    <div className="news-page my-4">
      <div className="text-center news-title">
        <h1>الأخبار</h1>
        <span>الرئيسية / الأخبار</span>
      </div>
      <div className="">
        <div className="news-cards">
          {newsData.map((n) => (
            <div className="card border-card mb-3" key={n.id}>
              <img src={n.image} className="card-img-top" alt={n.title} />
              <div className="card-body">
                <p>
                  <small className="text-muted">{n.date}</small>
                </p>
                <h5 className="card-title">{n.title}</h5>
                <p className="card-text">{n.text}</p>
                <Link to={`/news/${n.id}`} className="news-read-more-btn">
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
