import { Logo } from "@/components/svgs/logo";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen h-screen w-full bg-auth-primary flex items-center justify-center">
      <form className="flex flex-col items-center justify-center rounded-4xl lg:max-w-[34.5rem] w-full lg:gap-6 lg:px-10 lg:py-[50px] bg-white">
        <section className="flex flex-col justify-center items-center w-full">
          <Logo />
          <h2 className="mt-[1.875rem] text-sm text-gray-900 font-medium">
            Login
          </h2>
        </section>
        <section className="md:w-[20rem] lg:w-[27.5rem]">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                placeholder="johndoe@email.com"
                className="border pl-2 py-1.5 w-full h-8 rounded-md outline-none border-zinc-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="******"
                className="border pl-2 py-1.5 w-full h-8 rounded-md outline-none border-zinc-500"
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-6">
            <Link href="/fogot-password" className="text-blue-600 font-medium">
              Esqueceu a senha?
            </Link>
            <button
              type="submit"
              className="bg-button-primary text-white font-medium w-full cursor-pointer py-2 rounded-xl"
            >
              Entrar
            </button>
            <span className="text-base text-gray-600">
              Não tem conta?{" "}
              <Link href="/fogot-password" className="text-texts-primary">
                Registre-se
              </Link>
            </span>
          </section>
        </section>
      </form>
    </main>
  );
}
