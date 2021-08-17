import { App } from '../src/App';
describe('App run test', () => {
  it('should be return', () => {
    const user = {
      name: "Djepeno",
      username: "christopher",
      email: "djepeno.c@gmail.com"
    }
    expect(App.main()).toEqual(user)
  })
})
