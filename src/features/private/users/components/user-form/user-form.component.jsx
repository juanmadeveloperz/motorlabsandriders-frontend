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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TogglePasswordButton } from "@/components/toggle-password-button/toggle-password-button.component";
// Constants
import constants from "./constants/user-form.constants";

export const UserForm = ({
  form,
  handleSubmit,
  handleToggleShowPassword,
  label,
  loading,
  showPassword,
}) => {
  const passwordType = showPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_NAME.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_NAME.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    placeholder={constants.FORM_FIELD_NAME.placeholder}
                    type={constants.FORM_FIELD_NAME.type}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_EMAIL.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_EMAIL.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    placeholder={constants.FORM_FIELD_EMAIL.placeholder}
                    type={constants.FORM_FIELD_EMAIL.type}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_PASSWORD.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_PASSWORD.label}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder={constants.FORM_FIELD_PASSWORD.placeholder}
                      type={passwordType}
                      className="pr-12"
                    />
                    <TogglePasswordButton
                      {...{ handleToggleShowPassword, showPassword }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_ROLE.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_ROLE.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={loading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={constants.FORM_FIELD_ROLE.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {constants.FORM_FIELD_ROLE.items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

export default UserForm;
