<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and sanitize the input
  $first_name = filter_var($_POST["first-name"], FILTER_SANITIZE_STRING);
  $last_name = filter_var($_POST["last-name"], FILTER_SANITIZE_STRING);
  $phone_number = filter_var($_POST["phone-number"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

  $location = filter_var($_POST["user-location"], FILTER_SANITIZE_STRING);

  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  

  // Set the email recipient and subject
//   $to = "youremail@example.com";
  $to = "paulthomson737@gmail.com";
  $subject = "New message from $first_name $last_name";

  // Set the email message
  $message_body = "Name: $first_name $last_name\n";
  $message_body .= "Phone Number: $phone_number\n";
  $message_body .= "Email: $email\n\n";
  $message_body .= "Message:\n$message";

  // Set the email headers
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email\n";

  // Send the email
  if(mail($to, $subject, $message_body, $headers)) {
    echo '<script>alert("Thank you for your message - we will respond as soon as possible");</script>';
    echo '<script type="text/javascript">
          window.open("https://www.workserve.co.za/");
          </script>';

    // echo '<h1 style="text-align:center;">Please return</h1>';
    

  } else {
    echo '<script>alert("Error sending message");</script>';
    header("Location: Location: index.html");
  }

  
}

?>
