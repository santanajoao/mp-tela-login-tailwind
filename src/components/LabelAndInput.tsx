interface LabelAndInputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  error?: string;
}

export default function LabelAndInput({
  label, id, type, name, error,
}: LabelAndInputProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-400">
        {label}
      </label>

      <div className="relative mt-2 flex items-center justify-center">
        <input
          type={type}
          id={id}
          name={name}
          className="peer relative z-10 w-full rounded-2xl bg-zinc-900 px-4 py-4 text-base leading-tight text-gray-300 outline-none"
        />

        {/* purple blur */}
        <div className="absolute bottom-0 -z-0 h-full w-full rounded-2xl bg-purple-700 opacity-0 blur-lg transition-opacity duration-200 peer-focus:opacity-100" />

        {/* gradient "border" */}
        <div className="absolute z-0 h-[102.2%] w-[100.35%] rounded-2xl bg-gradient opacity-0 transition-opacity duration-200 peer-focus:opacity-100" />
      </div>

      <span className="text-red-400 text-sm font-bold inline-block mt-2">{error}</span>
    </div>
  )
}
