import Subscribe from './Subscribe';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="SWW">
          <img className="header__logo" src="/static/sww.jpg" alt="Something Was Wrong" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">{`A docuseries about discovery, trauma & recovery.`}</h2>
        <a
          target="_blank"
          href="https://forms.gle/vXmjLLn2FpsKVqSV8"
          className="title__potluck-btn"
          rel="noopener noreferrer"
        >
          Leave a note →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img src="/static/tiffany.jpg" alt="Wes Bos" className="avatar" />
          <h3>Tiffany Reese</h3>
          <a
            target="_blank"
            href="https://twitter.com/lookieboo"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @lookieboo
          </a>
          <p>
            Matriarch // Stylist // Makeup Artist // Blogger // Podcast Host // {' '}
            <a
              target="_blank"
              href="https://www.lookieboo.com"
              rel="noopener noreferrer"
            >
              LookieBoo.com
            </a>
            .
          </p>
        </div>

        <div className="person">
          <img
            src="/static/sara.jpg"
            alt="Sara Lewis"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Sara Lewis</h3>
          <a
            target="_blank"
            href="https://twitter.com/"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @something
          </a>
          <p>
            I write about the hilarity in the mundane, my process with the Lord, and recovering from narcissistic and sociopathic abuse at{' '}
            <a href="https://spaceandpurpose.com/">Space and Purpose</a>
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
