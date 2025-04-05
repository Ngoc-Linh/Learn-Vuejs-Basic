<script setup>
import { reactive, ref } from 'vue'
const todo = ref("");
const todoState = reactive({
    todo: '',
    invalid: null,
    errMessage: ''
})
const emit = defineEmits(["create-todo"]);
const createTodo  = () => {
    todoState.invalid = null
    if(todoState.todo !== ''){
        emit("create-todo", todoState.todo);
        todoState.todo = '';
        return;
    }
    todoState.invalid = true;
    todoState.errMessage = 'Task value not empty';
};
</script>
<template>
    <div class="todo-create">
        <div class="container">
            <div class="todo-create-inner" :class="{'input-error': todoState.invalid}">
                <input type="text" v-model="todoState.todo" placeholder="Add a new task" />
                <button @click="createTodo()">Add</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.todo-create {
    padding: 1rem 0;
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .todo-create-inner{
        display: flex;
        &.input-error {
            input {
                border-color: red;
            }
        }
        input {
            flex: 1;
            padding: 1rem;
            border: 1px solid #e9ecef;
            border-radius: 0.25rem;
            margin-right: 0.5rem;
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
        }
    }
    .error-message {
        color: red;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
}
</style>