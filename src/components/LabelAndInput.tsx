interface LabelAndInputProps {
  label: string;
  id: string;
  type: string;
}

export default function LabelAndInput({ label, id, type }: LabelAndInputProps) {
  return (
    <div className="">
      <label htmlFor={id} className="text-sm text-gray-400">
        {label}
      </label>

      <div className="relative mt-2 flex justify-center items-center">
        <input
          type={type}
          id={id}
          className="peer rounded-2xl bg-zinc-900 px-4 py-4 text-base leading-tight text-gray-300 w-full z-10 relative outline-none"
        />

        <div className="opacity-0 bg-purple-700 h-full w-full absolute rounded-2xl bottom-0 blur-lg -z-0 peer-focus:opacity-100 transition-opacity duration-200" />

        <div className="opacity-0 h-[102.2%] w-[100.35%] absolute bg-gradient rounded-2xl z-0 peer-focus:opacity-100 transition-opacity duration-200" />
      </div>
    </div>
  )
}
