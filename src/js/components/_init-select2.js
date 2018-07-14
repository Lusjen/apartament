import select from 'select2';

$(document).ready(function() {
  $('.js-select').select2({
  	placeholder: 'Выберите дом*',
  	allowClear: true
  });
});
