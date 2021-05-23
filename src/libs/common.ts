import globals from "../globals"

// 请求图片
export function getImg(imgName: string) {
    return `http://api.zhinengshe.com/10005-douban/${imgName}?apikey=${globals.apikey}`
}