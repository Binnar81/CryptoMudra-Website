import {
    IconBrandDiscord,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandLinkedin,
  } from "@tabler/icons-react";
  
  function Footer() {
    return (
      <>
        <footer>
          <div className="footer-content">
            <div className="footer-content__socials">
<a href="https://www.linkedin.com/in/sanjay-binnar/">
<IconBrandLinkedin className="footer-icon" />
</a>
<a href="https://twitter.com/sanjay_binnar">
<IconBrandTwitter className="footer-icon" />
</a>
<a href="https://www.youtube.com/channel/UCZE4semrZ5EVeq1AGJQdSbw">
<IconBrandYoutube className="footer-icon" />
</a>
<a href="https://www.facebook.com/sanjay.binnar.775/">
<IconBrandFacebook className="footer-icon" />
</a>
<a href="">
<IconBrandDiscord className="footer-icon" />
</a>

             
            </div>
            <div className="footer-content__text">
              <p>Privacy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  