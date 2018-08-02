import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'My First Paragraph!',
              },
            ],
          },
        ],
      },
    ],
  },
});

export default class TextEditor extends Component {
  state = {
    value: initialValue,
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (e, change) => {

    if(!e.ctrlKey){
      console.log(e.key);
      return;
    }
    e.preventDefault();

    switch (e.key) {
      case 'b': {
        change.addMark('bold');
        return true;
      }
    }
  }

  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  };
};
