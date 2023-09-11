import axios from "axios";

export const getFacilities = async () => {
    try {
        const result = await axios.get("http://localhost:8081/facilities");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const addFacility = async (value) => {
    try {
        const result = await axios.post("http://localhost:8081/facilities", value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const getFacility = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8081/facilities/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const editFacility = async (id, value) => {
    try {
        const result = await axios.patch(`http://localhost:8081/facilities/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteFacility = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8081/facilities/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}