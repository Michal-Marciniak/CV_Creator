import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current_component: "step1_component",
    current_step: "step1",
    step1_complete: false,
    step2_complete: false,
    step3_complete: false,
    showEmail: false,
    showNumber: false,
    index: 0,
    user: {
      name: "",
      lastname: "",
      email: "",
      number: "",
      adress: "",
      jobs: [
        {
          position: "",
          period: {
            from: "",
            to: ""
          },
          description: ""
        }
      ]
    }
  },
  mutations: {
    Step1: state => {
      state.current_component = "step1_component";
      state.current_step = "step1";
    },
    Step1Complete: state => {
      state.step1_complete = true;
    },
    Step2: state => {
      state.current_component = "step2_component";
      state.current_step = "step2";
    },
    Step2Complete: state => {
      state.step2_complete = true;
    },
    Step3: state => {
      state.current_component = "step3_component";
      state.current_step = "step3";
    },
    Step3Complete: state => {
      state.step3_complete = true;
    },
    addAnotherJob: state => {
      state.index++;
    }
  },
  actions: {
    Step1: ({ commit }) => {
      commit("Step1");
    },
    Step1Complete: ({ commit }) => {
      commit("Step1Complete");
    },
    Step2: ({ commit }) => {
      commit("Step2");
    },
    Step2Complete: ({ commit }) => {
      commit("Step2Complete");
    },
    Step3: ({ commit }) => {
      commit("Step3");
    },
    Step3Complete: ({ commit }) => {
      commit("Step3Complete");
    },
    addAnotherJob: ({ commit }) => {
      commit("addAnotherJob");
    }
  }
});
