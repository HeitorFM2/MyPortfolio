import axios from "axios";
const path = "https://springboot-sendemail-production.up.railway.app"

export const sendEmail = async (data) => {
  return axios.post(`${path}/sendEmail`, data).then(response => {
    return response
  })
    .catch(error => {
      console.error(error);
    });
}
