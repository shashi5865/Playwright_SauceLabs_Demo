export const validUser = {
  username: "standard_user",
  password: "secret_sauce",
};

export const invalidUsers = [
  {
    username: "standard_user",
    password: "wrong_password",
    error:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    error: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    username: "",
    password: "secret_sauce",
    error: "Epic sadface: Username is required",
  },
  {
    username: "standard_user",
    password: "",
    error: "Epic sadface: Password is required",
  },
];
