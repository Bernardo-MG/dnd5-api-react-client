import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import ButtonInput from 'common/containers/ButtonInput';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

configure({ adapter: new Adapter() });

function setup() {
   const props = {
      id: 'id',
      label: 'label',
      buttonLabel: 'buttonLabel',
      onClick: jest.fn()
   }

   const wrapper = shallow(<ButtonInput {...props} />)

   return {
      props,
      wrapper
   }
}

describe('<ButtonInput />', () => {
   it('ignores click on empty text', () => {
      const { wrapper, props } = setup();
      const textField = wrapper.find(TextField);
      const button = wrapper.find(Button);

      textField.props().onChange({ target: { value: '' } })
      button.props().onClick()
      expect(props.onClick.mock.calls.length).toBe(0)
   }),

   it('handles click when there is a value', () => {
      const { wrapper, props } = setup();
      const textField = wrapper.find(TextField);
      const button = wrapper.find(Button);

      textField.props().onChange({ target: { value: 'abc' } })
      button.props().onClick()
      expect(props.onClick.mock.calls.length).toBe(1)
   })
})
