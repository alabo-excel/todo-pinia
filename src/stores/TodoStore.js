import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => {
        return {
            name: 'Alabo Excel',
            todos: [
                { id: 1, title: 'Get up from the bed', completed: true, inProgress: false },
                { id: 2, title: 'Go wash the dishes', completed: false, inProgress: false },
            ],
        }
    },
    getters: {
        completed() {
            return this.todos.filter(todo => todo.completed)
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        todoCompleted(id) {
            const todo = this.todos.find(todo => todo.id === id)
            todo.completed = !todo.completed
        }
    }
})