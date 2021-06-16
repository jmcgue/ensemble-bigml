import axios from "axios";

const API_URL = "http://127.0.0.1:8080/cancer/bigml";

export default async function postPredict(data) {
  return axios.post(API_URL, data);
}
