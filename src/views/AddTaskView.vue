<template>
    <h1>Создание задачи</h1>
    <form>
        <div class="form_element">
            <input placeholder="Название задачи" /> 
        </div>
        <div class="form_element">
            <textarea placeholder="Описание задачи">

            </textarea>
        </div>
        <div class="form_element">
            <button type="button">Создать</button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddTaskView",
})
</script>

<style scoped>
.form_element {
    margin: 10px 0;
}
</style>