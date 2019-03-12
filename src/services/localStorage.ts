import { Todo } from '@/types/todo'

const STORAGE_KEY = 'webcomponent-todos-localstorage'

export const todoStorage = {
  fetch: () =>  {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}