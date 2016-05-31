$(document).ready(function() {
  // Objects
  var contactsList = [];

  function clearInput() {
  	$("#first-name").val('');
    $("#last-name").val('');
    $("#phone-number").val('');
    $("#street").val('');
    $("#city").val('');
    $("#state").val('');
  }

  // Events
  $('#add').click(function() {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var phoneNumber = $('#phone-number').val();
    var street = $('#street').val();
    var city = $('#city').val();
    var state = $('#state').val();
    contactDetails = {};
    contactDetails['first-name'] = firstName;
    contactDetails['last-name'] = lastName;
    contactDetails['phone-number'] = phoneNumber;
    contactDetails['street'] = street;
    contactDetails['city'] = city;
    contactDetails['state'] = state;
    console.log(firstName + " " + lastName);
    $('#contact-list').append('<li>' + firstName + " " + lastName + '</li>');
    contactsList.push(contactDetails);
    clearInput();
  });
});
