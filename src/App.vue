<script setup></script>

<template>
  <div class="app-container">
    <HeadComponent />
    <div class="tasks-container">
      <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
      <AddNewTaskButton />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import HeadComponent from './components/HeadComponent.vue';
import TaskComponent from './components/TaskComponent.vue';
import AddNewTaskButton from './components/AddNewTaskButton.vue';
import { useTasksStore } from './stores/tasks';

const tasksStore = useTasksStore();
const tasks = computed(() => tasksStore.tasks);
</script>

<style>
@import './style.css';

.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.tasks-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
