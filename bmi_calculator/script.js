const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();
 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
 
  if(height <= 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
  } 
  else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
  } 
  else{
    const bmi = (weight/((height*height)/10000));
      if (bmi > 24.9) {
        result.innerHTML = `<span>${bmi.toFixed(2)}: overweight</span>`;
      }
      else if(bmi>=18.6 && bmi<=24.9){
        result.innerHTML = `<span>${bmi.toFixed(2)}: normal</span>`;
      }
      else{
        result.innerHTML = `<span>${bmi.toFixed(2)}: underweight</span>`;
      }
  }
});