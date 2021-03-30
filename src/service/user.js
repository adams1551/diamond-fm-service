import http from "./http";
import { cipher, decipher } from "./encryption";

class User {
    constructor(http) {
        this.request = http;
    }

    getActiveToken() {
        return localStorage.getItem("_au_si_");
    }
    setActiveUser(user) {
        this.activeUser = user;
        // encript user data
        const myCipher = cipher("mySecretSalt");
        // console.log(userToken);
        var s_u = JSON.stringify(this.activeUser);
        const n_c = myCipher(s_u);
        //  console.log(n_c);
        localStorage.setItem("_us_d_si", n_c);
    }
    getActiveUser() {
        if (localStorage.getItem("_us_d_si")) {
            // decription instance
            const myDecipher = decipher("mySecretSalt");
            // console.log(myDecipher(localStorage.getItem('_us_d_si')));
            // decript user data from local storage
            const userData = myDecipher(localStorage.getItem("_us_d_si"));
            this.activeUser = JSON.parse(userData);
            // this.activeUser = localStorage.getItem('_us_d_si');
            return this.activeUser;
        }
         return '';

    }
    setUserList(users) {
        this.userList = users;
    }

    fetchUsers() {
        return this.request.get("/users?token=" + this.getActiveToken());
    }

    fetchUsersNoPage() {
        return this.request.get("/users-no-page");
    }

    // StoreUser(user){
    //   return this.request.post('/register', user);
    // }

    changePassword(user_id, data) {
        return this.request.post(
            "/change-password/" + user_id + "?token=" + this.getActiveToken(),
            data
        );
    }
}

export default new User(http);
