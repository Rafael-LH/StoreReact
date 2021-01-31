import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import { ContentForm } from './styles'

const FormComponent = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: ''
  })
  const { user, userUpdate } = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    userUpdate(form)
    setForm({ name: '', lastName: '' })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <ContentForm>
      <h1>{user.name} {user.lastName}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} placeholder='Name' onChange={handleChange} />
        <input type="text" name='lastName' value={form.lastName} placeholder='Last Name' onChange={handleChange} />
        <button type='submit'>Save</button>
      </form>
    </ContentForm>
  )
}
const Form = React.memo(FormComponent)
export default Form