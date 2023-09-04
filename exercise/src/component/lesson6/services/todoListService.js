import axios from "axios";

export const getItem = async () => {
    try {
        const result = await axios.get("http://localhost:8081/items");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const addItem = async (value) => {
    try {
        const result = await axios.post("http://localhost:8081/items", { todos: value});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}