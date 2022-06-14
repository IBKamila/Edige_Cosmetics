import React from 'react';
import "./Footer.css"
import logo from '../../imgs/logoFooter.svg'
import icons from '../../imgs/footer.png'
import whats from '../../imgs/whats.png'
import email from '../../imgs/email.png'

const Footer = () => {
  return (
    <footer>
      <img id="footerLogo" src={logo} alt="logo_footer" />
      <hr />
      <div className="footer-section">
        <div className="footerInfos">
          <h3 className='footerTitle'>Company</h3>
          <p className='footerText'>The brand strives to create respect for its products among the audience, so that the presence of the company's products is a sign of prestige.</p>
           <a href=""><img src={icons} alt="icons.png" /></a>
        </div>
        <div className="footerInfos">
          <h3 className='footerTitle'>Navigation</h3>
          <ul className='footerLists'>
            <li className='navLi'><a className='navli_a' href="#">Product catalog</a></li>
            <li className='navLi'><a className='navli_a' href="#">About company</a></li>
            <li className='navLi'><a className='navli_a' href="#">Bonus program</a></li>
            <li className='navLi'><a className='navli_a' href="#">Work process</a></li>
            <li className='navLi'><a className='navli_a' href="#">Partners</a></li>
            <li className='navLi'><a className='navli_a' href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footerInfos">
          <h3 className='footerTitle'>Products</h3>
          <ul className='footerLists'>
            <li className='navLi'><a className='navli_a' href="#">Care cosmetics</a></li>
            <li className='navLi'><a className='navli_a' href="#">Eyebrow cosmetics</a></li>
            <li className='navLi'><a className='navli_a' href="#">Decorative cosmetics</a></li>
            <li className='navLi'><a className='navli_a' href="#">New in the collection</a></li>
            <li className='navLi'><a className='navli_a' href="#">Box and complect</a></li>
            <li className='navLi'><a className='navli_a' href="#">Accessories</a></li>
          </ul>
        </div>
        <div className="footerCont">
          <h3 className='footerTitle'>Contacts</h3>
          <p className='footerText'>We are open to new opportunities, so you can contact our company representatives for any questions</p>
          <div className='footer_cont'>
            <span className='cont_li'> <a href=""><img className='cont_icons' src={email} alt="email_icon" /></a>E-mail</span>
            <span> <a href=""><img className='cont_icons' src={whats} alt="whats_logo" /></a>Whatsapp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
