import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            profiles: [],
            scoreboard: [],
            tournaments: [],
        };
    },

    mutations: {
        setProfiles(state, profiles) {
            state.profiles = profiles;
        },
        addProfile(state, profile) {
            state.profiles.push(profile);
        },
        deleteProfile(state, profileId) {
            state.profiles = state.profiles.filter(profile => profile.id !== profileId);
        },
        setScoreboard(state, scoreboard) {
            state.scoreboard = scoreboard;
        },
        setTournaments(state, tournaments) {
            state.tournaments = tournaments;
        },
    },

    actions: {
        fetchProfiles({ commit }) {
            axios.get('/api/profiles').then(response => {
                commit('setProfiles', response.data);
            });
        },
        addProfile({ commit }, profile) {
            axios.post('/api/profiles', profile).then(() => {
              commit('addProfile', profile);
            });
        },
        deleteProfile({ commit }, profileId) {
            axios.delete('/api/profiles/${profileID}').then(() => {
                commit('deleteProfile', profileId);
            });
        },
        fetchScoreboard({ commit }) {
            axios.get('/api/scoreboard').then(response => {
              commit('setScoreboard', response.data);
            });
          },
          fetchTournaments({ commit }) {
            axios.get('/api/tournaments').then(response => {
              commit('setTournaments', response.data);
            });
        },
    },
});

export default store;