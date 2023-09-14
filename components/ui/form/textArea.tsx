interface TextAreaProps {
  name: string;
}

const TextArea = ({ name }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={name} className="mb-1">
        {name}
      </label>
      <textarea
        name={name}
        id={name}
        className="bg-gray-700 py-2 px-4 text-white rounded-sm h-32 resize-none"
        required
      />
    </>
  );
};

export default TextArea;
