import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state () {
        return {
            items: []
        }
    },
    mutations: {
        addItem (state, payload) {
            state.items.push(payload);
        },
        removeItem(state, payload) {
            const index = state.items.findIndex(item => item.id === payload);
            if(index !== -1) state.items.splice(index, 1);
        },
        markComplete(state, payload) {
            const index = state.items.findIndex(item => item.id === payload);
            if(index !== -1) state.items[index].complete = true;
        },
        markIncomplete(state, payload) {
            const index = state.items.findIndex(item => item.id === payload);
            if(index !== -1) state.items[index].complete = false;
        },
        updateItem(state, payload) {
            const index = state.items.findIndex(item => item.id === payload);
            if(index !== -1) state.items[index].name = payload.name;
        },
        resetItems(state) {
            state.items = [];
        }
    },
    plugins: [createPersistedState()],
});

const app = createApp(App);
app.use(store);
app.mount('#app');
