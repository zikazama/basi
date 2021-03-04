import config from "./../global/config";
import axios from "axios";

const apiEndPoint = config().apiEndPoint();
const apiKey = config().apiKey();

function apiService() {
  const headline = async () => {
    return await axios
      .get(`${apiEndPoint}top-headlines?country=id&apiKey=${apiKey}`);
  };
  const endpointHeadline = function () {
    return `${apiEndPoint}top-headlines?country=id&apiKey=${apiKey}`;
  }
  const search = async (query) => {
    return await axios
      .get(`${apiEndPoint}everything?q=${query}&apiKey=${apiKey}`);
  };
  const endpointSearch = function (query) {
    return `${apiEndPoint}everything?q=${query}&apiKey=${apiKey}`;
  }
  const category = async (category) => {
    return await axios
      .get(`${apiEndPoint}sources?category=${category}&apiKey=${apiKey}`);
  };
  const endpointCategory = function (category) {
    return `${apiEndPoint}sources?category=${category}&apiKey=${apiKey}`;
  }
  return {
    headline: headline,
    search: search,
    category: category,
    endpointHeadline: endpointHeadline,
    endpointSearch: endpointSearch,
    endpointCategory: endpointCategory
  };
}

export default apiService;
