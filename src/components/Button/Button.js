import React from 'react'
import { ButtonWrapper } from './Button.styles'
import PropTypes from 'prop-types'

export default function Button({ variant, children, ...restProps }) {
  return (
    <ButtonWrapper variant={variant} {...restProps}>
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
}

Button.defaultProps = {
  variant: null,
  children: null,
}
