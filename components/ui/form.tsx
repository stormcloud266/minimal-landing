import Button from "@components/ui/button";

const Form = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="flex gap-4">
        <div className="flex flex-col flex-1 mb-6">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            className="bg-gray-200/10 py-2 px-4 text-white rounded-sm"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="Email"
            className="bg-gray-200/10 py-2 px-4 text-white rounded-sm"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1">
          Message
        </label>
        <textarea
          name="Message"
          id="message"
          className="bg-gray-200/10 py-2 px-4 text-white rounded-sm h-24 resize-none"
        />
      </div>

      <div className="text-center">
        <Button className="mt-6" accent type="submit">
          Send Email
        </Button>
      </div>
    </form>
  );
};

export default Form;
