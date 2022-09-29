import { useEffect, useState } from 'react'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)

  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    callback(input)
  }
  return { input, handleInputChange, handleSubmit }
}
export default useForm