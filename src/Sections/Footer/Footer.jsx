import './Footer.css'
import LogoFooter from "../../assets/img/Logo/black.webp";


export default function Footer() {
  return (
    <footer>
      <div className="footer-container py-2 ">
        <div className="footer-content container">
        <span>LINE IN Parking Control © 2023. All Rights Reserved.</span>
        <div>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
          <img src={LogoFooter} alt="Logo" className="footer-logo" />
         </div>
      </div>
    </footer>
  )
}
