'use babel';

import JgReactView from './jg-react-view';
import { CompositeDisposable } from 'atom';

export default {

  jgReactView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.jgReactView = new JgReactView(state.jgReactViewState);
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.jgReactView.getElement(),
    //   visible: false
    // });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'jg-react:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    // this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.jgReactView.destroy();
  },

  serialize() {
    // return {
    //   jgReactViewState: this.jgReactView.serialize()
    // };
  },

  toggle() {
  }

};
