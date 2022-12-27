import request from "../utils/request";

export default {
    //抖音视频解析
    getVedio(params: Object) {
        return request("/api/video/videoDate", "GET", params)
    }

}
