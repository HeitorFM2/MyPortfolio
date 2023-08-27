import axios from "axios";

export const sendEmail = async (data) => {
  return axios.post(`${process.env.VUE_APP_EMAIL}/v1/send/email`, data).then(response => {
    return response
  })
    .catch(error => {
      console.error(error);
    });
}
