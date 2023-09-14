interface InputProps {
  name: string;
}

const Input = ({ name }: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="mb-1">
        {name}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="bg-gray-700 py-2 px-4 text-white rounded-sm w-full"
        required
      />
    </>
  );
};

export default Input;
