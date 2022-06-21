import axios from "axios";
const KEY = "AIzaSyCj45UuIY79538jE8oRT1B9IC-DwAOPKy0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
