<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    Todo
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Todo from '@/views/Todo.vue'

@Component({
  components: { Todo },
})
export default class App extends Vue {}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  max-width 600px
  margin 0 auto
</style>
