import "./Events.css";
import image1 from "../../assets/img/Events/1.webp";
import image2 from "../../assets/img/Events/2.webp";
import image3 from "../../assets/img/Events/3.webp";
import image4 from "../../assets/img/Events/4.webp";

const eventsData = [
  {
    id: 1,
    image: image1,
    title: "Valentine Forum De Beyrouth",
    location: "Beirut, Lebanon",
  },
  {
    id: 2,
    image: image2,
    title: "E-Motor Show Forum De Beyrouth",
    location: "Beirut, Lebanon",
  },
  {
    id: 3,
    image: image3,
    title: "Sports Festival Forum De Beyrouth",
    location: "Beirut, Lebanon",
  },
  {
    id: 4,
    image: image4,
    title: "Rebirth Beirut",
    location: "Beirut, Lebanon",
  },
];

export default function Events() {
  return (
    <>
      <div className="events-body">
        <div className="events-header">
          <h2 className=" fw-bold">Events</h2>
          <span>Home/ Events</span>
        </div>
        <ul className="cards text-center container w-75 my-5">
          {eventsData.map((event) => (
            <li className="card p-0" key={event.id}>
              <img className="card-imag" src={event.image} alt={event.title} />
              <div className="card-body">
                <h5>{event.title}</h5>
                <span>{event.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
