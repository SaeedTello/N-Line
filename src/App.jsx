import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  Home,
  AboutUs,
  Clients,
  ClientDetail,
  ContactUs,
  Services,
  Events,
  News,
  NewsDetail,
} from "./Pages/Index";
import { Header, NavBar, Footer } from "./Sections/Index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client/:id" element={<ClientDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
