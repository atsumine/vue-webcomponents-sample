<template lang="pug">
  .todo-form
    input(type="text" autofocus v-model="formText" @keytap.enter="" placeholder="今日は何をしますか？")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
   */
  private submitNewTodo() {

  }
}
</script>

<style lang="stylus" scoped>

</style>
