import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Clients.css";
import { getClientsByCountry, getCountriesList } from "../../data/clientsData";

export default function LebanonClients() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("Lebanon");
  const [clientsInfo, setClientsInfo] = useState(null);

  // الحصول على الدولة من URL parameters
  useEffect(() => {
    const countryFromUrl = searchParams.get("country");
    if (countryFromUrl) {
      setSelectedCountry(countryFromUrl);
    } else {
      setSelectedCountry("Lebanon");
    }
  }, [searchParams]);

  // تحديث بيانات العملاء عند تغيير الدولة
  useEffect(() => {
    const data = getClientsByCountry(selectedCountry);
    setClientsInfo(data);
  }, [selectedCountry]);

  const handleClientClick = (clientId) => {
    navigate(`/client/${clientId}`);
  };

  return (
    <div className="clients-container">
      {clientsInfo ? (
        <>
          <h1 className="clients-title">عملاء {clientsInfo.country}</h1>
          <div className="clients-grid">
            {clientsInfo.clients.map((client) => (
              <div
                key={client.id}
                className="client-card"
                onClick={() => handleClientClick(client.id)}
              >
                <div className="client-image">
                  <img src={client.image} alt={client.name} />
                </div>
                <div className="client-content">
                  <h3>{client.name}</h3>
                  <p>{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>لا توجد عملاء لهذه الدولة</p>
      )}
    </div>
  );
}
