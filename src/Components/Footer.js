import React from 'react'
import '../CSS/Footer.css'
import RedStone from './Stones/RedStone';
import GreenStone from './Stones/GreenStone';
import YellowStone from './Stones/YellowStone';
import VioletStone from './Stones/VioletStone';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Insta } from '../images/insta.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Youtube } from '../images/utube.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';


function Footer() {
 return (
    <div style={{
        backgroundColor: 'black',
        color: 'white',
    
    }} className='footer'>
        <div classname='options'>
            <ul>
                    <li><NavLink to="/Events">EVENTS</NavLink></li>
                    <li><NavLink to="/Merch">MERCH</NavLink></li>
                    <li><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li><NavLink to="/MUN">MUN</NavLink></li>
                    <li><NavLink to="/Sponsors">SPONSORS</NavLink></li>
                    <li><NavLink to="/Contests">CONTESTS</NavLink></li>
            </ul>
        <div>Alcher Logo</div>
        </div>
        <div>
            <div className='hail'>HAIL <br/> ALCHER!</div>
            <div className="stones">
                <div className='red'>
                    <RedStone/>
                </div>
                <div className='green'>
                    <GreenStone/>
                </div>
                <div className='violet'>
                    <VioletStone/>
                </div>
                <div className='yellow'>
                    <YellowStone/>
                </div>
            </div>
        </div>
        <div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                position:"absolute",
                right: "120px",
                bottom:"431px",
                height:"184px",
                justifyContent:"space-between",
            }}>
                <div className='shareka'>
                    <b>Shareka Iqbal</b> <br></br>
                    PR HEAD<br></br>
                    +91 8919054239
                </div>
                <div className='abhi'>
                    <b>Abhishek Singh</b> <br></br>
                        PR HEAD<br></br>
                        +91 9983072631
                </div>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                height:"fit-content",
                position:"absolute",
                bottom: "56px",
                right: "120px",
            }}>
                <div className="socials">
                    <a href=''><Insta/></a>
                    <a href=''><Facebook/></a>
                    <a href=''><Twitter/></a>
                    <a href=''><Youtube/></a>
                </div>
                <div className='inqueries'>
                For Business Inqueries: <b>alcheringa@iitg.ac.in</b>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer