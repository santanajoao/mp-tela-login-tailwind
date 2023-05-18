import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <main className="grid h-screen bg-black md:grid-cols-2">
      {/* Left */}
      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex w-full flex-col sm:w-auto">
          <h1 className="text-center text-4xl font-bold leading-snug text-gray-200 sm:text-5xl">
            Faça seu{" "}
            <div className="inline-block">
              login
              <div className="ml-1 inline-block h-3 w-3 rounded-full bg-gradient" />
            </div>
          </h1>

          <form className="mt-14">
            <div className="space-y-6">
              <label
                htmlFor="email"
                className="flex flex-col text-sm text-gray-400"
              >
                Email
                <input
                  type="email"
                  id="email"
                  className="mt-2 rounded-2xl bg-zinc-900 px-4 py-4 text-base leading-tight"
                />
              </label>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="flex flex-col text-sm text-gray-400"
                >
                  Senha
                  <input
                    type="password"
                    id="password"
                    className="mt-2 rounded-2xl bg-zinc-900 px-4 py-4 text-base leading-tight"
                  />
                </label>

                <CustomLink href="/forgot" className="mt-5 self-end">
                  Esqueci minha senha
                </CustomLink>
              </div>
            </div>

            <button className="mt-9 w-full rounded-2xl bg-gradient py-3 text-xl font-bold leading-tight text-white sm:text-2xl">
              Entrar
            </button>
          </form>

          <CustomLink href="/signin" className="mt-8">
            Ainda não tenho uma conta
          </CustomLink>
        </div>
      </div>

      {/* Right */}
      <div className="hidden bg-moutainSky bg-cover bg-center md:block" />
    </main>
  );
}
