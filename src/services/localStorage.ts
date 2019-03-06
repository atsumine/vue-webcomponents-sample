import { Todo } from '@/types/todo'

const STORAGE_KEY = 'webcomponent-todos-localstorage'

const todoStorage = {
  fetch: () =>  {
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}