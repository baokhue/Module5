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