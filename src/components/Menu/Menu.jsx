import React from 'react';
import "./Menu.css";
import "../fillSection/fillSec.css"
import { useSpring, animated,config } from 'react-spring';
import ArticleIcon from '@mui/icons-material/Article';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SpeedIcon from '@mui/icons-material/Speed';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MessageIcon from '@mui/icons-material/Message';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
function Menu() {
  const menuAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)', // Use transform for a different effect
    from: { opacity: 1, transform: 'translateX(-100%)' }, // Start from the left and fade in
    // config: config.molasses, // Customize animation speed
    config: { duration: 500 },
  });
   
  return (
    <animated.div style={menuAnimation}>
    <div className="fill-sec menu-sec">
    <h2>Menu Bar</h2>
    <div className="wireo-row">
              <div className="menu-btn" style ={{display:"flex" , flexWrap:"wrap", width:"100%"}}>
                <button><ArticleIcon/> &nbsp;Overview</button>
                <button><WidgetsIcon/> &nbsp;Orders</button>
                <button><LocalShippingIcon/> &nbsp;Carriers</button>
                <button><ReceiptIcon/> &nbsp;Invoice</button>
                <button><SpeedIcon/> &nbsp;Automation</button>
                <button><AnalyticsIcon/> &nbsp;Analytics</button>
                <button><MessageIcon/> &nbsp;Messages</button>
                <button><SettingsSuggestIcon/> &nbsp;Settings</button>
              </div>

            </div>
   </div>
  </animated.div>
  );
}

export default Menu;
