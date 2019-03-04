
export class Todo {
  title: string = ''
  done:  boolean = false

  constructor(title: string, done: boolean = false) {
    this.title = title
    this.done  = done
  }
}
