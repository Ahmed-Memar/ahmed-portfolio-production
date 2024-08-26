function InputUI ({id,type,labelText,error,register}) {
  return (
  <div className="grid gap-2">
    <label htmlFor={id} className="text-sm sm:text-base">{labelText} <span className="text-red-500 font-semibold">*</span> </label>
    <input
      type={type}
      id={id}
      {...register}
      className="bg-inherit rounded-lg border-stone-600/100 border h-12 p-3 shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100"
    />
    {error && <span className="text-red-500 font-semibold px-2">{error?.message}</span>}
  </div>
)};

export default InputUI;