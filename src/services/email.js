import axios from "axios";
const path = process.env.VUE_APP_EMAIL

export const sendEmail = async (data) => {
  return axios.post(`${path}/sendEmail`, data).then(response => {
    return response
  })
    .catch(error => {
      console.error(error);
    });
}
