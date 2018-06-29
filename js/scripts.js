(function ($, Drupal) {

  // Media Image browser

  // Disable the submit for this entity browser until we select an entity.
  if ($('.view-image-select .view-content .views-row').length > 0) {
    $('input.is-entity-browser-submit').attr('disabled', 'disabled');
  }

  // Selector for finding the actual form inputs.
  var input = 'input[name ^= "entity_browser_select"]';
  // Reset the selected entities counter to 0.
  var selectedEntities = 0;

  $('.view-image-select .views-row').on('click', function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass('selected').find(input).prop('checked', false);
      selectedEntities--;
    }
    else {
      $(this).addClass('selected').find(input).prop('checked', true);
      selectedEntities++;
    }

    if (selectedEntities >= 1) {
      // Enable the submit button for this entity browser.
      $('input.is-entity-browser-submit').removeAttr('disabled');
    }
    else {
      // Disable the submit button for this entity browser.
      $('input.is-entity-browser-submit').attr('disabled', 'disabled');
    }

  });

  // When we double click on a selectable entity.
  $('.view-image-select .views-row').on('dblclick', function () {

    // Select the current clicked entity.
    $(this).addClass('selected').find(input).prop('checked', true);

    // Unselect everything else.
    $('.view-image-select .views-row').not(this).removeClass('selected').find(input).prop('checked', false);

    // Enable the submit button for this entity browser.
    $('input.is-entity-browser-submit').removeAttr('disabled');

    // Auto submit the entity browser form .
    $('input.is-entity-browser-submit').click();
  });


})(jQuery, Drupal);
