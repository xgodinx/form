import { useForm } from "react-hook-form";
import Input from "./Input";

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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit" className="submit-btn">
        Send
      </button>
    </form>
  );
}
