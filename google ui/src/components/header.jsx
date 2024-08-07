//about store gmail images beaker ... profile
import beaker from '../assets/gphotos/beaker.png'
import profile from '../assets/gphotos/profile.png'
import '../App.css'


function Headd() {
  

    return (
      <>
        <div className='header'>
             <div id='parent'>
                <div id='once'>about</div>
                <div id='once'>store</div>
            </div>
            <div id='parent1'>
                <div id='once'>gmail</div>
                <div id='once'>images</div>
                <div id='beak'><img src={beaker} alt="" id='beaker'/></div>
                <div><img src={profile} alt="" id='beake'/></div>
            </div>
        </div>
      </>
    )
  }
  
  export default Headd


