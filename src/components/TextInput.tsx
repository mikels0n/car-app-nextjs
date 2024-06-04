interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

const TextInput = (props: TextInputProps) => {
  const { label, name, ...rest } = props
  return (
    <div>
      {label ?? <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        {...rest}
        className="w-64 h-8 bg-slate-500 text-white m-2"
      />
    </div>
  )
}

export default TextInput
