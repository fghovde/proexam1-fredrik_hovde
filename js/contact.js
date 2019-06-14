function validateForm(){
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var errorIcon = '<i class="material-icons md-light">error_outline</i>';
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z ]*)*$/;
    var emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (fName == '' || fName == null) {
        document.getElementById('fNameMsg').innerHTML = errorIcon + 'Enter your first name';
        document.getElementById('fNameMsg').setAttribute('style', 'display:block;');
        document.getElementById('fName').focus();
        return false;
    }
    if (nameRegex.test(fName) == false) {
        document.getElementById('fNameMsg').innerHTML = errorIcon + 'First name: Only these special characters are allowed: ",.-"';
        document.getElementById('fNameMsg').setAttribute('style', 'display:block;');
        document.getElementById('fName').focus();
        return false;
    }
    if (nameRegex.test(fName) == true) {
        document.getElementById('fNameMsg').innerHTML = "";
        document.getElementById('fNameMsg').setAttribute('style', 'display:none;');
    }
    if (lName == '' || lName == null) {
        document.getElementById('lNameMsg').innerHTML = errorIcon + 'Enter your last name';
        document.getElementById('lNameMsg').setAttribute('style', 'display:block;');
        document.getElementById('lName').focus();
        return false;
    }
    if (nameRegex.test(lName) == false) {
        document.getElementById('lNameMsg').innerHTML = errorIcon + 'Last name: Only these special characters are allowed: ",.-"';
        document.getElementById('lNameMsg').setAttribute('style', 'display:block;');
        document.getElementById('lName').focus();
        return false;
    }
    if (nameRegex.test(lName) == true) {
        document.getElementById('lNameMsg').innerHTML = "";
        document.getElementById('lNameMsg').setAttribute('style', 'display:none;');
    }
    if (email == '' || email == null) {
        document.getElementById('emailMsg').innerHTML = errorIcon + 'Enter your email';
        document.getElementById('emailMsg').setAttribute('style', 'display:block;');
        document.getElementById('email').focus();        
        return false;
    }
    if (emailRegex.test(email) == false) {
        document.getElementById('emailMsg').innerHTML = errorIcon + 'E-mail format should be: your@email.com (.org, .co.uk etc.)';
        document.getElementById('emailMsg').setAttribute('style', 'display:block;');
        document.getElementById('email').focus();
        return false;
    }
    if (emailRegex.test(email) == true) {
        document.getElementById('emailMsg').innerHTML = "";
        document.getElementById('emailMsg').setAttribute('style', 'display:none;');
    }
    if (phone == '' || phone == null) {
        document.getElementById('phoneMsg').innerHTML = errorIcon + 'Enter your phone number';
        document.getElementById('phoneMsg').setAttribute('style', 'display:block;');
        document.getElementById('phone').focus();
        return false;
    }
    if (phoneRegex.test(phone) == false) {
        document.getElementById('phoneMsg').innerHTML = errorIcon + 'Enter a number. No letters allowed';
        document.getElementById('phoneMsg').setAttribute('style', 'display:block;');
        document.getElementById('phone').focus();
        return false;
    }
    if (phoneRegex.test(phone) == true) {
        document.getElementById('phoneMsg').innerHTML = "";
        document.getElementById('phoneMsg').setAttribute('style', 'display:none;');
    }
    successCallback();
    return false;
}

function successCallback(validateForm) {
    const succMsg = document.getElementById('succMsg');
        succMsg.setAttribute('style', 'display:block;')
}