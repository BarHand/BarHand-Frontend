import http from '../../core/services/http-common';

export class StoresApiService {
    getAll() {
        return http.get('/stores');
    }

    getById(id) {
        return http.get(`/stores/${id}`);
    }

    create(data) {
        return http.post('/stores', data);
    }

    update(id, data) {
        return http.put(`/stores/${id}`, data);
    }

    delete(id) {
        return http.delete(`/stores/${id}`);
    }

    findByName(name) {
        return http.get(`/stores?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/stores?title=${lastName}`);
    }
}