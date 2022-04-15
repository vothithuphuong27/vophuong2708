function LoginWebsite() {}

LoginWebsite.prototype.isEmpty = function (str) {
  return !str || 0 === str.length;
};

LoginWebsite.prototype.Login = function (username, password) {
  if (this.isEmpty(username) || this.isEmpty(password)) {
    return "Username hoặc Password không được để trống ";
  } else {
    return "Loggin suscces !";
  }
};
