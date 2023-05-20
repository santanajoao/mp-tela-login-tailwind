export const validateEmail = (email: string): string => {
  if (!email) return 'O email é obrigatório'

  const emailRegex = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}\.[A-Za-z]{2,3}$/
  const valid = emailRegex.test(email)
  if (!valid) {
    return 'O email deve ser válido'
  }

  return ''
}

export const validatePassword = (password: string): string => {
  const PASSWORD_MIN_LENGTH = 8
  if (!password) return 'A senha é obrigatória'

  if (password.length < PASSWORD_MIN_LENGTH) {
    return `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres`
  }

  return ''
}
