<template>
    <div class="add-new-container">
      <button class="add-new-button" @click="openNewTaskForm">
        + Add New Task
      </button>
      <div v-if="showForm" class="new-task-form">
        <input 
          type="text" 
          v-model="newTaskText" 
          placeholder="Enter task description" 
          @keyup.enter="addTask"
          ref="taskInput"
        />
        <div class="form-actions">
          <button class="cancel-button" @click="cancelAdd">Cancel</button>
          <button class="add-button" @click="addTask" :disabled="!newTaskText.trim()">Add</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, nextTick } from 'vue';
  import { useTasksStore } from '../stores/tasks';
  
  const showForm = ref(false);
  const newTaskText = ref('');
  const taskInput = ref(null);
  const tasksStore = useTasksStore();
  
  const openNewTaskForm = () => {
    showForm.value = true;
    nextTick(() => {
      taskInput.value.focus();
    });
  };
  
  const addTask = () => {
    if (newTaskText.value.trim()) {
      tasksStore.addTask(newTaskText.value.trim());
      newTaskText.value = '';
      showForm.value = false;
    }
  };
  
  const cancelAdd = () => {
    newTaskText.value = '';
    showForm.value = false;
  };
  </script>
  
  <style scoped>
  .add-new-container {
    margin-top: 20px;
  }
  
  .add-new-button {
    background-color: #f5f0ff;
    color: #6b46c1;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    text-align: center;
  }
  
  .new-task-form {
    margin-top: 10px;
  }
  
  .new-task-form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .cancel-button, .add-button {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .cancel-button {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    color: #555;
  }
  
  .add-button {
    background-color: #6b46c1;
    border: none;
    color: white;
  }
  
  .add-button:disabled {
    background-color: #a894d8;
    cursor: not-allowed;
  }
  </style>
  