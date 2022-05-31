import { createStore } from 'vuex'

export default createStore({
  //* Estado: es todo lo que está pasando en la aplicación
  state: {
    // información que se muestra y se maneja: variables, movimiento de información, etc
    counter: 0
  },
  getters: {
    // para entrar a la información del estado
    cuadrado(state){
      return state.counter * state.counter;
    }
  },
  mutations: {
    // las cosas que vamos a utilizar para cambiar el estado
    // se utilizan desde aquí sin hacer importaciones
    subirC(state, random){
      state.counter += random;
    },
    bajarC(state, random){
      state.counter -= random;
    }
  },
  actions: {
    // son como las mutaciones, pero si podemos tener funciones asíncronas
    // se pueden importar en algún componente
    async subirCapi({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirC",results)
    },
    async bajarCapi({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarC",results)
    },
  },
  modules: {
  }
})
