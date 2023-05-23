import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import LoginForm from '@/components/LoginForm'

const submitBtnText = /Entrar/i
const smallPasswordErrorMessage = /A senha deve ter no mínimo 8 caracteres/i
const emailInputLabel = /Email/i
const passwordInputLabel = /Senha/i 

describe('LoginForm', () => {
  describe('should display error messages', () => {
    it('case submiting with empty fields', async () => {
      render(<LoginForm />)
  
      const button = screen.getByRole('button', { name: submitBtnText })
      await userEvent.click(button)
  
      screen.getByText(/O email é obrigatório/i)
      screen.getByText(/A senha é obrigatória/i)
    })
  
    it('case the password is smaller than 8', async () => {
      render(<LoginForm />)
  
      const passwordInput = screen.getByLabelText(passwordInputLabel)
      await userEvent.type(passwordInput, '1')
  
      const button = screen.getByRole('button', { name: submitBtnText })
      await userEvent.click(button)
  
      screen.getByText(smallPasswordErrorMessage)
    })

    it('case it s a invalid email', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(emailInputLabel)
      await userEvent.type(emailInput, 'a@e.i')

      const button = screen.getByRole('button', { name: submitBtnText })
      await userEvent.click(button)

      screen.getByText(/O email deve ser válido/i)
    })
  })

  describe('should not display error message', () => {
    it('case the password has 8 or more caracteres', async () => {
      render(<LoginForm />)
  
      const passwordInput = screen.getByLabelText(passwordInputLabel)
      await userEvent.type(passwordInput, '12345678')
  
      const button = screen.getByRole('button', { name: submitBtnText })
      await userEvent.click(button)
  
      const errorMessage = screen.queryByText(smallPasswordErrorMessage)
      expect(errorMessage).not.toBeInTheDocument()
    })

    it('case it\'s a valid email', async () => {
      render(<LoginForm />)
  
      const emailInput = screen.getByLabelText(emailInputLabel)
      await userEvent.type(emailInput, 'joao@email.com')
  
      const button = screen.getByRole('button', { name: submitBtnText })
      await userEvent.click(button)
  
      const errorMessage = screen.queryByText(/O email deve ser válido/i)
      expect(errorMessage).not.toBeInTheDocument()
    })
  })
})
