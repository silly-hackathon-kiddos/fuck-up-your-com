window.addEventListener('contextmenu', function(event){
    event.preventDefault();
    window.location.href = event.srcElement.href;
  });
  
  window.addEventListener('click', function(event){
    alert('Who needs a left click anyway?');
    event.preventDefault();
  
    return false;
  });