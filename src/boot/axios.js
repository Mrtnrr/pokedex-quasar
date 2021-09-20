import Vue from 'vue';
import axios from 'axios';
import { LocalStorage } from 'quasar';

/** url for conection to backend */
// const baseURL = `http://localhost:3000/api`
const baseURL = 'https://pokeapi.co/api/v2'

export const USER_STORAGE_KEY = `user`;

function run() {

    let user = LocalStorage.getItem(USER_STORAGE_KEY);

    let create = axios.create({
        baseURL
    })

    if (user != null) {
        create.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }

    return create;
}

Vue.prototype.$axios = run();
