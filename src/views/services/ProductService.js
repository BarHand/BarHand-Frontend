import http from "../../core/http-common";

export default class ProductService {

    getAll() {
        return http.get("/products");
    }
}