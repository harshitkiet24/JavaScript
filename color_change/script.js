const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  //console.log(button)
    button.addEventListener('click',function(e){
      //console.log(e);
      //console.log(e.target);
      switch(e.target.id){
      case 'grey':
        //body.style.backgroundColor = 'grey';
        body.style.backgroundColor = 'pink';
        break;
      case 'white':
        body.style.backgroundColor = 'brown';
        break;
      case 'blue':
        body.style.backgroundColor = 'red';
        break;
      case 'yellow':
        body.style.backgroundColor = 'green';
        break;
      default:
        body.style.backgroundColor = 'magenta';
      }
    });
});