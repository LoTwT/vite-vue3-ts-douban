import Axios from "axios"
import globals from "../globals"

export default Axios.create({
    baseURL: "http://api.zhinengshe.com/10005-douban/",
    headers: {
        apikey: globals.apikey
    }
})