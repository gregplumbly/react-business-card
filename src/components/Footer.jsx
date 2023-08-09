import React from 'react';

export const Footer = () => {
  const links = [
    { href: 'https://www.twitter.com', src: '/images/x.png', alt: 'Twitter' },
    { href: 'https://www.facebook.com', src: '/images/fb.png', alt: 'Facebook' },
    { href: 'https://www.instagram.com', src: '/images/insta.png', alt: 'Instagram' },
    { href: 'https://www.github.com', src: '/images/github.png', alt: 'GitHub' }
  ];

  return (
    <footer>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          <img src={link.src} alt={link.alt} />
        </a>
      ))}
    </footer>
  );
};
