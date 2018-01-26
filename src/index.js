import React, {cloneElement} from 'react'
import T from 'prop-types'

class Compose extends React.Component {
  applied = this.props.hoc(this.props.component)

  render() {
    const {hoc, component, ...props} = this.props
    const Applied = this.applied
    return <Applied {...props} />
  }
}

Compose.propTypes = {
  hoc: T.func.isRequired,
  component: T.oneOf([T.element, T.func])
}

export default Compose
