"use client";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { authenticate } from "@/app/_lib/auth/authenticate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { schema, FormSchema } from "./formSchema";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter()
  const [formState, formAction] = useFormState(authenticate, undefined);

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      ...(formState?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState?.message === "success") {
      router.push("/profile")
    }
  }, [formState]);

  return (
    <>
      <div className={Styles.error}>
        {formState && <p>{formState.message}</p>}
      </div>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef.current?.submit())}
        className="flex flex-col"
        noValidate
      >
        <label htmlFor="username">Username</label>
        <input
          className={Styles.input}
          {...form.register("username", {
            required: "Username is required",
            validate: {
              length: (fieldValue) => {
                return fieldValue.length > 4 || "Username not long enough";
              },
            },
          })}
          type="text"
          id="username"
        />
        <p>{form.formState.errors.username?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          className={Styles.input}
          {...form.register("password", {
            required: "Password is required",
            validate: (fieldValue) => {
              return (
                fieldValue.length > 6 ||
                "Password must be greater than 6 characters"
              );
            },
          })}
          type="text"
          id="password"
        />
        <p>{form.formState.errors.password?.message}</p>
        <SubmitButton />
      </form>
    </>
  );
};

export const SubmitButton = () => {
    const { pending } = useFormStatus()

    const handleClick = (event: any) => {
      if (pending) {
        event.preventDefault();
      }
    };

    return (
      <>
        <button
          onClick={handleClick}
          disabled={pending}
          aria-disabled={pending}
          type="submit"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
}

const Styles = {
  input: "border-2 mb-[10px]",
  button: "bg-black text-white h-[40px] w-[80px]",
  error: "text-red-500",
};
