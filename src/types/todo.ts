
import shortid from 'shortid'

export class Todo {
  id:    string
  title: string  = ''
  done:  boolean = false

  constructor(title: string, done: boolean = false) {
    this.id    = shortid.generate()
    this.title = title
    this.done  = done
  }
}
