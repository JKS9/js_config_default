import './index.scss';

class HelloWorld {
  constructor(param) {
    this.param = param;
  }

  speack(param = this.param) {
    const add = document.querySelector('#app');

    const addH1 = document.createElement('h1');
    const addH2 = document.createElement('h2');

    addH1.textContent = param;
    add.appendChild(addH1);

    addH2.textContent = param;
    add.appendChild(addH2);
  }
}

const helloWorld = new HelloWorld();

helloWorld.speack('Hello world');
helloWorld.speack('bonjour le monde');
