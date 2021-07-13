import React, { useCallback } from "react"
import Select from "react-select"

const CustomSelect = ({
  onChange,
  options,
  value,
  name,
  className,
  placeholder,
}) => {
  const defaultValue = useCallback((options, selectedOption) => {
    // console.log(selectedOption)
    if (!selectedOption.value) {
      return ""
    }

    return options
      ? options.find((option) => option.value === selectedOption.value)
      : ""
  }, [])

  return (
    <Select
      className={className && className}
      name={name}
      value={value && defaultValue(options, value)}
      options={options}
      onChange={(selectedOption) => onChange(selectedOption)}
      placeholder={placeholder}
    />
  )
}

export default CustomSelect
