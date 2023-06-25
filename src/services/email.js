import axios from "axios";
const path = "http://localhost:8080"

export const sendEmail = async (data) => {
  return axios.post(`${path}/sendEmail`, data).then(response => {
    return response
  })
    .catch(error => {
      console.error(error);
    });
}
