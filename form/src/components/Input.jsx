export default function Input({
  label,
  name,
  register,
  rules,
  error,
  type = "text",
}) {
  return (
    <div className="form-body">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name, rules)} />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
}
