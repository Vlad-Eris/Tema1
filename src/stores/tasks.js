import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, text: 'Add images to the product gallery', completed: false, starred: true },
      { id: 2, text: 'Update user profile page', completed: false, starred: true },
      { id: 3, text: 'Support tickets list doesn\'t support commas', completed: false, starred: false },
      { id: 4, text: 'Changing title text on single locations pages', completed: false, starred: false },
      { id: 5, text: 'Registration Confirmation! Email is missing some information', completed: false, starred: true },
      { id: 6, text: 'Login page not redirecting wrong', completed: false, starred: false },
      { id: 7, text: 'Custom Field for Registration', completed: false, starred: false },
    ]
  }),
  
  actions: {
    addTask(text) {
      const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
      this.tasks.push({
        id: newId,
        text: text,
        completed: false,
        starred: false
      });
    },
    
    deleteTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    
    toggleTaskStar(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.starred = !task.starred;
      }
    },
    
    toggleTaskCompleted(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});
