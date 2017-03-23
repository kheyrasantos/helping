<?php
    // if "email" variable is filled out, send email
      if ( isset($_REQUEST['email']) && isset($_REQUEST['name']) && isset($_REQUEST['message']) )  {

          // @TODO Validate input from user

          // Email information
          $admin_email = "mark@bitmotive.com";
          $name = $_REQUEST['name'];
          $email = $_REQUEST['email'];
          $comment = $_REQUEST['message'];

          // send email
          mail($admin_email, "Bitmotive.com Message From: $name <$email>", $comment);

          header("Location: /?msg=success");

      } else  {   // if "email", "name", or "message" variable is not filled out, display the form
          header("Location: /?msg=failure");
      }
?>
