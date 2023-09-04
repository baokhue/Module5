import axios from "axios";

export const getContracts = async () => {
    try {
        const result = await axios.get("http://localhost:8081/contracts");
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const addContract = async (value) => {
    try {
        const result = await axios.post("http://localhost:8081/contracts",value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}