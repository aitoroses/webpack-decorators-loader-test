import {Decorator1, Decorator2} from './decorators';

@Decorator1
@Decorator2({module: "MY MODULE"})
class MyClass {
  constructor() {
    console.log("Instantiate my class");
  }
}

console.log(MyClass.annotations)
