const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://itunes.apple.com/us/podcast/something-was-wrong/id1447286743?mt=2"
          rel="noopener noreferrer"
        >
          iTunes
        </a>
      </li>
      <li className="subscribe__link subscribe__link--overcast">
        <a
          target="_blank"
          href="https://overcast.fm/itunes1447286743/something-was-wrong"
          rel="noopener noreferrer"
        >
          Overcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--google">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cDovL3NvbWV0aGluZ3dhc3dyb25nLmxpYnN5bi5jb20vcnNz"
          rel="noopener noreferrer"
        >
          Google Podcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--stitcher">
        <a
          target="_blank"
          href="https://www.stitcher.com/podcast/something-was-wrong"
          rel="noopener noreferrer"
        >
          Stitcher
        </a>
      </li>
      <li className="subscribe__link subscribe__link--pocketcasts">
        <a target="_blank" href="http://pca.st/37A7" rel="noopener noreferrer">
          PocketCasts
        </a>
      </li>
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/3GptGES42jdzOygpz7Qvf8"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </li>
      <li className="subscribe__link subscribe__link--rss">
        <a
          target="_blank"
          href="http://somethingwaswrong.libsyn.com/rss"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </li>
    </ul>
  </div>
);

export default Subscribe;
