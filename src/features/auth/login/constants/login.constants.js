const constants = {
  FIELD_EMAIL_PROPS: {
    label: "Email",
    name: "email",
    placeholder: "moter@rider.com",
    type: "email",
  },
  FIELD_PASSWORD_PROPS: {
    label: "Password",
    name: "password",
    placeholder: "******",
  },
  FIELD_PASSWORD_TYPE_VISIBLE: "text",
  FIELD_PASSWORD_TYPE_HIDDEN: "password",
  BUTTON_LINK_FORGOT_PASSWORD_PROPS: {
    href: "/reset",
    label: "Olvidaste tu contraseña?",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    label: "Login",
    showLabel: false,
    type: "submit",
  },
  CARD_WRAPPER_PROPS: {
    buttonLink: {
      fullWidth: true,
      href: "/registro",
      label: "No tienes cuenta? Registrate",
    },
    title: "Login",
    description: "Bienvenido de nuevo",
  },
};

export default constants;
