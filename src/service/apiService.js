import * as API from "./API_CONSTANT";
import axiosInstance from "./axiosInstance";

export const fetchUserData = async () => {
   try {
        const res = await axiosInstance
            .get(API.BASE_URL + API.LIST_USER);
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
