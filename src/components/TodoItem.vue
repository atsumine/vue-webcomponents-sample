<template lang="pug">
  .todo-item
    | {{ item.title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Todo } from '@/types/todo'

/**
 * TODOリストのタスクカード
 */
@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) item!: Todo
}
</script>

<style lang="stylus" scoped>
.todo-item
  position      relative
  font-size     24px
  border-bottom 1px solid #ededed
</style>
