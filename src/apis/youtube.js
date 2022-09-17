import axios from "axios";

const KEY = "AIzaSyCsDccj_owkY82Sh-vchVDE_7u9kOd9MU0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
