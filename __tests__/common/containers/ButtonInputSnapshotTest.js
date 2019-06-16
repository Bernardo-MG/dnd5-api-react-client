import React from 'react'
import renderer from 'react-test-renderer';

import ButtonInput from 'common/containers/ButtonInput';

describe('<ButtonInput />', () => {
   it('renders correctly', () => {
      const tree = renderer
         .create(<ButtonInput
               id='testButtonInput'
               label='label'
               buttonLabel='button label'
               action={ () => 'action' } />)
         .toJSON();
      expect(tree).toMatchSnapshot();
   })
});
