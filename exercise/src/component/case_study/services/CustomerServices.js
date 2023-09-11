import axios from "axios";

export const getCustomers = async () => {
    try {
        const result = await axios.get("http://localhost:8081/customers");
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const addCustomer = async (value) => {
    try {
        const result = await axios.post("http://localhost:8081/customers", value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const getCustomer = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8081/customers/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const editCustomer = async (id, value) => {
    try {
        const result = await axios.patch(`http://localhost:8081/customers/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteCustomer = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8081/customers/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};