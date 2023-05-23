import { render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginForm from '@/components/LoginForm'

describe('LoginForm', () => {
  it('should display the signin button', () => {
    render(<LoginForm />)
    
    screen.getByRole('button', { name: /Entrar/i })
  })

  describe('should display the fields', () => {
    it('email input and label', () => {
      render(<LoginForm />)
    
      const input = screen.getByLabelText(/Email/i)
    
      expect(input).toHaveAttribute('type', 'email')
    })
    
    it('password input and label', () => {
      render(<LoginForm />)
    
      const input = screen.getByLabelText(/Senha/i)
    
      expect(input).toHaveAttribute('type', 'password')
    })
  })

  describe('should display the ancors', () => {
    it('to recover password', () => {
      render(<LoginForm />)
      
      const link = screen.getByRole('link', { name: /Esqueci minha senha/i })

      expect(link).toHaveAttribute('href', '/forgot')
    })

    it('to create an account', () => {
      render(<LoginForm />)
      
      const link = screen.getByRole('link', { name: /Ainda não tenho uma conta/i })

      expect(link).toHaveAttribute('href', '/signin')
    })
  })
})
