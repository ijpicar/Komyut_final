<?php
session_start();

    include("connection.php");
    include("functions.php");
  
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <iframe src="Background/index.php" frameborder="0" scrolling="no"
    style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1;"></iframe>
  <title>Komyut Registration Form</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
      <div class="inputfield">
        <label>First Name</label>
        <input type="text" class="input">
      </div>
      <div class="inputfield">
        <label>Last Name</label>
        <input type="text" class="input">
      </div>
      <div class="inputfield">
        <label>Password</label>
        <input type="password" class="input">
      </div>
      <div class="inputfield">
        <label>Confirm Password</label>
        <input type="password" class="input">
      </div>
      <div class="inputfield">
        <label>Gender</label>
        <div class="custom_select">
          <select>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Prefer not to say</option>
          </select>
        </div>
      </div>
      <div class="inputfield">
        <label>Email Address</label>
        <input type="email" class="input">
      </div>
      <div class="inputfield">
        <label>Phone Number</label>
        <input type="text" class="input">
      </div>
      <div class="inputfield">
        <label>Address</label>
        <textarea class="textarea"></textarea>
      </div>
      <div class="inputfield">
        <label>Postal Code</label>
        <input type="text" class="input">
      </div>
      <div class="inputfield terms">
        <label class="check">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <p>Agreed to terms and conditions</p>
      </div>
      <div class="inputfield">
        <a class="btn" href="\Nuxt App with Login and Redirect\LOG IN PAGE\Komyut Log in page\reg_login\login_register.php" title="Dashboard">Register</a>
      </div>
    </div>
  </div>
</body>

</html>