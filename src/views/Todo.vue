<template lang="pug">
  .todo
    TodoForm
    TodoList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

/**
 * TODO本体
 */
@Component({
  components: { TodoForm, TodoList }
})
export default class Todo extends Vue {

}
</script>

<style lang="stylus" scoped>
.todo
  background #fff
  margin 130px 0 40px 0
  position relative
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)
</style>
