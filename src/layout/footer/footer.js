import React from 'react'

import classes from './footer.module.css';

const Footer = () => {

  const section1 = ['ABOUT KONGA', 'Contact Us', 'About Us', 'Careers', 'Our Blog', 'Forum', 'Terms & Conditions']
  const section2 = ['PAYMENT', 'KongaPay', 'Wallet', 'Verve', 'Mastercard', 'Visa']
  const section3 = ['BUYING ON KONGA', 'Buyer Safety Centre', 'FAQs', 'Delivery', 'Konga Return Policy', 'Digital Services', 'Bulk Purchase']
  const section4 = ['MORE INFO', 'Site Map', 'Track My Order', 'Privacy Policy', 'Authentic Items Policy', 'Forum', 'Terms & Conditions']
  const section5 = ['MAKE MONEY ON KONGA', 'Become a Konga Affiliate']

    const support = [
      {
        icon: <i className="fa fa-envelope" aria-hidden="true"></i>,
        title: "EMAIL SUPPORT",
        description: "help@konga.com"
      },
      {
        icon: <i className="fa fa-phone" aria-hidden="true"></i>,
        title: "PHONE SUPPORT",
        description:
          "0701 263 5700, 0809 060 5055"
      },
      {
        title: "GET LATEST DEALS",
        description:
          "Our best promotions sent to your inbox."
    }
    ];

  const footerForm = () => (
    <section className={classes.Support}>
      {support.map(item => (
        <div key={item.title}>
          <div className="icon">{item.icon}</div>
          <div className="info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <form>
        <input type="text" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );

  const FooterLinksHandler = (section) => {
    const siteHeader = section[0];
    return (
      <div>
        <h4 className={classes.LinkHeader}> {section[0]}</h4>
        <ul className={classes.FooterLink}>
          {
            section.map(link => (
              (link !== siteHeader)
                ? <li key={link}>
                  <a href={link}>{link}</a>
                </li>
                : null
            ))
          }
        </ul>
      </div>
    )
  }

  return (
    <footer className={classes.FooterGroup}>
      {footerForm()}
      <div className={classes.Footer}>
        {FooterLinksHandler(section1)}
        {FooterLinksHandler(section2)}
        {FooterLinksHandler(section3)}
        {FooterLinksHandler(section4)}
        {FooterLinksHandler(section5)}
      </div>
    </footer>
  );
}

export default Footer;
