import GradientButton from '@/components/GradientButton'
import { render, screen  } from '@testing-library/react'

it('should display the children text in a button', () => {
  const text = 'Teste'

  render(<GradientButton>{text}</GradientButton>)
  
  screen.getByRole('button', { name: text })
})
