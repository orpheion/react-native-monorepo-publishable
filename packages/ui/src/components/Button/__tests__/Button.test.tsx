import 'react-native';
import React from 'react';
import {Button} from '@/components/Button';

// Note: import explicitly to use the types shipped with jest.
import {expect, it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders the correct title', () => {
  const title = 'Submit';

  const tree = renderer.create(<Button title={title} />).toJSON();

  expect(tree).toMatchObject({
    children: [
      {
        type: 'Text',
        children: [title],
      },
    ],
  });
});
