const constants = {
  FORM_FIELD_NAME: {
    label: "Nombre",
    name: "name",
    placeholder: "Nombre",
    type: "text",
  },
  FORM_FIELD_EMAIL: {
    label: "Email",
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  FORM_FIELD_PASSWORD: {
    label: "Contraseña",
    name: "password",
    placeholder: "Contraseña",
    type: "password",
  },
  FORM_FIELD_ROLE:{
    items: [
      { label: "Usuario", value: "user" },
      { label: "Administrador", value: "admin" },
    ],
    label: "Rol",
    name: "role",
    placeholder: "Rol",
    type: "select",
  },
  BUTTON_SUBMIT_PROPS: {
    fullWidth: true,
    showLabel: false,
    type: "submit",
  },
  FIELD_PASSWORD_TYPE_VISIBLE: "text",
  FIELD_PASSWORD_TYPE_HIDDEN: "password",
};

export default constants;
