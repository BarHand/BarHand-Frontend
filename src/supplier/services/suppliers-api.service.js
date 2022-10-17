import http from '../../core/services/http-common';

export class SuppliersApiService {
    getAll() {
        return http.get('/suppliers');
    }

    getById(id) {
        return http.get(`/suppliers/${id}`);
    }

    create(data) {
        return http.post('/suppliers', data);
    }

    update(id, data) {
        return http.put(`/suppliers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/suppliers/${id}`);
    }

    findByName(name) {
        return http.get(`/suppliers?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/suppliers?title=${lastName}`);
    }
}