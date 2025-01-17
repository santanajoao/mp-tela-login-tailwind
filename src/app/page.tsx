import PageTitle from '@/components/PageTitle'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <main className="grid min-h-screen bg-black md:grid-cols-2">
      {/* Left Side | SignIn Form */}
      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex w-full flex-col sm:w-auto">
          <PageTitle>
            Faça seu{' '}
            <div className="inline-block">
              login
              <div className="ml-1 inline-block h-2 w-2 rounded-full bg-gradient sm:h-3 sm:w-3" />
            </div>
          </PageTitle>

          <LoginForm />
        </div>
      </div>

      {/* Right Side | Background Image */}
      <div className="hidden bg-moutainSky bg-cover bg-center md:block" />
    </main>
  )
}
