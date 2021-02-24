import config from "./../global/config";
import axios from "axios";

const apiEndPoint = config().apiEndPoint();
const apiKey = config().apiKey();

function apiService() {
  const headline = function () {
    return axios
      .get(`${apiEndPoint}top-headlines?country=id&apiKey=${apiKey}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const search = function (query) {
    axios
      .get(`${apiEndPoint}everything?q=${query}&apiKey=${apiKey}`)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const category = function (category) {
    axios
      .get(`${apiEndPoint}sources?category=${category}&apiKey=${apiKey}`)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return {
    headline: headline,
    search: search,
    category: category,
  };
}

export default apiService;
