import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        title: "Ir ao mercado",
        description: 'Compra pão e leite e café',
        completed: false
      }, {
        id: 1,
        title: "Ir ao mercado",
        description: 'Compra pão e leite e café',
        completed: false
      }
    ],
    selectedTask: {
      id: null,
      title: null,
      description: null,
      completed: false
    }
  },
  getters: {
    populateInputs(){
      
    }
  },
  mutations: {
    addTask(state, task) {
      if (task.title.trim() == "" || task.description.trim() == "") return;
      state.tasks.push(task);
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    editTask(state, task) {
      state.selectedTask = task
    }
  },
  actions: {
   
  },
  modules: {
  }
})
