import React from 'react'
import { FormSearchStyle } from './styles'

const FormSearchComponent = ({ setDataList, data = [] }) => {
  const handleChange = (e) => {
    setDataList(data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <FormSearchStyle autoComplete="off" >
      <input type="text" name="search" id="search" placeholder='Search Character' onChange={handleChange} />
    </FormSearchStyle>
  )
}
const FormSearch = React.memo(FormSearchComponent, (oldProps, newProps) => {
  return oldProps.data.length > 0 && oldProps.data[0].id === newProps.data[0].id
})
export default FormSearch