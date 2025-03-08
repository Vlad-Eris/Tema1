<template>
    <div class="task-item">
      <input type="checkbox" v-model="task.completed" class="task-checkbox" />
      <span class="task-text">{{ task.text }}</span>
      <div class="task-actions">
        <button class="star-button" @click="toggleStar">
          <span v-if="task.starred" class="starred">★</span>
          <span v-else>☆</span>
        </button>
        <button class="delete-button" @click="deleteTask">🗑️</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTasksStore } from '../stores/tasks';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    task: {
      type: Object,
      required: true
    }
  });
  
  const tasksStore = useTasksStore();
  
  const toggleStar = () => {
    tasksStore.toggleTaskStar(props.task.id);
  };
  
  const deleteTask = () => {
    tasksStore.deleteTask(props.task.id);
  };
  </script>
  
  <style scoped>
  .task-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
  }
  
  .task-checkbox {
    margin-right: 10px;
  }
  
  .task-text {
    flex: 1;
    font-size: 16px;
    color: #555;
  }
  
  .task-actions {
    display: flex;
    gap: 8px;
  }
  
  .star-button, .delete-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #999;
    padding: 2px 5px;
  }
  
  .starred {
    color: orange;
  }
  
  .delete-button:hover {
    color: #ff3b30;
  }
  </style>