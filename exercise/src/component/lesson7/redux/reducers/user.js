import {DELETE_USER, GET_USERS} from "../../Types";

export const userReducer = (users = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_USERS:
            return payload;
        case DELETE_USER:
            return [...users,payload];
        default:
            return users;
    }
}