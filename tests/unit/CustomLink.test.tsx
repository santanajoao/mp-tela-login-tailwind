import CustomLink from '@/components/CustomLink'
import { render, screen  } from '@testing-library/react'

it('should display an ancor with the children text', () => {
  render(<CustomLink href="/" >Teste</CustomLink>)

  screen.getByRole('link', { name: 'Teste' })
})
