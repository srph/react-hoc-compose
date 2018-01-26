import React from 'react'
import {mount} from 'enzyme'
import Compose from '../'

const Component = (props) => <div {...props} />

const HOC = (Component) => {
  return class HOCComponent extends React.Component {
    render() {
      return <Component>Pogi</Component>
    }
  }
}

test.only('should apply hoc', () => {
  const node = mount(<Compose hoc={hoc} component={Component} />)
  expect(node.text()).toEqual('Pogi')
})

test('should pass all relevant props')
