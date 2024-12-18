import { BASE_URL } from "./constants";

import axios from "axios";

//get all data
const getAllData = async (endpoint) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const controller = {
    getAllData
}

export default controller;