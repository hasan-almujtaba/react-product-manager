import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '~/routes/auth'
import Alert from '../Base/Alert'
import Button from '../Base/Button'
import Input from '../Base/Input'

type FormData = {
  email: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const auth = useAuth()

  const [error, setError] = useState('')

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data

    if (email !== 'user@mail.com') {
      setError('Please check your email')
      return
    }

    if (password !== 'password') {
      setError('Please check your password')
      return
    }

    auth?.login({
      authenticated: true,
      email,
      password,
    })
  })

  return (
    <div className="w-[400px] rounded-xl bg-white p-3 shadow-lg">
      <h1 className="mb-5 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-center text-2xl font-bold text-transparent">
        Please login to continue
      </h1>

      {error !== '' ? <Alert type="error">{error}</Alert> : null}

      <form
        onSubmit={onSubmit}
        className="space-y-4"
      >
        <Input
          placeholder="Input your email"
          type="email"
          name="email"
          register={register}
        />

        <Input
          placeholder="Input your password"
          type="password"
          name="password"
          register={register}
        />

        <div className="text-right">
          <Button
            block
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
