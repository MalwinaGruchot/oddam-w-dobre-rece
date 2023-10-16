export const validateName = (name) => {
  if (name === "" || name.includes(" ")) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return false;
  }
  return true;
};
export const validateMessage = (message) => {
  if (message.trim().length < 120) {
    return false;
  }
  return true;
};

export const validatePass = (pass) => {
  if (pass.trim().length < 6) {
    return false;
  }
  return true;
};
