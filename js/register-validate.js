function validateForm(){
  let allValidatedOK = true;

  // check firstname
  document.getElementById('firstnameFeedback').innerHTML = "";
  firstnameLetterCheck = checkLetters('register','firstname','firstnameFeedback')
  if(firstnameLetterCheck == false){
    allValidatedOK = false
  }
  firstnameSpacesCheck = checkSpaces('register','firstname','firstnameFeedback')
  if(firstnameSpacesCheck == false){
    allValidatedOK = false
  }
  firstnameLengthCheck = checkLength('register','firstname','firstnameFeedback')
  if(firstnameLengthCheck == false){
    allValidatedOK = false
  }

  // check surname
  surnameLetterCheck = checkLetters('register','surname','surnameFeedback')
  if(surnameLetterCheck == false){
    allValidatedOK = false
  }
  surnameSpacesCheck = checkSpaces('register','surname','surnameFeedback')
  if(surnameSpacesCheck == false){
    allValidatedOK = false
  }
  surnameLengthCheck = checkLength('register','surname','surnameFeedback')
  if(surnameLengthCheck == false){
    allValidatedOK = false
  }

  // check email
  document.getElementById('emailFeedback').innerHTML = "";
  emailCheck = checkEmail('register','email','emailFeedback')
  if(emailCheck == false){
    allValidatedOK = false
  }
  emailLengthCheck = checkLength('register','email','emailFeedback')
  if(emailLengthCheck == false){
    allValidatedOK = false
  }

  // check if passwords are the same before saving in db
  document.getElementById('passwordFeedback').innerHTML = "";
  document.getElementById('password2Feedback').innerHTML = "";
  let password1 = document.forms['register']['password'].value;
  let password2 = document.forms['register']['password2'].value;
  if (password1 !== password2){
    document.getElementById('passwordFeedback').innerHTML = "Lösenorden matchar inte";
    document.getElementById('password2Feedback').innerHTML = "Lösenorden matchar inte";
    allValidatedOK = false
  }

  if (allValidatedOK == false) {
    return false;
  } else {
    return false;
  }
}

function checkLetters(formName, inputName, feedbackId){
  // check for latin letters
  let input = document.forms[formName][inputName].value;
  let onlyLetters = /^[a-zA-Z\- ÅåÄäÖöØøÆæÉéÈèÜüÊêÛûÎî0123456789]*$/.test(input);
  if (onlyLetters == false) {
    document.getElementById(feedbackId).innerHTML = "Bara de vanligaste tecknen tillåtna";
    return false;
  } else {
    return true;
  }
}

function checkSpaces(formName, inputName, feedbackId){
  // check for mutliple spaces in begining of string
  let input = document.forms[formName][inputName].value;
  let findSpaces = /^(\s\s)/.test(input);
  if (findSpaces == true) {
    document.getElementById(feedbackId).innerHTML = "För många mellanslag";
    return false;
  } else {
    return true;
  }
}

function checkLength(formName, inputName, feedbackId){
  // check if right input lenght
  let input = document.forms[formName][inputName].value;
  if (input.length < 2 || input.length > 30) {
    if (input.length > 30) {
      document.getElementById(feedbackId).innerHTML = "Max 30 bokstäver";
    } else {
      document.getElementById(feedbackId).innerHTML = "Minst två bokstäver";
    }
    return false;
  }
}

function checkEmail(formName, inputName, feedbackId){
  // check for 
  let input = document.forms[formName][inputName].value;
  let onlyLetters = /^[a-zA-Z.0123456789@]*$/.test(input);
  let includesAt = input.includes('@');
  let includesDot = input.includes('.');
  if (onlyLetters == false || includesAt == false || includesDot == false) {
    document.getElementById(feedbackId).innerHTML = "Fel format på e-mail";
    return false;
  } else {
    return true;
  }
}
