'use babel';

import JgReactView from './jg-react-view';
import { CompositeDisposable } from 'atom';

export default {

  jgReactView: null,
  modalPanel: null,
  subscriptions: null,
  mounted: false,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'jg-react:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.jgReactView.destroy();
  },

  serialize() {},

  toggle() {
    if (this.mounted) {
      this.unmount();
    } else {
      this.mount();
    }
    this.mounted = !this.mounted;
  },

  mount() {
    this.jgReactView = new JgReactView();
  },

  unmount() {
    this.jgReactView.destroy();
    this.jgReactView = null;
  },
};
