import React from 'react'
import {mount} from 'enzyme'
import Compose from '../'

const Component = (props) => <div {...props} />

test('should apply hoc', () => {
  const HOC = (Component) => {
    class HOCComponent extends React.Component {
      render() {
        const {children, ...props} = this.props
        return <Component {...props}>Pogi</Component>
      }
    }

    return HOCComponent
  }
  const node = mount(<Compose hoc={HOC} component={Component} />)
  expect(node.text()).toEqual('Pogi')
})

test('should pass all relevant props', () => {
  const HOC = (Component) => {
    class HOCComponent extends React.Component {
      render() {
        return <Component {...this.props} />
      }
    }

    return HOCComponent
  }
  const node = mount(<Compose pogi='true' hoc={HOC} component={Component} />)
  expect(node.find('div').prop('pogi')).toEqual('true')
  expect(node.find('div').prop('hoc')).toBeUndefined()
  expect(node.find('div').prop('component')).toBeUndefined()
})
