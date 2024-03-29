$(document).ready(function () {
  var currentFloor = 2; // Переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); // Каждый отдельный этаж в SVG
  var flatPath = $('.flats path'); // Каждая отдельная квартира в SVG
  var flatLink = $('.flat-link') // Каждая ссылка на этаж
  var counterUp = $('.counter-up'); // Кнопка увеличения этажа
  var counterDown = $('.counter-down'); // Кнопка уменьшения этажа
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');

  // Функция при наведении мышью на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // Удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // Получаем значение текущего этажа
    $('.counter').text(currentFloor); // Записываем значение этажа в счетчик справа
  });
      
  flatPath.on('mouseover', function () {
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat');
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat="${currentFlat}"]`).addClass('current-flat');
  });

  flatLink.on('mouseover', function(){
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat');
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat="${currentFlat}"]`).addClass('current-flat');
  });
    
  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal)
  viewFlatsButton.on('click', toggleModal);

  // Отслеживаем клик по кнопке вверх
  counterUp.on('click', function () { 
  // Проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) { 
      currentFloor++; // Прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor); // Записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // Удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // Подсвечиваем текущий этаж
    };
  });
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    };
  });
  function toggleModal() {
    modal.toggleClass('is-open');
  };
});