function valid() {
  let username = document.forms["myform"].username.value;
  let password = document.forms["myform"].password.value;

  if (username == "") {
    alert("username field is required");
    document.forms["myform"].username.focus();
    return false;
  } else if (password == "") {
    alert("password field is required");
    document.forms["myform"].password.focus();
    return false;
  } else if (username == "admin" || password == "a123") {
    alert("Login success");
    return true;
  } else {
    alert("Invalid username or password");
    return false;
  }
}
