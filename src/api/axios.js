import axios from "axios";

export default axios.create({
  baseURL: "http://talkspace.eu-north-1.elasticbeanstalk.com",
});
