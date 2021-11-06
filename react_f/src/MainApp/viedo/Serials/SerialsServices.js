import axios from "axios";

class SerialsServices{
    getSerials(){
        return axios.get("http://localhost:8080/serials/action")
    }
}
export default new SerialsServices();