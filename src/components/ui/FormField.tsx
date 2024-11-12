export const FormField = ({
  label,
  placeholder,
  name,
  value,
  error,
  onChange,
  disabled,
  type = "text",
}: {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error: string | undefined;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled: boolean;
  type?: string;
}) => (
  <div>
    {label && (
      <label className="block text-tradeoff-primary font-poppins">
        {label}
      </label>
    )}
    <input
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full border ${
        error ? "border-red-500" : "border-gray-300"
      } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-poppins`}
      required
    />
    {error && <p className="text-xs text-red-500 pl-2">{error}</p>}
  </div>
);
