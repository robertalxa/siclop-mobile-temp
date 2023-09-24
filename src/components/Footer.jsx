import emailIcon from './assets/images/icons/emailIcon.png';
import facebookIcon from './assets/images/icons/facebookIcon.png';
import instagramIcon from './assets/images/icons/instagramIcon.png';
import telefoneIcon from './assets/images/icons/telefoneIcon.png';
import youtubeIcon from './assets/images/icons/youtubeIcon.png';

import '../styles/components/footer.scss';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="d-flex align-items-center">
        <img className="h-50" src={telefoneIcon} alt="telefone-icone" />
        <span className="mx-2">Tel: (11)2841-6556</span>
      </div>
      <div className="d-flex align-items-center">
        <img className="h-50" src={emailIcon} alt="email-icone" />
        <span className="mx-2">Email: centralsiclop@centralsiclop.com.br</span>
      </div>
      <div className="flex-row">
        <img className="h-100" src={youtubeIcon} alt="youtube-icon" />
        <img className="h-100" src={instagramIcon} alt="instagram-icon" />
        <img
          src={facebookIcon}
          alt="facebook-icon"
          height="40px"
          width="40px"
        />
      </div>
    </footer>
  );
}
