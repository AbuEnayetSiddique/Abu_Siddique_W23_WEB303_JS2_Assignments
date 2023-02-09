// WEB303 Assignment 2

$(document).ready(function() {
  
    var xhr = new XMLHttpRequest();

    $('#prospect').click(function(){
        xhr.onload = function (){
            if (xhr.status === 200){
                document.getElementById('content').innerHTML = xhr.responseText;
                $("#content").hide();
                $("#content").slideDown();
            }
        }
        xhr.open("GET", 'prospect.html', true);
        xhr.send();
    })
    
    

    $('#convert').click(function(){
        xhr.onload = function (){
            if (xhr.status === 200){
                document.getElementById('content').innerHTML = xhr.responseText;
                $("#content").hide();
                $("#content").slideDown();
            } 
        }
        xhr.open("GET", 'convert.html', true);
        xhr.send();
    })
     
     

    $('#retain').click(function(){
        xhr.onload = function (){
            if (xhr.status === 200){
                document.getElementById('content').innerHTML = xhr.responseText;
                $("#content").hide();
                $("#content").slideDown();
            }
        }
         xhr.open("GET", 'retain.html', true);
         xhr.send();
    })
     
})