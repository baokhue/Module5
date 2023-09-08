import * as userServices from "../../services/UserServices";
import {DELETE_USER, GET_USERS} from "../../Types";

export const getUsers = () => async (dispatch) => {
    const res = await userServices.getUsers();
    dispatch({
        type: GET_USERS,
        payload: res
    })
};

export const deleteUser = (id) => async (dispatch) => {
    const res = await userServices.deleteUser(id);
    dispatch({
        type: DELETE_USER,
        payload: res
    })
};