'use strict';

class User {
    #login;
    #_password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(pass) {
        this.#_password = pass.split('').reverse().join('');
    }

    get #password() {
        return this.#_password;
    }

    get login() {
        return this.#login;
    }

    checkPassword(pass) {
        return this.#password === pass;
    }

    changePassword(oldPass, newPass) {
        if (!this.checkPassword(oldPass)) {
            return false;
        } 
        this.#password = newPass;
        return true;
        }
}

const user1 = new User('Nik', '123');

console.log(user1.checkPassword('123'));


