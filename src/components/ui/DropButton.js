import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const DropButton = props => {
  return (
    <DropdownButton
      id={props.id}
      title={props.title}
      onSelect={(ek, e) => props.onSelectHandler(ek, e)}>
      {props.items.map((val, _i) => {
        return (
          <Dropdown.Item key={val.name} as='button' value={val.value}>{val.name}</Dropdown.Item>
        )
      })}
    </DropdownButton>
  )
}

DropButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  ),
  onSelectHandler: PropTypes.func
}

export default DropButton
