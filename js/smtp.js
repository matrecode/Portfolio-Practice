function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "matrea949@gmail.com",
        Password : "039881B84AF923C94C16BBD99294B03D992D",
        To : 'akshaymatre21@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact form enquiry",
        Body : "Name - " + document.getElementById('name').value + "<br>Email - " + document.getElementById('email').value + "<br>Company name - " + document.getElementById('company-name').value + "<br>Message - " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
  }
