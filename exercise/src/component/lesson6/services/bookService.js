import axios from "axios";

export const getBooks = async () => {
    try {
        const list = await axios.get("http://localhost:8080/books");
        return list.data;
    } catch (e) {
        console.log(e);
    }
}

export const addBook = async (value) => {
    try {
        const result = await axios.post("http://localhost:8080/books", value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const getBook = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/books/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const editBook = async (id, value) => {
    try {
        const result = await axios.patch(`http://localhost:8080/books/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}