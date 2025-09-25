"use client";
import Link from "next/link";
import { Logo } from "./svgs/logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z
    .string({ error: "Email é obrigatório" })
    .email({ error: "Email inválido!" }),
  password: z
    .string({ error: "Senha é obrigatória" })
    .min(8, { error: "A senha deve conter no mínimo 8 caracteres" }),
});

export function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center rounded-4xl max-w-[28rem] lg:max-w-[34.5rem] w-full gap-6 lg:px-10 py-[50px] lg:py-[22px] bg-white shadow"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section className="flex flex-col justify-center items-center w-full">
          <Logo />
          <h2 className="mt-[1.875rem] text-sm text-gray-900 font-medium">
            Login
          </h2>
        </section>
        <section className="md:w-[20rem] w-[80%] lg:w-[27.5rem]">
          <section className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@email.com"
                      className="border pl-2 py-1.5 w-full h-8 rounded-md outline-none border-zinc-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="******"
                        className="border pl-2 py-1.5 w-full h-8 rounded-md outline-none border-zinc-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-6 mt-6">
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
              <Link href="/sign-up" className="text-texts-primary">
                Registre-se
              </Link>
            </span>
          </section>
        </section>
      </form>
    </Form>
  );
}
