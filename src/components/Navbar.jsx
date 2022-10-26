import { NavLink } from "react-router-dom";
import "./Navbar.css";


    export default function Navbar() {
            const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
            <div className="navbar">

                <NavLink className={ setActiveClass } to="/home">Home</NavLink>
                        {" - "}
                <NavLink className={ setActiveClass } to="/pokemon">Pokemon</NavLink>
</div>
);
}