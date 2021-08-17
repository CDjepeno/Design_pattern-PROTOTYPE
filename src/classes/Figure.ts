export class User {
  name: string
  username: string
  email: string

  constructor(n:string, u:string, e:string) {
    this.name = n
    this.username = u
    this.email = e
  }

  

  clone(): this {
    const clone = Object.assign({}, this)
    return clone
  }

}