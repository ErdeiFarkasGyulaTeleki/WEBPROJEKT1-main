import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Főoldal</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Bejelentkezés</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Regisztráció</NavLink>
                </li>
                <li>
                    <NavLink to="/user">Profil</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Termékek</NavLink>
                </li>
                <li>
                    <NavLink to="/multi-form">Multi Form</NavLink>
                </li>
                <li>
                    <NavLink to={"admin"}>Admin</NavLink>
                </li>
                <li>
                    <NavLink to={"test"}>Test</NavLink>
                </li>
                <li>
                    <NavLink to={"logout"}>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
}
