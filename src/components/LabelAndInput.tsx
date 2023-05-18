interface LabelAndInputProps {
  label: string;
  id: string;
  type: string;
}

export default function LabelAndInput({ label, id, type }: LabelAndInputProps) {
  return (
    <label htmlFor={id} className="flex flex-col text-sm text-gray-400">
      {label}
      <input
        type={type}
        id={id}
        className="mt-2 rounded-2xl bg-zinc-900 px-4 py-4 text-base leading-tight focus:outline-purple-700 focus:outline"
      />
    </label>
  )
}
