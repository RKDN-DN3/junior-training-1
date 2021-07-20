import axios from 'axios'

const state = {
    tutorials: []
};

const getters = {
    tutorialsList: state => state.tutorials
};

const actions = {
    async fetchTutorials({ commit }) {
        const response = await axios.get("http://localhost:3000/tutorials");
        commit("setTutorials", response.data)
    },
    async getTutorial({ commit, id }) {
        await axios.get(`http://localhost:3000/tutorials/${id}`);
        commit("setTutorial", id)
    },
    async filterTutorials({ commit }, title) {
        await axios.get(`http://localhost:3000/tutorials?title=${title}`);
        commit("setFilterTutorials", title)
    },
    async addTutorials({ commit }, tutorial) {
        const response = await axios.post("http://localhost:3000/tutorials", tutorial);
        commit("addNewTutorial", response.data)
    },
    async editTutorial({ commit }, id, tutorial) {
        const response = await axios.put(`http://localhost:3000/tutorials/${id}`, tutorial);
        commit("updateTutorial", id, response.data)
    },
    async deleteTutorial({ commit }, id) {
        await axios.delete(`http://localhost:3000/tutorials/${id}`);
        commit("removeTutorial", id)
    },
    async deleteAllTutorial({ commit }) {
        await axios.get("http://localhost:3000/tutorials");
        commit("removeAllTutorial")
    }
};

const mutations = {
    setTutorials: (state, tutorials) => (
        state.tutorials = tutorials
    ),
    setTutorial: (state, id) => (
        state.tutorials = state.tutorials.filter(tutorial => tutorial.id === id)
    ),
    setFilterTutorials: (state, title) => (
        state.tutorials = state.tutorials.filter(tutorial => tutorial.title === title)
    ),
    addNewTutorial: (state, tutorial) => state.tutorials.unshift(tutorial),
    updateTutorial: (state, id, tutorial) => (
        state.tutorials.filter(tutorial => tutorial.id !== id),
        state.tutorials.splice(tutorial => tutorial.id, 1),
        state.tutorials.unshift(tutorial)
    ),
    removeTutorial: (state, id) => (
        state.tutorials.filter(tutorial => tutorial.id !== id),
        state.tutorials.splice(tutorial => tutorial.id, 1)
    ),
    removeAllTutorial: (state) => (
        state.tutorials = []
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}