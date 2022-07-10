import Api from "./api";

export const getAllDragons = () => {
    return Api.get(`dragon`);
}

export const createdDragon = (formData) => {
    return Api.post(`dragon`,formData);
}
