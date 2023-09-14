import Button from "@components/ui/button";

const Form = () => {
  return (
    <form
      name="Dev Portfolio"
      action="/success"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="max-w-2xl mx-auto"
    >
      <input type="hidden" name="form-name" value="Dev Portfolio" />
      <input type="hidden" name="bot-field" />

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex flex-col flex-1">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            className="bg-gray-700 py-2 px-4 text-white rounded-sm w-full"
            required
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
            className="bg-gray-700 py-2 px-4 text-white rounded-sm w-full"
            required
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
          className="bg-gray-700 py-2 px-4 text-white rounded-sm h-32 resize-none"
          required
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
