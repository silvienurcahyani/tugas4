function validateForm() {
  let name = document.forms['myForm']['name'].value;
  if (name == '') {
    alert('Name must be filled out');
    return false;
  }
  let email = document.forms['myForm']['email'].value;
  if (email == '') {
    alert('Email must be filled out');
    return false;
  }
  let number = document.forms['myForm']['number'].value;
  if (number == '') {
    alert('Number must be filled out');
    return false;
  }
  if (!isValid(number)) {
    alert('Phone number must be valid number');
    return false;
  }
  let subject = document.forms['myForm']['subject'].value;
  if (subject == '') {
    alert('Subject must be filled out');
    return false;
  }
  let message = document.forms['myForm']['message'].value;
  if (message == '') {
    alert('Message must be filled out');
    return false;
  }

  let emailReceiver = 'silvienurcahyani01@gmail.com';

  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, My name is ${name}, ${message}. Kindly contact me ${number} or ${email}`;
  a.click();
}

function isValid(number) {
  return /^[0-9]+$/.test(number);
}
