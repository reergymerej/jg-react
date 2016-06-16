'use babel';

import React from 'react';
import ReactDOM from 'react-dom';

const Foo = (props) =>
  <div>
    <span>Hello</span>
  </div>
;


function testReact() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  ReactDOM.render(
    <Foo />,
    container
  );
}

export default class JgReactView {

  constructor(serializedState) {
    // Create root element
    // this.element = document.createElement('div');
    // this.element.classList.add('jg-react');

    // Create message element
    // const message = document.createElement('div');
    // message.textContent = 'The JgReact package is Alive! It\'s ALIVE!';
    // message.classList.add('message');
    // this.element.appendChild(message);

    testReact();
    console.log('did it work?');

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
}
