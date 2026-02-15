import "./NewsModal.css";
import { useState } from "react";

export default function NewsModal({ news, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  if (!news || isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <div
      className={`news-modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`news-modal-content ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="news-modal-close" onClick={handleClose}>
          ×
        </button>
        <img src={news.image} alt={news.title} className="news-modal-image" />
        <div className="news-modal-body">
          <p className="news-modal-date">{news.date}</p>
          <h2 className="news-modal-title">{news.title}</h2>
          <p className="news-modal-text">{news.fullContent}</p>
        </div>
      </div>
    </div>
  );
}
