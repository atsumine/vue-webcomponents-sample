<template lang="pug">
  .todo-list
    TodoItem(v-for="item in items", :item="item")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TodoItem from '@/components/TodoItem.vue'

import { Todo } from '@/types/todo'

/**
 * TodoItemの集約。タスクのリスト表示用コンポーネント
 */
@Component({
  components: { TodoItem }
})
export default class TodoList extends Vue {
  // -- [ properties ] --------------------------------------------------------
  @Prop({ type: Array, default: [] }) items!: Todo[] // Todoリストの一覧

  // -- [ Methods ] -----------------------------------------------------------
}
</script>

<style lang="stylus" scoped>

</style>
