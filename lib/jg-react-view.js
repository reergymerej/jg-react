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

export default class JgReactView {

  constructor(serializedState) {
    const container = document.createElement('div');

    // TODO: https://atom.io/docs/api/v1.8.0/Workspace#instance-addBottomPanel
    /**
    * Use a view registered via ViewRegistry::addViewProvider. See ViewRegistry::addViewProvider for more information.
    */
    atom.workspace.addBottomPanel({ item: container });

    ReactDOM.render(
      <FooContainer />,
      container
    );
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    // TODO: proper tear down
    // this.element.remove();
  }
}
