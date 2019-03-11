<template lang="pug">
  .todo-item
    input.toggle(type="checkbox", v-model="todo.done", @change="")
    label.title(:class="{ done: todo.done }") {{ todo.title }}

</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Todo } from '@/types/todo'

/**
 * TODOリストのタスクカード
 */
@Component
export default class TodoItem extends Vue {
  // -- [ Properties ] --------------------------------------------------------
  @Prop({ required: true }) todo!: Todo

  // -- [ Methods ] -----------------------------------------------------------
  // @Emit('update') private toggleDone() {
  //   return this.todo
  // }
}
</script>

<style lang="stylus" scoped>
.todo-item
  position      relative
  font-size     24px
  border-bottom 1px solid #ededed

  .toggle
    position absolute
    top    0
    left   10px
    bottom 0
    margin auto 0
    text-align center
    width      40px
    height     40px
    border none
  label
    text-align  left
    word-break  break-all
    padding     15px 15px 15px 60px
    display     block
    line-height 1.2
    transition  color 0.4s
    color #4d4d4d

    &.done
      text-decoration  line-through
      color #d9d9d9
</style>
