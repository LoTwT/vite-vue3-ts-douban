import Axios from "axios"
import { apikey } from "../globals"

export default Axios.create({
    baseURL: "http://api.zhinengshe.com/10005-douban/",
    headers: {
        apikey: apikey
    }
})