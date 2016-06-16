'use babel';

import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const Foo = (props) =>
  <div className='padded'>
    <span className='icon icon-clock text-info'>{props.text}</span>
  </div>
;

Foo.propTypes = {
  text: PropTypes.string.isRequired,
};

function formatDate(ms) {
  return moment(ms).format('dddd, MMMM Do YYYY, HH:mm:ss');
}

class FooContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: formatDate(Date.now()),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        text: formatDate(Date.now()),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
    this.panel = atom.workspace.addBottomPanel({ item: container });

    ReactDOM.render(
      <FooContainer />,
      container
    );
  }

  // Tear down any state and detach
  destroy() {
    ReactDOM.unmountComponentAtNode(this.panel.item);
    this.panel.destroy();
  }
}
