<template lang="pug">
  .todo-item(@mouseover="hovered = true", @mouseleave="hovered = false")
    input.toggle(type="checkbox", v-model="todo.done", @change="")
    label.title(v-if="!editorActive", :class="{ done: todo.done }", @dblclick="editorActive = true")
      | {{ todo.title }}
    input(v-if="editorActive", ref="editor", type="text", v-model="todo.title", @blur="editorActive = false")
    button.destroy(:class="{ active: hovered }", @click="removeSelf") ×
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Todo } from '@/types/todo'

/**
 * TODOリストのタスクカード
 */
@Component
export default class TodoItem extends Vue {
  // -- [ Properties ] --------------------------------------------------------
  $refs!: {
    editor: HTMLFormElement
  }

  @Prop({ required: true }) todo!: Todo
  private hovered:      boolean = false // ホバーされているかどうか
  private editorActive: boolean = false

  // -- [ Methods ] -----------------------------------------------------------
  /**
   * removeイベントを削除対象のtodoのidとともにemitする
   */
  private removeSelf(): void {
    this.$emit('remove', this.todo.id)
  }

  /**
   * 編集が有効になった際に、input要素に対してfocusをあてる
   */
  @Watch('editorActive') private setFocusToInput(value: boolean): void {
    if (value) this.$nextTick().then(() => this.$refs.editor.focus())
  }
}
</script>

<style lang="stylus" scoped>
.todo-item
  display       flex
  align-items   center
  font-size     24px
  min-height    2.6em
  border-bottom 1px solid #ededed

  .toggle
    flex 0 0 auto
    text-align center
    width      40px
    height     40px
    margin     0 8px
    border     none
  label, input
    flex 1 0 auto
    box-sizing  border-box
    text-align  left
    word-break  break-all
    display     block
    line-height 1.2em
    transition  color 0.4s
    color       #4d4d4d
    border      none

    &.done
      text-decoration line-through
      color           #d9d9d9

  button.destroy
    flex 0 0 auto
    width         40px
    height        40px
    font-size     30px
    transition    color .1s ease-out
    border        none
    appearance    none
    color            transparent
    background-color transparent

    &.active
      color #cc9a9a
</style>
