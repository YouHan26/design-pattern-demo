class BasePerson {
  constructor(person) {
    this.person = person
  }

  getName() {
    return this.person.getName()
  }
}


class ChinesePerson extends BasePerson {
  getName() {
    return super.getName() + 'Chinese'
  }
}


class EnglishPerson extends BasePerson {
  getName() {
    return super.getName() + 'English'
  }
}


class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}


let person = new Person('Harry')
console.log(person.getName())
person = new ChinesePerson(person)
console.log(person.getName())
person = new EnglishPerson(person)
console.log(person.getName())
