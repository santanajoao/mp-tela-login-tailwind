import LabelAndInput from '@/components/LabelAndInput'
import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('LabelAndInput', () => {
  it('should render a label and a input', () => {
    render(<LabelAndInput id="test" label="test" name="test" type="text" />)

    screen.getByLabelText('test')
  })

  it('should render the right label text passed by props', () => {
    const label = "test label"
    
    render(<LabelAndInput id="test" label={label} name="test" type="text" />)

    screen.getByLabelText(label)
  })

  it('should display an error message when the prop is passed', () => {
    const errorMessage = 'An error message'

    render(
      <LabelAndInput
        id="test"
        label="test"
        name="test"
        type="text"
        error={errorMessage}
      />
    )
    
    screen.getByText(errorMessage)
  })

  it('should be possible to write on input', async () => {
    render(<LabelAndInput id="test" label="test" name="test" type="text" />)
    const user = userEvent.setup()

    const input = screen.getByRole('textbox')

    const text = 'text i write'
    await user.type(input, text)
    expect(input).toHaveValue(text)
  })

  it('should be possible to focus on input clicking on label', async () => {
    const labelText = 'label text'
    render(
      <LabelAndInput id="test" label={labelText} name="test" type="text" />
    )
    const user = userEvent.setup()
    
    const label = screen.getByText(labelText)
    await user.click(label)

    const input = screen.getByLabelText(labelText)
    expect(input).toHaveFocus()
  })

  describe('should render the right input type passed by props', () => {
    it('case text', () => {
      const type = 'text'

      render(<LabelAndInput id="test" label="test" name="test" type={type} />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveProperty('type', type)
    })

    it('case email', () => {
      const type = 'email'

      render(<LabelAndInput id="test" label="test" name="test" type={type} />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveProperty('type', type)
    })

    it('case password', () => {
      const type = 'password'

      render(<LabelAndInput id="test" label="test" name="test" type={type} />)

      const input = screen.getByLabelText('test')
      expect(input).toHaveProperty('type', type)
    })
  })
})
