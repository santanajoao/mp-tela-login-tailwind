import CustomLink from '@/components/CustomLink'
import { render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('CustomLink', () => {
  it('should display an ancor with the children text', () => {
    const text = 'Teste'
  
    render(<CustomLink href="/" >{text}</CustomLink>)
  
    screen.getByRole('link', { name: text })
  })
  
  it('should have the correct href', () => {
    const href = '/teste'
  
    render(<CustomLink href={href} >Text</CustomLink>)
  
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', href)
  })
})
