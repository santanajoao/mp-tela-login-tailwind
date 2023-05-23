import CustomLink from '@/components/CustomLink'
import { render, screen  } from '@testing-library/react'

it('should display an ancor with the children text', () => {
  const text = 'Teste'

  render(<CustomLink href="/" >{text}</CustomLink>)

  screen.getByRole('link', { name: text })
})
