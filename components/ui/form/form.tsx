import Button from "@components/ui/button";
import Input from "@components/ui/form/input";
import TextArea from "@components/ui/form/textArea";

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
          <Input name="Name" />
        </div>
        <div className="flex flex-col flex-1">
          <Input name="Email" />
        </div>
      </div>

      <div className="flex flex-col">
        <TextArea name="Message" />
      </div>

      <div className="text-center mt-6">
        <Button accent type="submit">
          Send Email
        </Button>
      </div>
    </form>
  );
};

export default Form;
