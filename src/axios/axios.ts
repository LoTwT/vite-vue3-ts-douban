import Axios from "axios"

export default Axios.create({
    baseURL: "http://api.zhinengshe.com/10005-douban/",
    headers: {
        apikey: "e93957b0dfcf4df788b633557449f3eb"
    }
})