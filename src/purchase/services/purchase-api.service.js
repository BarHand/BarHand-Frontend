import http from '../../core/services/http-common';

export class PurchaseApiService {
    getAll() {
        return http.get('/purchase');
    }

    getById(id) {
        return http.get(`/purchase/${id}`);
    }

    create(data) {
        return http.post('/purchase', data);
    }

    update(id, data) {
        return http.put(`/purchase/${id}`, data);
    }

    delete(id) {
        return http.delete(`/purchase/${id}`);
    }


}
