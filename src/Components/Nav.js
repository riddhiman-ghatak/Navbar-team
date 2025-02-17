import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../CSS/Nav.css'
import Pictures from './Pictures'
function Nav() {
    return (
    <div>
        <header>
            <div>Alcheringa logo</div>
            <nav className='NavigationBar'>
                <ul className='NavigationList'>
                    <li><NavLink to="/Events">EVENTS</NavLink></li>
                    <li><NavLink to="/Merch">MERCH</NavLink></li>
                    <li><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li><NavLink to="/MUN">MUN</NavLink></li>
                    <li><NavLink to="/Sponsors">SPONSORS</NavLink></li>
                    <li><NavLink to="/Contests">CONTESTS</NavLink></li>
                </ul>
            </nav>
            <Link className='image' to="/BookTickets"><Pictures /></Link>
        </header>
    </div>
    )
}

export default Nav