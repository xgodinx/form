import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "@mui/material/Button";
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("From submitted!:", data);
    alert("Success!");
    reset();
  };

  return (
    <div className="max-w-[400px] w-full mx-auto p-[30px] rounded-[12px] border m-2.5">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-3xl text-center mb-3">Registration</h1>
        <Input
          label="Name"
          name="name"
          register={register}
          rules={{ required: "Name is required" }}
          error={errors.name}
        />

        <Input
          label="Email"
          name="email"
          register={register}
          rules={{
            required: "Email required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Wrong email",
            },
          }}
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          rules={{
            required: "Password required",
            minLength: {
              value: 6,
              message: "At least 6 chars",
            },
          }}
          error={errors.password}
        />

        <Button type="submit" className="w-full h-[45px]" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
