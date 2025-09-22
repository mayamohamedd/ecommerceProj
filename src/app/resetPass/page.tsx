"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { resetPassword } from "../actions/forgetPass.action";

export default function ResetPassword() {
  const router = useRouter();

  interface Inputs {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(values: Inputs) {
    try {
      const response = await resetPassword({
        email: values.email,
        password: values.password,
      });
      console.log(response, "reset response");
      if (response?.status === 200 ) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error, "reset pass error");
    }
  }

  return (
    <div className="w-1/2 mx-auto my-10">
      <h2 className="text-3xl tracking-tighter font-bold my-5">
        Reset Your Password
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Your email"
          className="p-5 my-5"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-800">{errors.email.message}</p>
        )}

        <Input
          type="password"
          placeholder="New password"
          className="p-5 my-5"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-800">{errors.password.message}</p>
        )}

        <Button className="px-7 py-5 my-5" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
}
