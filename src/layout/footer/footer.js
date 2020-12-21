import React, { useState } from 'react';
import { arrowdownIcon } from '../../imports';

import classes from './footer.module.css';

const Footer = () => {
  const [moreOption, showMoreoptions] = useState(false);
  const section1 = [
    'ABOUT KONGA',
    'Contact Us',
    'About Us',
    'Careers',
    'Our Blog',
    'Forum',
    'Terms & Conditions'
  ];
  const section2 = [
    'PAYMENT',
    'KongaPay',
    'Wallet',
    'Verve',
    'Mastercard',
    'Visa'
  ];
  const section3 = [
    'BUYING ON KONGA',
    'Buyer Safety Centre',
    'FAQs',
    'Delivery',
    'Konga Return Policy',
    'Digital Services',
    'Bulk Purchase'
  ];
  const section4 = [
    'MORE INFO',
    'Site Map',
    'Track My Order',
    'Privacy Policy',
    'Authentic Items Policy',
    'Forum',
    'Terms & Conditions'
  ];
  const section5 = ['MAKE MONEY ON KONGA', 'Become a Konga Affiliate'];

  const support = [
    {
      icon: <i className="fa fa-envelope" aria-hidden="true"></i>,
      title: 'EMAIL SUPPORT',
      description: 'help@konga.com',
      class: 'email'
    },
    {
      icon: <i className="fa fa-phone" aria-hidden="true"></i>,
      title: 'PHONE SUPPORT',
      description: '0701 263 5700, 0809 060 5055',
      class: 'phone'
    },
    {
      title: 'GET LATEST DEALS',
      description: 'Our best promotions sent to your inbox.',
      class: 'deals'
    }
  ];

  const footerForm = () => (
    <section className={classes.Support}>
      {support.map(item => (
        <span
          className={`${classes.footermenuLink} 
          ${item.class}`}
          key={item.title}
        >
          <div className={classes.icon}>{item.icon}</div>
          <div className={classes.info}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </span>
      ))}
      <form>
        <input type="text" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );

  const FooterLinksHandler = section => {
    const siteHeader = section[0];
    return (
      <div>
        <h4 className={classes.LinkHeader}> {section[0]}</h4>
        <ul className={classes.FooterLink}>
          {section.map(link =>
            link !== siteHeader ? (
              <li key={link}>
                <a href={link}>{link}</a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  };

  const onFooterMenuHandler = () => showMoreoptions(true);

  const arrowstyles = {
    more: {
      backgroundColor: 'yellow'
    },
    less: {
      backgroundColor: 'red'
    }
  };

  const forMoreOptions = moreOption ? 'MORE' : 'lESS';

  const arrowStyle = moreOption ? arrowstyles.more : arrowstyles.less;

  const MoreOptionsLinks = () => {
    return moreOption ? (
      <span>
        {FooterLinksHandler(section1)}
        {FooterLinksHandler(section2)}
        {FooterLinksHandler(section3)}
        {FooterLinksHandler(section4)}
        {FooterLinksHandler(section5)}
      </span>
    ) : null;
  };

  return (
    <footer className={classes.FooterGroup}>
      {footerForm()}
      <ul className={classes.footerList}>
        <li className={classes.mobileFooter} onClick={onFooterMenuHandler}>
          <p>{forMoreOptions} OPTIONS</p>
          <div style={arrowStyle}>
            <img src={arrowdownIcon} alt="arrow icon" />
          </div>
        </li>
        <li>{MoreOptionsLinks()}</li>
      </ul>
      <div className={classes.Footer}>
        {FooterLinksHandler(section1)}
        {FooterLinksHandler(section2)}
        {FooterLinksHandler(section3)}
        {FooterLinksHandler(section4)}
        {FooterLinksHandler(section5)}
      </div>
    </footer>
  );
};

export default Footer;
