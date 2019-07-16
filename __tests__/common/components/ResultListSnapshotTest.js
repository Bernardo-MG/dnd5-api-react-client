import React from 'react'
import renderer from 'react-test-renderer';

import ResultList from 'common/components/ResultList';

describe('<ResultList />', () => {
   it('renders correctly', () => {
      const tree = renderer
         .create(<ResultList
               source={ ['a', 'b', 'c'] } />)
         .toJSON();
      expect(tree).toMatchSnapshot();
   })
});
