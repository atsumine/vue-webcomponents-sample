<template lang="pug">
  .todo
    TodoForm(@submit="appendNewTodo($event)")
    .todo-list
      TodoItem(v-for="todo in todos", :todo="todo", :key="todo.id", @remove="removeTodo($event)")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TodoForm from '@/components/TodoForm.vue'
import TodoItem from '@/components/TodoItem.vue'


import { Todo as TodoType } from '@/types/todo'

/**
 * TODO本体
 */
@Component({
  components: { TodoForm, TodoItem }
})
export default class Todo extends Vue {
  // -- [ Properties ] --------------------------------------------------------
  todos: TodoType[] = []

  // -- [ Methods ] -----------------------------------------------------------
  /**
   * 初期化処理
   */
  created(): void {
    this.todos = [
      new TodoType('todoのひとつめ', false),
      new TodoType('todoの二つ目', false)
    ]
  }

  /**
   * items配列に新しいTodoを追加する
   */
  appendNewTodo(todo: TodoType): void {
    this.todos = this.todos.concat(todo)
  }
  /**
   * idで指定したtodoを削除する
   * NOTE: idが数値ではなく文字列である点に注意
   */
  removeTodo(id: string) : void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
</script>

<style lang="stylus" scoped>
.todo
  background #fff
  margin     130px 0 40px 0
  position   relative
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)
</style>
