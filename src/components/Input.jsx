const Input = ({ name, title, type, placeholder, value, handleChange }) => {
  return (
    <div className="my-4 flex flex-col gap-2">
      <label htmlFor={name} className="text-lg font-semibold">
        {title}
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
