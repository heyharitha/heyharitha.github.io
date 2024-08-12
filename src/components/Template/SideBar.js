import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Haritha</h2>
        <p><a href="mailto:haritha1995@gmail.com">haritha1995@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Haritha. I am a software engineer by profession, currently a SDE-2 in <a href="https://advertising.amazon.com/">Amazon&apos;s Advertising</a>.
        I use this website to explore my interests and projects beyond my 9 to 5.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">About Me</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Haritha <Link to="/">heyharitha.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
