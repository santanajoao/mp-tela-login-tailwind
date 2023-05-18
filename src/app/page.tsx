export default function Home() {
  return (
    <main className="grid grid-cols-2 bg-black h-screen">
      {/* Left */}
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-gray-200 text-5xl font-bold leading-snug text-center">
            Faça seu{' '}
            <div className="inline-block">
              login
              <div className="ml-1 inline-block bg-dotGradient h-3 w-3 rounded-full" />
            </div>
          </h1>
          
          <form className="mt-14 flex flex-col space-y-6">
            <label htmlFor="email" className="text-sm text-gray-400 flex flex-col">
              Email
              <input type="email" id="email" className="mt-2 bg-zinc-900 rounded-2xl text-base px-4 py-3" />
            </label>
            <label htmlFor="password" className="text-sm text-gray-400 flex flex-col">
              Senha
              <input type="password" id="password" className="mt-2 bg-zinc-900 rounded-2xl text-base px-4 py-3" />
            </label>
          </form>
        </div>
      </div>

      {/* Right */}
      <div className="text-white">right</div>
    </main>
  )
}
