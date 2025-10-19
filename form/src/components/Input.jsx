export default function Input({
  label,
  name,
  register,
  rules,
  error,
  type = "text",
}) {
  return (
    <div className="flex flex-col mb-2.5">
      <label htmlFor={name} className="mb-2 font-semibold">
        {label}
      </label>
      <input
        className="p-2 border border-gray-500 rounded-[6px] text-[18px] focus:border-indigo-500 outline-0"
        id={name}
        type={type}
        {...register(name, rules)}
      />
      {error && (
        <p className="text-red-500 text-[14px] mt-1">{error.message}</p>
      )}
    </div>
  );
}
