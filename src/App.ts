import { User } from './classes/Figure';
export class App {
  static main() {
    const u1 = new User('Djepeno','christopher','djepeno.c@gmail.com')

    const u2 = u1.clone()

    return u2
  }

}