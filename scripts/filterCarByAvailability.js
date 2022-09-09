function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

 

  // Tempat penampungan hasil
  let result = [];
 
  // Tulis code-mu disini

  for(i = 0; i < cars.length; i++){
    if(cars[i].available == true){
      result.push(cars[i])
    }
  }
  
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
