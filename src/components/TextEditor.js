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
    value: '',
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Editor value={this.state.value} onChange="this.onChange" />
    );
  };
};
