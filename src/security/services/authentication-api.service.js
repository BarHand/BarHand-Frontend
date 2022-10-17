import http from '../../core/services/http-common';

export class AuthenticationApiService {
    signUpSupplier(data) {
        return http.post('/suppliers', data);
    }
    signUpStore(data) {
        return http.post('/stores', data);
    }

}