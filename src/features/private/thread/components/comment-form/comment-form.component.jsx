// Components
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
// Constants
import constants from "./constants/comment-form.constants";

export const CommentForm = ({
  form,
  handleSubmit,
  label,
  loading,
  threads,
  users,
}) => {
  console.log(threads, users);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_CONTENT.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_CONTENT.label}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={loading}
                    placeholder={constants.FORM_FIELD_CONTENT.placeholder}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <ButtonLoading
          {...constants.BUTTON_SUBMIT_PROPS}
          {...{ label, loading }}
        />
      </form>
    </Form>
  );
};
