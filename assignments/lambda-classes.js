// CODE here for your Lambda Classes

class Person { 
    constructor(attribute) {
      this.name = attribute.name;
      this.age = attribute.age;
      this.location = attribute.location
    }
  
    speak() {
      console.log(`Hello my name is ${this.name} I am from ${this.location}.`);
    }
  }

  class Instructor extends Person { 
    constructor(instructorAttr) {
      super(instructorAttr);
      this.specialty = instructorAttr.specialty;
      this.favLanguage = instructorAttr.favLanguage;
      this.catchPhrase = instructorAttr.catchPhrase
    }
  
    demo(subject) {
      console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
  }

  class Student extends Person {
      constructor(studentAttr) {
          super(studentAttr);
          this.previousBackground = studentAttr.previousBackground;
          this.className = studentAttr.className;
          this.favSubjects = studentAttr.favSubjects;
      }

      listsSubjects() {
          this.favSubjects.forEach(subject => console.log(`${subject} is one of my favorite subjects.`));
      }

      PRAssignment(subject) {
          console.log(`${student.name} has submitted a PR for ${subject}`)
      }

      sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
      }
  }

  class ProjectManagers extends Instructor {
      constructor(PMAttr) {
          super(PMAttr);
          this.gradClassName = PMAttr.gradClassName;
          this.favInstructor = PMAttr.favInstructor;
      }

      standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
      }

      debugsCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
      }
  }

  const evan = new Instructor({
    name: 'Evan',
    location: 'New York',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Life is a highway`
  });

  const robyn = new Student({
    name: 'Robyn',
    location: 'Los Angeles',
    age: 37,
    previousBackground: 'Accountant',
    className: 'WEB101',
    favSubjects: ['CSS', 'JavaScript', 'React']
  });

  const paul = new ProjectManagers({
    name: 'Paul',
    location: 'Los Angeles',
    age: 32,
    gradClassName: 'WEB101',
    favInstructor: 'Martin'
  });


  console.log(evan);
  console.log(evan.demo('JavaScript'));
  console.log(evan.grade(robyn, 'JavaScript'));
  console.log(robyn);