import React from 'react'
import renderer from 'react-test-renderer';

import ButtonTextField from 'common/containers/ButtonTextField';

describe('<ButtonTextField />', () => {
   it('renders correctly', () => {
      const tree = renderer
         .create(<ButtonTextField
               id='testButtonTextField'
               label='label'
               buttonLabel='button label'
               onClick={ () => 'action' } />)
         .toJSON();
      expect(tree).toMatchSnapshot();
   })
});
