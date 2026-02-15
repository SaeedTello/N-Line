import { useParams, Link } from "react-router-dom";
import "./News.css";
import { newsData } from "../../data/newsData";

export default function NewsDetail() {
  const { id } = useParams();

  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">News article not found</div>
        <Link to="/news" className="btn btn-primary">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="text-center news-detail-header">
        <h1>{news.title}</h1>
        <span>الرئيسية / الأخبار / {news.title}</span>
      </div>
      <div className="container my-5">
        <div className="news-detail-container">
          <img
            src={news.image}
            alt={news.title}
            className="news-detail-image"
          />
          <div className="news-detail-content">
            <p className="news-detail-date">{news.date}</p>
            <h1 className="news-detail-title">{news.title}</h1>
            <p className="news-detail-text">{news.fullContent}</p>
            <Link to="/news" className="news-read-more-btn back-btn">
              Back to News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
