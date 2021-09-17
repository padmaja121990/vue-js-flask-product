import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get(`/todos`);
  }

  get(id) {
    return http.get(`/todos/${id}`);
  }

  post() {
    return http.get(`/todos`);
  }

}

export default new UserDataService();