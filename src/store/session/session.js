import { LocalStorage } from 'quasar'
import { USER_STORAGE_KEY } from '../../boot/axios'


const sessionModule = {
    state: {
        user: null
    },
    mutations: {
        login(state, data) {
            state.user = data
            LocalStorage.set(USER_STORAGE_KEY, data)
        },
        logout(state) {
            state.user = null
            LocalStorage.remove(USER_STORAGE_KEY);
        }
    },
    actions: {

    },
    getters: {
        user: (state) => state.user
    }
}

export default sessionModule