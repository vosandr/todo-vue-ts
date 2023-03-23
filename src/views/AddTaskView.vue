<template>
    <h1>Создание задачи</h1>
    <form>
        <div class="form_element">
            <input v-model="taskName" placeholder="Название задачи" /> 
        </div>
        <div class="form_element">
            <textarea v-model="taskDescription" placeholder="Описание задачи">

            </textarea>
        </div>
        <div class="form_element" @click="onSubmit">
            <button type="button">Создать</button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import { Task } from '@/types/storeType';

export default defineComponent({
    name: "AddTaskView",
    data: ()=>{
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
            this.addTask(newTask)
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