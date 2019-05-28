$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var state = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/find-by-state',
        data: state,
        success: function(data){
          location.reload();
        }
      });

      return false;

  });
});
