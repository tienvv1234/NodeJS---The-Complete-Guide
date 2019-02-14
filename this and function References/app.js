class NameField {
  constructor(name) {
    const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector('button');
    this.names = ['tien', 'sfdsd', 'sdfsd'];
    this.currentName = 0;
    // btn.addEventListener('click', this.addName); will not work without bind funtion like this this.addName.bind(this)

    // btn.addEventListener('click', function(){
    //   // this function will call immediately when user click but return an error this.addName is not a function
    //   this.addName();
    // });

    btn.addEventListener('click', () => {
      // this function will work (the arrow function keep the context of this or the reference of this)
      // so the arrow function will resolve the this keywork.
      this.addName();
    });
  }

  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}
const gen = new NameGenerator();
