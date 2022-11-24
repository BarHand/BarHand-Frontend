import http from "../core/services/http-common";


export class NotificationService {
    getAll() {
        return http.get('/notification');
    }

    getAllById(id, type) {
        return http.get(`/notification/${id}/${type}`);
    }

    delete(id) {
        return http.delete(`/notification/${id}`);
    }


}