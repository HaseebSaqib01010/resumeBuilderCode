import React from 'react'
import img1 from "../../assets/images/TemplateImages/amsterdam.jpg"
import img2 from "../../assets/images/TemplateImages/barcelona.jpg"
import img3 from "../../assets/images/TemplateImages/stockholm.jpg"
import img4 from "../../assets/images/TemplateImages/paris.jpg"
import img5 from "../../assets/images/TemplateImages/berlin.jpg"
import img6 from "../../assets/images/TemplateImages/boston.jpg"
import img7 from "../../assets/images/TemplateImages/capeTown.jpg"
import img8 from "../../assets/images/TemplateImages/chicago.jpg"
import img9 from "../../assets/images/TemplateImages/copenhagen.jpg"
import img10 from "../../assets/images/TemplateImages/dublin.jpg"
import img11 from "../../assets/images/TemplateImages/lisbon.jpg"
import img12 from "../../assets/images/TemplateImages/geneva.jpg"
import img13 from "../../assets/images/TemplateImages/london.jpg"
import img14 from "../../assets/images/TemplateImages/madrid.jpg"
import img15 from "../../assets/images/TemplateImages/vienna.jpg"
import img16 from "../../assets/images/TemplateImages/vancouver.jpg"
import img17 from "../../assets/images/TemplateImages/tokyo.jpg"
import img18 from "../../assets/images/TemplateImages/sydney.jpg"
import img19 from "../../assets/images/TemplateImages/singapore.jpg"
import img20 from "../../assets/images/TemplateImages/santiago.jpg"
import img21 from "../../assets/images/TemplateImages/rome.jpg"
import img22 from "../../assets/images/TemplateImages/rio.jpg"
import img23 from "../../assets/images/TemplateImages/oslo.jpg"
import img24 from "../../assets/images/TemplateImages/newYork.jpg"
import img25 from "../../assets/images/TemplateImages/moscow.jpg"
import img26 from "../../assets/images/TemplateImages/milan.jpg"


import "./TemplateMenu.css"
function TemplateMenu({handleTemplateChange}) {
  return (
    <div className='templateMenu' >
      <div className='templateSection' >
      <h5>Amsterdam</h5>
      <div className='temp-image'  onClick={() => handleTemplateChange("Amsterdam")}>
        <img src={img1} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>

      </div>
   
      <div className='templateSection'>
      <h5>Chicago</h5>
      <div className='temp-image' onClick={() => handleTemplateChange("Chicago")}>
      <img src={img8} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection' >
      <h5>Rome</h5>
      <div className='temp-image' onClick={()=>{handleTemplateChange("Rome")}}>
      <img src={img21} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Barcelona</h5>
      <div className='temp-image'>
        <img src={img2} alt="" style={{borderRadius:"8px",width:"100%"}}/>

      </div>

      </div>
      <div className='templateSection'>
      <h5>Stockholm</h5>
      <div className='temp-image'>
      <img src={img3} alt="" style={{borderRadius:"8px",width:"100%"}}/>
     </div>
      </div>
      <div className='templateSection'>
      <h5>Paris</h5>
      <div className='temp-image'>
      <img src={img4} alt="" style={{borderRadius:"8px",width:"100%"}}/>
     </div>
      </div>
      <div className='templateSection'>
      <h5>Berlin</h5>
      <div className='temp-image'>
      <img src={img5} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Boston</h5>
      <div className='temp-image'>
      <img src={img6} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>NewYork</h5>
      <div className='temp-image'>
      <img src={img24} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>CapeTown</h5>
      <div className='temp-image'>
      <img src={img7} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
  
      <div className='templateSection'>
      <h5>Copenhagen</h5>
      <div className='temp-image'>
      <img src={img9} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Dublin</h5>
      <div className='temp-image'>
      <img src={img10} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Lisbon</h5>
      <div className='temp-image'>
      <img src={img11} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Geneva</h5>
      <div className='temp-image'>
      <img src={img12} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>London</h5>
      <div className='temp-image'>
      <img src={img13} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Madrid</h5>
      <div className='temp-image'>
      <img src={img14} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Vienna</h5>
      <div className='temp-image'>
      <img src={img15} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
       <div className='templateSection'>
      <h5>Vancouver</h5>
      <div className='temp-image'>
      <img src={img16} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>

      <div className='templateSection'>
      <h5>Tokyo</h5>
      <div className='temp-image'>
      <img src={img17} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Sydney</h5>
      <div className='temp-image'>
      <img src={img18} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Singapore</h5>
      <div className='temp-image'>
      <img src={img19} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Santiago</h5>
      <div className='temp-image'>
      <img src={img20} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      
      {/* <div className='templateSection'>
      <h5>Rio</h5>
      <div className='temp-image'  onClick={() => handleTemplateChange("Rio")}>
      <img src={img22} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div> */}
      <div className='templateSection'>
      <h5>Oslo</h5>
      <div className='temp-image'>
      <img src={img23} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
      <div className='templateSection'>
      <h5>Rio</h5>
      <div className='temp-image'  onClick={() => handleTemplateChange("Rio")}>
      <img src={img22} alt="" style={{borderRadius:"8px",width:"100%"}}/>
      </div>
      </div>
    </div>
  )
}

export default TemplateMenu;
