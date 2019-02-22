// const fn = () => {
//   console.log('ready!')
// }

// fn();

document.addEventListener('DOMContentLoaded', () => {
  const TBODY_HEIGHT = 700;
  const tbody = document.querySelector('.table tbody');
  if(tbody) {
    const tbodyHeight = tbody.offsetHeight;
    if(tbodyHeight >= TBODY_HEIGHT) {
      tbody.closest('table').classList.add('with-scroll');
    }
  };

  const selects = document.querySelectorAll('.select');

  for (let i = 0; i < selects.length; i++) {
    const item = selects[i];
    new Selectr(item, {
      searchable: false,
      customClass: 'custom-select'
    });
  }



  const tabs = document.querySelectorAll('.mailing-create__tabs-link');
  const tabsContentBlocks = document.querySelectorAll('.mailing-create__content');
  if(tabs) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.addEventListener('click', function(e) {
        debugger;
        e.preventDefault();
        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('mailing-create__tabs-link_active');
          tabsContentBlocks[j].classList.remove('show');
        };
        this.classList.add('mailing-create__tabs-link_active');
        tabsContentBlocks[i].classList.add('show');
      })
    }
  }
  

  const tableMailingsReports = document.querySelector('.table_mailings-reports');

  if(tableMailingsReports) {
    const closeStatBlockBtn = document.querySelector('#stat-block-close');
    closeStatBlockBtn.addEventListener('click', function () {
      this.closest('.stat-block').remove();
    })
    const mainHeaderHeight = document.querySelector('.main-header').offsetHeight;
  }

 
})




$( function() {


  $('.mailing-preview__btn').each(function() {
    $(this).click(function() {
      $('.mailing-preview__btn').removeClass('mailing-preview__btn_active');
      $(this).addClass('mailing-preview__btn_active');
    })
  })

  if($(".block-types__item-title").length) {
    $('.block-types__item-title').click(function() {
      $(this).toggleClass('block-types__item-title_active');
      $(this).next('.block-types-collapsed').slideToggle('slow');
    })
  }
 


  //Сменим язык календаря на русский
  if($('.datepicker').length) {
    $.datepicker.setDefaults(
      {
      closeText: 'Закрыть',
      prevText: '',
      currentText: 'Сегодня',
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
          'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
          'Июл','Авг','Сен','Окт','Ноя','Дек'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
  });
  //Добавим код календаря
  var dateFormat = "mm/dd/yy",
      from = $( "#from" )
          .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 1
          })
          .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
          }),
      to = $( "#to" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
      })
          .on( "change", function() {
              from.datepicker( "option", "maxDate", getDate( this ) );
          }),
      mailingDate = $('.datepicker__input').datepicker();

  function getDate( element ) {
      var date;
      try {
          date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
          date = null;
      }

      return date;
  }

  }
      


});

