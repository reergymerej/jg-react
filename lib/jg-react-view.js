'use babel';

import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

const Foo = (props) =>
  <div>
    <span>{props.text}</span>
  </div>
;

Foo.propTypes = {
  text: PropTypes.string.isRequired,
};

class FooContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: Date.now(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        text: Date.now(),
      });
    }, 1000);
  }

  render() {
    return (
      <Foo text={'' + this.state.text} />
    );
  }
}


function testReact() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  ReactDOM.render(
    <FooContainer />,
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
