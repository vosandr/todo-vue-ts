<template lang="pug">
h1 Создание задачи
    form
        .form_element
            input(v-model="taskName" placeholder="Название задачи")
        .form_element
            textarea(v-model="taskDescription" placeholder="Описание задачи")
        .form_element(@click="onSubmit")
        button(type="button") Создать
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import { Task } from '@/types/storeType';

export default defineComponent({
    name: "AddTaskView",
    data: () => {
        return{
            taskName:'',
            taskDescription:''
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        onSubmit(){
            const id=(new Date()).getTime();
            const newTask : Task = {
                id: id,
                name: this.taskName,
                description: this.taskDescription
            }
            this.addTask(newTask);

            this.$router.push(`/task/${id}`)
        }
    }
})
</script>

<style scoped>
.form_element {
    margin: 10px 0;
}
</style>