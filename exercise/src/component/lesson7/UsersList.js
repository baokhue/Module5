import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getUsers} from "./redux/actions/UserActions";
import {useNavigate} from "react-router-dom";

export function UsersList() {
    const users = useSelector (store => store.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const delUser = async (id) => {
        await dispatch(deleteUser(id));
        alert("Do you want to remove this user?")
        navigate("/list");
        dispatch(getUsers());
    };

    return(
        <>
            <div className="container">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.map(user => {
                            return(
                                <>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                        <td>
                                            <button onClick={() => {delUser(user.id)}}>
                                                Delete user
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}