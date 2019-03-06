<template lang="pug">
  .todo
    TodoForm(@submit="")
    TodoList(:items="items")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

import { Todo as TodoType } from '@/types/todo'

/**
 * TODO本体
 */
@Component({
  components: { TodoForm, TodoList }
})
export default class Todo extends Vue {
  // -- [ Properties ] --------------------------------------------------------
  items: TodoType[] = []

  // -- [ Methods ] -----------------------------------------------------------
  /**
   * 初期化処理
   */
  created(): void {
    this.items = [
      new TodoType('todoのひとつめ', false),
      new TodoType('todoの二つ目', false)
    ]
  }

  /**
   * items配列に新しいTodoを追加する
   */
  private appendNewTodo(todo: TodoType): void {
    this.items.push(todo)
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
