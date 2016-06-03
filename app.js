$(document).ready(function() {

  // Objects
  var contactsList = [];
  var counter = 0;

  // Clear form input fields
  function clearInput() {
  	$('#first-name').val('');
    $('#last-name').val('');
    $('#phone-number').val('');
    $('#street').val('');
    $('#city').val('');
    $('#state').val('');
  }

  // Hide 'contacts' and 'contact-details' sections on page load
  $('.contact-list').addClass('hide');
  // $('.contact-info').addClass('hide');

  // Events
  $('#add').click(function() {
    counter++;
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
    $('.contact-list').addClass('show');
    $('#contact-list').append('<li><a href="#" data-index="' + counter + '">' + firstName + " " + lastName + '</a></li>');
    $('.contact-info').append('First name: ' + firstName + '<br>' + 'Last Name: ' + lastName + '<br>');
    contactsList.push(contactDetails);
    console.log(contactsList);
    clearInput();

    // Show contact details after clicking contacts list
    $('a').click(function() {
      var contactIndex = $(this).data('index');
      console.log(contactIndex);
      $('.contact-info[data-index="' + contactIndex + '"]').css('color', 'blue');
    });
  });
});
