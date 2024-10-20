function getFormvalue() {
    // Get the form element
    var form = document.forms[0];

    // Extract the values of First Name and Last Name using their name attributes
    var firstName = form.elements["First Name"].value;
    var lastName = form.elements["Last Name"].value;

    // Show the alert with the first and last name
    alert(firstName + " " + lastName);
}

