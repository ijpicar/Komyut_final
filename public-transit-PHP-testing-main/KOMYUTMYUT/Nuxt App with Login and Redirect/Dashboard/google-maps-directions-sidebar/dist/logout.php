<?php

session_start();

unset($_SESSION["user_id"]);
session_destroy();

header("Location: ../../../LOG IN PAGE/Komyut Log in page/reg_login/login_register.html");
exit;