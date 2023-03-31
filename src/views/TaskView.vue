<template lang="pug">
h1 {{ task.name }}
    div {{ task.description }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Task } from '@/types/storeType';

export default defineComponent({
    name: 'TaskView',
    data: () => {
        return {
            task: {} as Task,
        }
    },
    computed: {
        id() {
        return this.$route.params.id;
        }
    },
    methods: {
        ...mapActions(['getTaskById']),
    },
    async mounted() {
        const task: Task = await this.getTaskById(this.id);

        this.task = task;
    }
})
</script>