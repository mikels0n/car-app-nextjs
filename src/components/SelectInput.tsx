interface Option {
  value: string;
  label: string;
}

interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  items: Option[];
}

const SelectInput = (props: SelectInputProps) => {
  const { label, name, items, ...rest } = props;

  return (
    <div className="flex flex-col">
      {label ?? <label htmlFor={name}>{label}</label>}
      <select name={name} {...rest} className="form-field">
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
