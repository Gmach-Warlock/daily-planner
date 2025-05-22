import './Header.css'
import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <span>My Daily Planner</span>
            <nav>
                <ul>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/planner">Planner</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};