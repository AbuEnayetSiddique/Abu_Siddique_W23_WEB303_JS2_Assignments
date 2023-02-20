//Abu Enayet Siddique
//0826188
//Assignment 3



// First Method - getJson
function jsonMethod(){$.getJSON("team.json").done( function(data){
    $.each(data, function( key, value){
       
        $('#team').append('<h2> ' + value.name +' </h2>',
        '<h5> '+ value.position +' </h5>', '<p>  '+value.bio+'</P>') 
 
    })
     
})}


// Second Method - ajax
function ajaxMethod(){$.ajax({ dataType: "json", url: "team.json", type: "GET",

  // Callback function to display the content if it successfully retrieved
  beforeSend: function() {                              
    $('#team').append("<h1>LOADING...</h1>") ;   
  },

  complete: function() {                               
    $('#team').hide(3000);                              
  },

  success: function (data){ 
    $('#content').append('<div id="newteam"></div>');
    $('#newteam').hide();

    // Each function to iterate the data
    $.each(data, function  ( key, value){
        $('#newteam').append(
            '<h2>' + value.name + '</h2>',  '<h5>'+  value.position + '</h5>',
            '<p>'+  value.bio + '</p>',
            )
    })
        // Delay 3 Second to display before it is removed and replaced
        setTimeout (function(){
     $('#newteam').show(200);
    }, 3000);
     
  },

  // Callback function to display content if unsuccessful
  error: function(){
    $('#content').append('<div id="error"></div>')
    $('#error').hide();
        $('#error').append("The content could not be retrieved");
        setTimeout (function(){
          $('#error').show(200);
        }, 3000);
    }
  }
  ); 
}

    $(document).ready(function() {
      ajaxMethod() ;
    })

