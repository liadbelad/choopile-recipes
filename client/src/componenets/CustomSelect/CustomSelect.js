import React, { useCallback } from "react"
import Select from "react-select"

const CustomSelect = ({ onChange, options, value, className, placeholder }) => {
  const defaultValue = useCallback((options, { value }) => {
    if (!value) return ""
    return options ? options.find((option) => option.value === value) : ""
  }, [])

  return (
    <Select
      className={className && className}
      value={value && defaultValue(options, value)}
      options={options}
      onChange={(value) => onChange(value)}
      placeholder={placeholder}
    />
  )
}

export default CustomSelect
