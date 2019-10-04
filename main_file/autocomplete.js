$(document).ready(function(){
//jquery autocomplete
$.ajaxSetup({ cache: false });


//for unchecked form
$('#searchtext').keyup(function(){
  console.log("hello");
 $('#result').html('');
 $('#state').val('');
 var searchField = $('#searchtext').val();
 var expression = new RegExp(`^${searchField}`, 'gi');
 $.getJSON('json/location.json', function(data) {

console.log("hi2");
console.log(data);

  $.each(data, function(key, value){

   if (value.name.search(expression) !== -1 || value.capital.search(expression) !== -1)
   {

    $('#result').append('<li class="list-group-item link-class ">'+value.name+' | <span>'+value.capital+'</span><i style="padding-left:40px;"><ion-icon name="md-pin"></ion-icon></i></li>');

   }

  });

  //remove the result
    if (searchField.length === 0) {

     $("#result").hide();
     $("result").append("");
    }

    else{
       $("#result").show();
    }

    //remove the result
 });
});



$('#result').on('click', 'li', function() {
 var click_text = $(this).text().split('|');
 $('#searchtext').val((click_text));
 $("#result").html('');
});
});
