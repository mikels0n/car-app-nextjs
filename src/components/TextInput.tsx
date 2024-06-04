interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

const TextInput = (props: TextInputProps) => {
  const { label, name, ...rest } = props
  return (
    <div className="grid grid-rows-2 grid-cols-1 mt-3">
      {label ?? <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        {...rest}
        className="w-64 h-8 bg-slate-500 text-white justify-self-end pl-2 rounded-md shadow-md hover:bg-slate-600"
      />
    </div>
  )
}

export default TextInput
