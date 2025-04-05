<script setup>
import { ref,computed  } from 'vue';
import { Icon } from "@iconify/vue";
import TodoCreate from '../components/TodoCreate.vue';
import TodoItem from '@/components/TodoItem.vue';
const todoList = ref([]);
const createTodo = (todo) => {
  todoList.value.push({
        id: todoList.value.length + 1,
        todo,
        isCompleted: false,
        isEditing: null
    });
    setTodoListLocalStorage();
};
const todosCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted);
});
const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
  if (savedTodoList) {
    todoList.value = savedTodoList;
  }
};

// Fetch Todo's on page load
fetchTodoList();

const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};
const toggleEditTodo = (todoPos) => {
  todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing;
  setTodoListLocalStorage();
};

const updateTodo = (todoVal, todoPos) => {
  todoList.value[todoPos].todo = todoVal;
  setTodoListLocalStorage();
};

const toggleTodoComplete = (todoPos) => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted;
  setTodoListLocalStorage();
};

const deleteTodo = (todo) => {
  todoList.value = todoList.value.filter(
    (todoFilter) => todoFilter.id !== todo.id
  );
  setTodoListLocalStorage();
};
</script>

<template>
  <main>
    <TodoCreate @createTodo="createTodo" />
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :index="index"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @toggle-complete="toggleTodoComplete"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no task's to complete! Add one!</span>
    </p>
    <p v-if="todosCompleted && todoList.length > 0" class="todos-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all your task!</span>
    </p>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>