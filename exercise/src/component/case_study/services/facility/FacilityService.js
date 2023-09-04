import axios from "axios";

export const getFacilities = async () => {
    try {
        const result = await axios.get("http://localhost:8080/facilities");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const addFacility = async (value) => {
    try {
        const result = await axios.post("http://localhost:8080/facilities", value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}