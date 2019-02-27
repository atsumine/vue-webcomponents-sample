<template lang="pug">
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * TodoItemの集約。タスクのリスト表示用コンポーネント
 */
@Component
export default class TodoList extends Vue {
  @Prop({ type: Array, default: [] }) items!: object[] // Todoリストの一覧
}
</script>

<style lang="stylus" scoped>

</style>
