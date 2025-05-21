import './Header.css'
import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/contacts" />Contacts</li>
                    <li><NavLink to="/planner" />Planner</li>
                </ul>
            </nav>
        </header>
    );
};