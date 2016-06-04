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
  // $('.contact-details').addClass('hide');

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
    var listItem = $('<li />').attr('data-index', counter);
    var listItemLink = $('<a />').attr('href', '#').text(firstName + ' ' + lastName).appendTo(listItem);
    $('#contact-list').append(listItem);
    var infoItem = $('<div />')
      .addClass('info-item')
      .attr('data-index', counter)
      .html('<h2>' + firstName + ' ' + lastName +
      '</h2>First name: ' + firstName +
      '<p></p>Last name: ' + lastName +
      '<p></p>Phone number: ' + phoneNumber +
      '<p></p>Addresses:' +
      '<p></p><ul><li>' + street +
      '<p></p>' + city + ', ' + state + '</li><ul>')
      .appendTo('#contact-info')
      .addClass('hide');
    contactsList.push(contactDetails);
    clearInput();

    // Show contact details after clicking a contact
    $('a').click(function() {
      var contactIndex = $(this).parent().data('index');
      var targetContact = $('.info-item[data-index="' + contactIndex + '"]');
      targetContact.addClass('show');
      targetContact.siblings().removeClass('show');
      return false;
    });
  });
});
