<template lang="pug">
  .todo-form
    input(type="text" autofocus v-model="formText" @keyup.enter="submitNewTodo()" placeholder="今日は何をしますか？")
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { Todo } from '@/types/todo'

/**
 * 新しいTODOを登録するためのフォーム
 */
@Component
export default class TodoForm extends Vue {
  // -- [ Properties ] --------------------------------------------------------
  private formText: string = ''

  // -- [ Methods ] -----------------------------------------------------------
  /**
   * 新しいTodoオブジェクトを生成しemitする
   * 値が空の場合にはemitしない
   */
  submitNewTodo(): Todo | void {
    const value = this.formText.length && this.formText.trim()
    if (value) {
      this.formText = ''
      this.$emit('submit', new Todo(value, false))
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-form
  input
    padding 16px 16px 16px 60px
    border none
    background rgba(0, 0, 0, 0.003)
    box-shadow inset 0 -2px 1px rgba(0,0,0,0.03)
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    box-sizing border-box
    -webkit-font-smoothing antialiased
</style>
