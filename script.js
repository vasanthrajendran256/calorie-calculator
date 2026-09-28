document.getElementById('submit').addEventListener('click', function() { 
    // Fix: changed .Value to .value
    const age = Number(document.getElementById('age').value);
     
    const height = Number(document.getElementById('height').value); 
    const weight = Number(document.getElementById('weight').value); 
    
    // Fix: Removed Number() because gender and activity are strings
    const gen = document.getElementById('gen').value; 
    const act = document.getElementById('act').value; 
      
  if (isNaN(age) || age < 15 || age > 100) {
    alert("Please enter a valid age between 15 and 100.");
    return;
  }
    
    let bmr = 0; 
    
    if (gen === 'Male') { 
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5; 
    } else{ 
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161; 
    } 
    
   let finalCalories = bmr;
    if (act === 'No Excercise') {
        finalCalories = bmr * 1.2;
    } else if (act === 'Excercise Sometimes') {
        finalCalories = bmr * 1.375;
    }  else if (act === 'Excercise Daily') {
        finalCalories = bmr * 1.725;
    } 
   

    document.getElementById('calorie').textContent = Math.round(finalCalories);
    document.getElementById('loss').textContent = Math.round(finalCalories-500);  
    document.getElementById('maintain').textContent = Math.round(finalCalories); 
    document.getElementById('gain').textContent = Math.round(finalCalories+500); 
});



 
