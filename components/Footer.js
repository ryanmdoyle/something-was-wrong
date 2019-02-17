import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>&copy; Something Was Wrong {' '}
      {new Date().getFullYear()}
    </p>
    <p>
      Website made with React, Next.js and stylus.
    </p>
    <p> Site made by Ryan M Doyle {' '}
      <a
        target="_blank"
        href="https://doylecodes"
        className="person__social person__social--twitter"
        rel="noopener noreferrer"
      > doylecodes.com.</a>
      {' '}Most of the site copied over from gurus WeBos and Scott Tolinski at syntax.fm. Their source is
      on{' '}
      <a
        href="https://github.com/wesbos/syntax"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
