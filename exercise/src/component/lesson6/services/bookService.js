import axios from "axios";

export const getBooks = async () => {
    try {
        const list = await axios.get("http://localhost:8080/books");
        list.data;
    } catch (e) {
        console.log(e);
    }
}

export const addBook = async (value) => {
    try {
        const result = await axios.post("http://localhost:8080/books", value);
        result.data;
    } catch (e) {
        console.log(e);
    }
}