import http from "./http";
//import userService from  '../services/user';

class Auth{
    constructor(http){
        this.request = http;
        this.isAuthenticated = false;
    }


    setActiveToken(token) {
        this.isAuthenticated = true;
        this.activeToken = token;
        localStorage.setItem("_au_si_", this.activeToken);
    }

    getActiveToken() {
        // return this.activeToken;
        return localStorage.getItem("_au_si_");
    }

    signin(data) {
        return this.request.post("http://localhost:3200/api/auth/signin", data);
    }

    signupAgent(data) {
        return this.request.post("http://localhost:3200/api/auth/signup-agent ", data);
    }

    signupUser(data) {
        return this.request.post("http://localhost:3200/api/auth/signup-user ", data);
    }

    getAuthenticatedUser() {
        return this.request.get("/user", this.getActiveToken());
    }

    updateProfile(data){console.log(this.request);
        return this.request.post("http://localhost:3200/api/user/update ", data);
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem("_au_si_"); //token
        localStorage.removeItem("_us_d_si"); //user
        this.activeToken = "";
    }
}

export default new Auth(http);