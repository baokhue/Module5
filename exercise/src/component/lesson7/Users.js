import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {UsersList} from "./UsersList";

export function Users() {
    return(
        <>
            <div className="container">
                <h1>Users</h1>
                <button>
                    <NavLink to={'/list'} style={{textDecoration: "none", color: "black"}}>Get users!</NavLink>
                </button>
            </div>
        </>
    )
}