<template>
  <div class="Home">
    <div v-for="task in tasks" :key="task.id">
      <h4>
        <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  data: () => {
    return {
      tasks:[] as Task [],
    }
  },
  components: {
  },
  methods:{
    ...mapGetters(['getAllTasks']),
  },
  mounted(){
    this.tasks=this.getAllTasks();
  }
});
</script>
