export const state = () => ({
  list: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};

export const getters = {
  lists(state) {
    console.log(`getters state`, state);
    return state.list;
  }
};

export const actions = {
  addTodo({ commit }: { commit: Function }, e: Event) {
    let text = (<HTMLInputElement>e.target).value;
    commit("add", text);
    text = "";
  }
};
