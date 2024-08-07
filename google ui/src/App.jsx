// input with 3 images
//two buttons 
//language sopported
import './App.css'
import glens from '../src/assets/gphotos/glens.png'
import gmic from '../src/assets/gphotos/gmic.png'
import search from '../src/assets/gphotos/searchicon.png'

function App() {
  

  return (
    <>
      <div className='page'>
        <h1>google</h1>
        <div className="searchbar">
          <img src={search} alt="" className='logo' />
          <input type="text" id='search'/>
          <img src={gmic} alt="" className='logo'/>
          <img src={glens} alt="" className='logo'/>
        </div>
        <div><button>google search</button>
        <button>i'm feeling lucky</button>
        </div>
        <div>
          Language : <span>Tamil Malayalam English Kannada Telugu</span> 
        </div>
      </div>
    </>
  )
}

export default App
