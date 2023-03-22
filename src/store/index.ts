import { createStore } from 'vuex';
import { Task } from '@/types/storeType';

export default createStore({
  state: {
    tasks: [] as Task[],
  },
  getters: {
    getAllTasks(){
      return this.tasks
    }
  },
  mutations: {
    addTask(state, task : Task){
      state.tasks.push(task);

      console.log(state.tasks);
    }
  },
  actions: {
    getTaskById({ dispatch, commit}, id:number): Task {
      const task = this.state.tasks.find((task:Task)=>task.id===id);
      return typeof task !== 'undefined'? task as Task:{} as Task;
    }
  },
  modules: {
  }
})
