// Components
import { CardWrapper } from "@/components/card-wrapper/card-wrapper.component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert } from "@/components/alert/alert.component";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import { Input } from "@/components/ui/input";
import { TogglePasswordButton } from "@/components/toggle-password-button/toggle-password-button.component";
// Constants
import constants from "./constants/register.constants";
// Hooks
import RegisterHook from "./hooks/register.hook";

const RegisterPage = () => {
  const {
    message,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  } = RegisterHook();

  const passwordType = showPassword
    ? constants.FIELD_PASSWORD_TYPE_VISIBLE
    : constants.FIELD_PASSWORD_TYPE_HIDDEN;

  return (
    <CardWrapper {...{ ...constants.CARD_WRAPPER_PROPS }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name={constants.FIELD_NAME_PROPS.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{constants.FIELD_NAME_PROPS.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder={constants.FIELD_NAME_PROPS.placeholder}
                      type={constants.FIELD_NAME_PROPS.type}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.FIELD_EMAIL_PROPS.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{constants.FIELD_EMAIL_PROPS.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder={constants.FIELD_EMAIL_PROPS.placeholder}
                      type={constants.FIELD_EMAIL_PROPS.type}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={constants.FIELD_PASSWORD_PROPS.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{constants.FIELD_PASSWORD_PROPS.label}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={loading}
                        placeholder={constants.FIELD_PASSWORD_PROPS.placeholder}
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
          </div>
          <Alert {...{ ...message }} />
          <ButtonLoading {...constants.BUTTON_SUBMIT_PROPS} {...{ loading }} />
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterPage;
