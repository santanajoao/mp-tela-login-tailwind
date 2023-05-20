'use client'

import LabelAndInput from './LabelAndInput'
import CustomLink from './CustomLink'
import GradientButton from './GradientButton'
import { BaseSyntheticEvent, useState } from 'react'
import { validateEmail, validatePassword } from '@/utils/validations'

type LoginFormFields = {
  email: string,
  password: string,
}

export default function LoginForm() {
  const [errors, setErrors] = useState({ email: '', password: '' })

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries()) as LoginFormFields

    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 flex flex-col">
      <div className="space-y-6">
        <LabelAndInput
          id="email"
          label="Email"
          type="email"
          name="email"
          error={errors.email}
        />

        <div className="flex flex-col">
          <LabelAndInput
            id="password"
            label="Senha"
            type="password"
            name="password"
            error={errors.password}
          />

          <CustomLink href="/forgot" className="mt-5 self-end">
            Esqueci minha senha
          </CustomLink>
        </div>
      </div>

      <GradientButton>Entrar</GradientButton>

      <CustomLink href="/signin" className="mt-8 self-center">
        Ainda não tenho uma conta
      </CustomLink>
    </form>
  )
}
