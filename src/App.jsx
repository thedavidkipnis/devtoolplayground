import Navbar from './components/Navbar'
import { useContent } from './context/ContentContext'

function App() {
  const { displayedContent } = useContent();

  return (
    <div>
      <div className='content-wrapper'>
        <Navbar />
        <div className='content-display-wrapper'>
          {displayedContent}
        </div>

        <div className='portfolio-link-wrapper'>
          <a
            className="portfolio-link"
            href='https://thedavidkipnis.github.io/portfolio2.0/'
            target="_blank"
            rel="noopener noreferrer"
          >
            {'>'} david kipnis, 2025
          </a>
        </div>
      </div>

      <div className='mobile-support-banner'>
        mobile support is coming soon!
      </div>
    </div>
  );
}

export default App
