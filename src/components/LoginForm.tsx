import LabelAndInput from './LabelAndInput'
import CustomLink from './CustomLink'
import GradientButton from './GradientButton'

export default function LoginForm() {
  return (
    <form className="mt-14 flex flex-col">
      <div className="space-y-6">
        <LabelAndInput id="email" label="Email" type="email" />

        <div className="flex flex-col">
          <LabelAndInput id="password" label="Senha" type="password" />

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
