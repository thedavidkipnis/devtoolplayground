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
    </div>
  )
}

export default App
