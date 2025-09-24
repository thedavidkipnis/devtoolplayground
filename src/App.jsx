import Navbar from './components/Navbar'
import { useContent } from './context/ContentContext'

function App() {

  const { displayedContent } = useContent();

  return (
    <div className='content-wrapper'>
      <Navbar />
      <div className='.content-display-wrapper'>
        {displayedContent}
      </div>

      <a href='https://thedavidkipnis.github.io/portfolio2.0/' target="_blank" rel="noopener noreferrer">
        {'>'} david kipnis, 2025
      </a>
      
    </div>
  )
}

export default App
