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

</style>
