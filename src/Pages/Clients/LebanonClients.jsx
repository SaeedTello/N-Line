import "./LebanonClients.css";
import image1 from "../../assets/img/Lebanon_Clients/2.webp";
import image2 from "../../assets/img/Lebanon_Clients/3.webp";
import image3 from "../../assets/img/Lebanon_Clients/4.webp";
import image4 from "../../assets/img/Lebanon_Clients/5.webp";

const clientsData = [
  {
    id: 1,
    image: image1,
    name: "Shawrma Akkar",
  },
  {
    id: 2,
    image: image2,
    name: "Lebanon Coffee House",
  },
  {
    id: 3,
    image: image3,
    name: "Camella",
  },
  {
    id: 4,
    image: image4,
    name: "Sandwich & Half",
  },
];

export default function LebanonClients() {
  return (
    <>
      <div className="clients-container">
        <div className="clients-header">
          <h2 className=" fw-bold">عملاء لبنان</h2>
          <span>الرئيسية / العملاء / عملاء لبنان</span>
        </div>
        <div className="clients-body my-4 text-center fw-bold">
          <ul className="clients-cards cards text-center container w-75 my-5">
            {clientsData.map((client) => (
              <li className="card p-0" key={client.id}>
                <img className="card-imag" src={client.image} alt={client.name} />
                <div className="card-body">
                  <h5>{client.name}</h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
