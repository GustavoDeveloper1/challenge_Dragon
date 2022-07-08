import Api from "./api";

export const getAllDragons = () => {
    return Api.get(`dragon`);
}