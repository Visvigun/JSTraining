// Basics
// Variable Naming

{
    let newNumber = 1
  }


  {
    const number = 1;
    number = 2
  }

  {
    let number = 1;
    number = 2;
    return number;
  }

  {
    let name = "visvigun"
    return typeof name
  }
  "string"

  {
    let numbers=1
    return typeof numbers
  }
  "number"

  {
    let objects={name:"sathish"}
     return typeof objects
  }
  "object"

  {
    let data_type_undefined;
    return typeof data_type_undefined;
  }
  "undefined"

  {
    let data_type_null = null;
    return typeof data_type_null;
  }
  "object"

  {
    let is_data = true;
    return typeof is_data;
    
  }
  "boolean"

  {
    //arthimetic operator - ADD
    let x =  1 + 2 
    // subtract
    x = 2 - 1
    return x
  }
  1

  {
    //multiplication
    let a = 2*3
    //return a
  
  let r = 10 % 4
  return r
  }
  2

  {
    // assignment operators
    // ADD
    let x = 5;
    x += 1; // x = x + 1
    return x
  }
  6

  {
    // 	Exponentiation **
     // 8*8*8*8 multiple
     let ss=8**4
   return ss
   }
   4096

   {
    let note_price = 50;
    let pencil_price = 500;
    // return max price
    //return note_price > pencil_price;
  
    let laptop1_name = "ASUS"
    let laptop2_name = "DELL"
    // check laptop names are same
    //return laptop1_name == laptop2_name
  
    let note1_price = 50
    let note2_price = '50'
    //return note1_price == note2_price
    //return note1_price === note2_price
  
    let is_laptopm_names_same = laptop1_name == laptop2_name
    return !is_laptopm_names_same
   // return is_laptopm_names_same ? "names are same" : "names are different"
  
  
    // check laptop names are same and note price is greater
   // return laptop1_name == laptop2_name && note_price > pencil_price
  }
  true

  {
  let mark = inputs.mark
     let grade = " " ;

  
  // mark 90+ return A, 70 to 90 return B, 50 to 70 return C, below 50 return D
  if(mark <= 100 && mark>91){ // 91 - 100
    // SMS to student about the grade
     grade ="A"
  }
   else if(mark<=90 && mark>=71){ //90 - 71
       // SMS to student about the grade
      grade ="b"
    }
 else if (mark<=70 && mark>51){ // 51 - 70
         // SMS to student about the grade
        grade="c"
      }
   else {
         // SMS to student about the grade
           grade="d"
        }
 
  return grade
  
}

//-------//

{
  let mark = inputs.mark
     let grade = " " ;

  
  // mark 90+ return A, 70 to 90 return B, 50 to 70 return C, below 50 return D
  if(mark <= 100 && mark>91){ // 91 - 100
    // SMS to student about the grade
     grade ="A"
    
  } else {
    if(mark<=90 && mark>=71){
      grade="B"
    }
    
    else {
       if(mark<=70 && mark>=51 ){
      grade="C"
      }
      else {
        grade="D"
      } 
    }
  }
  
  return grade
  }

  //----------//

  {
    let mode;
    // return "eco mode" if speed is less than 40 , return "comfort mode" is speed is less than 60, return "sports mode" on speed is more than 60
    if(speed>60){
      return "sports mode";
    }
      if (speed<=60 && speed>40){
      return "comfort mode";
      }
    if (speed<40){
      return "eco mode";
      }
        
    
  }
  
  //------------//

  //viewof ingredents = Inputs.form({
    //first: Inputs.text({label: "First ingredent"}),
    //second: Inputs.text({label: "Second ingredent"})
  //})

  {
    let first_ing = ingredents.first
    let second_ing = ingredents.second
    let output=""
    if (first_ing=="bread" && second_ing =="chiken" ){
       output="Pizza"
    }
    else if ( first_ing=="bun" && second_ing=="mutton"){
      output="Burger"
    }
    else if ( first_ing=="spicy"&& second_ing=="mutton"){
      output="Biryani"
    }
    else if (first_ing="spiral"&&second_ing=="chiken" ) {
      output="Noodles"
    }
    else {
      output="fill the food"
    }
    return output
  }

  //---------------//


  
  //viewof components = Inputs.form({
    // first: Inputs.text({label: "First component"}),
    // second: Inputs.text({label: "Second component"})
  //})

  {
    let first_ing = components.first
    let second_ing = components.second
    
  if(first_ing=="13inch" && second_ing=="laptop"){
   return "macbookair"
  }
    else if(first_ing=="14inch" && second_ing=="laptop"){
      return "macbookpro"
    }
    else if(first_ing=="15inch" && second_ing=="windows"){
      return "asus"
    }
    else{
      return "lenovo"
    }
  
  }


  //--------------//


  //viewof max_of_two_numbers = Inputs.form({
    // num1: Inputs.number([0, Infinity], {step: 1, label: "Number 1", placeholder: ""}),
    // num2: Inputs.number([0, Infinity], {step: 1, label: "Number 2", placeholder: ""})
  //})

  {
    let first_num = max_of_two_numbers.num1
    let second_num = max_of_two_numbers.num2
    // print the greater number eg: first_num = 52, second_num = 30 then return 52
    if(first_num>second_num){
     return first_num;
    }
      else {
      return second_num;
      }
    }

    {
      let first_num = max_of_two_numbers.num1
      let second_num = max_of_two_numbers.num2
      //print the multiplication of two number eg: first_num = 50, second_num = 30 then return 1500
    
    
        return first_num * second_num;
    
    }

    {
      let first_num = max_of_two_numbers.num1
      let second_num = max_of_two_numbers.num2
      // print the reminder of dividing first by second eg: first_num = 52, second_num = 20 then return 12
    
      // let a = first_num
      // let b = second_num
    
      return first_num % second_num 
      
    }


    {
      let first_num = max_of_two_numbers.num1
      let second_num = max_of_two_numbers.num2
      // step 1 add the two number
      // step 2 subtract the result by first number
      // step 3 multiply the result by second number
      // step 4 divide the result by first number
      // return the end result
    
     
    // let result =""
    
      let a = first_num + second_num
      
      let b= a-first_num
    
      let c= b * second_num
      let d = c / first_num
      return d
      
       
    }

    

    //-------------//


    //viewof calc_inputs = Inputs.form({
      // value1: Inputs.number([0, Infinity], {step: 1, label: "Value1", placeholder: ""}),
      // value2: Inputs.number([0, Infinity], {step: 1, label: "Value2", placeholder: ""}),
      // action: Inputs.select(["add", "subtract", "multiply", "divide", "modulos"], {label: "Select action"}),
    //})


    {
      let value1 = calc_inputs.value1
      let value2 = calc_inputs.value2
      let action = calc_inputs.action
      if(action === "add"){
        return value1 + value2
      }
      else if(action === "subtract"){
      return value1 - value2
    }
     else if(action === "multiply"){
      return value1 * value2
    }
     else if(action === "divide"){
      return value1 / value2
    }
     else if(action === "modulos"){
      return value1 % value2
     }
     }


     //
     {
      let unit = unit_convertor.unit
      let km = unit_convertor.value
      // conversion 1000 meters = 1 km , 3280.84 feet = 1 km, 100000 cm = 1 km
      
      // Step 1 check unit input is cm
      // Step 2 if unit is cm, return value * 100000
      // Step 3 check unit input is m
      // Step 4 if unit is m, reurn value * 1000
      
      if (unit == "cm"){
        return km*100000
      }
      if( unit=="m"){
        return km*1000
      }
      if ( unit=="feet"){
        return km*3280
      }
    
      
    }

    //-------------//


    random_number = Math.floor(Math.random() * 1000)

    //---------------//

    {
      // create a new array which contains values less than limit from array_input
      let limitArray = [];
    
      for(var i=0;i<=array_input.length-1;i++){
        if(array_input[i]<5){
          limitArray.push(array_input[i])
        }
        
      }
        return limitArray
      }

      //-------------//




  