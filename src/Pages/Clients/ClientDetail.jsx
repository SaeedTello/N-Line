import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getClientById } from "../../data/clientsData";
import "./ClientDetail.css";

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const clientData = getClientById(id);
    if (clientData) {
      setClient(clientData);
      setSelectedImage(clientData.image);
    } else {
      navigate("/clients");
    }
  }, [id, navigate]);

  if (!client) {
    return <div className="client-detail-loading">جاري التحميل...</div>;
  }

  return (
    <div className="client-detail-container">
      {/* خيار العودة */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <span>←</span> العودة
      </button>

      <div className="client-detail-content">
        {/* قسم الصور */}
        <div className="client-images-section">
          <div className="main-image-wrapper">
            <img src={selectedImage} alt={client.name} className="main-image" />
          </div>

          {/* الصور الإضافية */}
          {client.images && client.images.length > 1 && (
            <div className="thumbnail-images">
              {client.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${client.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* قسم البيانات */}
        <div className="client-info-section">
          {/* الاسم */}
          <h1 className="client-name">{client.name}</h1>
          <p className="client-slogan">{client.description}</p>

          {/* معلومات الاتصال */}
          <div className="info-group">
            <h3>معلومات الاتصال</h3>
            <div className="info-item">
              <span className="label">📍 الموقع:</span>
              <span className="value">{client.location}</span>
            </div>
            <div className="info-item">
              <span className="label">📞 الهاتف:</span>
              <span className="value">{client.phone}</span>
            </div>
            <div className="info-item">
              <span className="label">📧 البريد الإلكتروني:</span>
              <span className="value">{client.email}</span>
            </div>
          </div>

          {/* الخدمات */}
          <div className="info-group">
            <h3>الخدمات المقدمة</h3>
            <ul className="services-list">
              {client.services &&
                client.services.map((service, index) => (
                  <li key={index}>
                    <span className="service-icon">✓</span>
                    {service}
                  </li>
                ))}
            </ul>
          </div>

          {/* التفاصيل */}
          <div className="info-group">
            <h3>نبذة عن الشركة</h3>
            <p className="details-text">{client.details}</p>
          </div>

          {/* أزرار الإجراء */}
          <div className="action-buttons">
            <button className="btn btn-primary">
              اتصل بنا الآن
            </button>
            <button className="btn btn-secondary">
              أرسل رسالة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
