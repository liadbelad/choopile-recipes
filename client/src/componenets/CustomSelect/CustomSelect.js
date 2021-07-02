import React, { useCallback } from "react"
import Select from "react-select"

const CustomSelect = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : ""
  }

  return (
    <Select
      value={defaultValue(options, value)}
      options={options}
      onChange={(value) => onChange(value)}
    />
  )
}

export default CustomSelect
