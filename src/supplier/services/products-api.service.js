import http from '../../core/services/http-common';

export class ProductsApiService {
    getAll() {
        return http.get('/products');
    }

    getById(id) {
        return http.get(`/products/${id}`);
    }

    create(data) {
        return http.post('/products', data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }

    findByTitle(title) {
        return http.get(`/products?title=${title}`);
    }
}