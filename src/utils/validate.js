export const checkValidateData = (name, emailOrPhone, password) => {
  const isNameValid = name ? /^[a-zA-Z ]{2,30}$/.test(name) : true; // Skip name validation if name is not provided
  const isEmailPhoneValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      String(emailOrPhone).toLowerCase()
    );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isNameValid) return "Name is not valid";
  if (!isEmailPhoneValid) return "Email ID or Mobile number not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
