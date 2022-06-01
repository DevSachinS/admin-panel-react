export const emailValidation = (email) => {
    let pattern =
      /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\.-_+])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,3})+$/i;
    return pattern.test(String(email).toLowerCase());
  };