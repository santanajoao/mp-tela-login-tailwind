import PageTitle from '@/components/PageTitle'
import { render, screen  } from '@testing-library/react'

it('should display the children text in a h1', () => {
  const text = 'Teste'

  render(<PageTitle>{text}</PageTitle>)
  
  screen.getByRole('heading', { level: 1 })
})
