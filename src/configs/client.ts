import axios from "axios";
import { site } from "drivers/loader";

const client = axios.create({
  baseURL: site.baseApiUrl,
});

export default client;
