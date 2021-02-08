import { useState } from "react";
import { useHistory } from 'react-router-dom'

const useFormBuy = (addToBuyer) => {
  const history = useHistory()
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    address: '',
    apto: '',
    city: '',
    country: '',
    state: '',
    cp: '',
    phone: '',
  })
  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addToBuyer(form)
    history.push('/checkout/payment')
  }
  return { handleChange, handleSubmit }
}
export default useFormBuy