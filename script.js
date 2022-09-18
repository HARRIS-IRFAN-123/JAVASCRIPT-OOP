// WE MAKE A PROGRAM THAT GETS THE USERNAME:_
const Intro = {
    FirstName : "HARRIS-IRFAN",
    LASTNAME  :  "IRFAN ASHRAF",
    get getNme(){
        return this.FirstName;
        return this.LASTNAME;
    }
    
}
console.log(Intro.FirstName);
console.log(Intro.LASTNAME);
// WE MAKE A PROGRAM THAT SETS THE PROGRAM NAME;-
const student = {
    firstName: 'AWAIS',
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); 
student.changeName = 'HAMZA';
console.log(student.firstName);

// NOW WE CREATING THE ARRAY:-
    const ARRAY = ["Harris","MOHSIN", "AWAIS"];
    console.log(ARRAY);

    // NOW WE MAKE ARRAY AND ACCESSING ITS ELEMENTS:-
    
    const ARRAY1 = [
        "Awais",
        12,
        30,
        "SHAHBAZ",
        10,
        15,
        "MOHSIN",
        9,
        19,
        "MUAZZ",
        13,
        30,
        "GHAFFAR",
        30,
        14,
        80
    ];
    console.log(ARRAY1[10]);
    //NOW WE MAKE ARRAY AND CHANGE ITS VALUE;
    const myTeahers = [
        "SIR FARHAN",
          "SIR SADD",
          "SIR ADIL",
          "SIR TAHIR",
          "SIR TOQUEER",
          "SIR SAFFIR",
          "SIR IMRAN",
          "SIR   ASJAD",
          "SIR  RANA ALI",
          "SIR RIZWAN HAIDER",
          "SIR MUNAWAR WASEEM",
          "SIR KHADIM HUSSAIN",
          "SIR WAQAR UL HASSAN"
 ];
 myTeahers[3] = "SIR GM CHATTA";
    console.log(myTeahers);

    // NOW WE MAKE AN ARRAY AND REMOVE ITS LAST ELEMENT:_
 const FODDITEMS = [
    "BURGER",
    "SHWARAMA",
    "PIZZA",
    "SOUP",
    "NODDLES",
    "RICE",
 ]
  FODDITEMS.pop();
  console.log(FODDITEMS);
  FODDITEMS.shift();
  console.log(FODDITEMS);
  // NOW WE START THE PRATICAL OF THE ARRAY METHODS:-
  // 1)- ARRAY.LENGTH MENOD:_
  // IT RETURNS THE NUMBER OF ELEMENTS IN AN ARRAY
  const  FRIENDS = [
    "SHAHZAIB",
    "ALI",
    "AHMED",
    "WAQAS",
    "BILAL",
    "MOIZ",
    "ATEEQ"
  ]
  console.log(FRIENDS.length);

  //2)-ARRAY.REVERSE METHOD:_
  // IT RETURNS AN ARRAY IN REVERSE ORDER:-
  const ProgrammingLanguages = [
    "HTML",
     "CSS",
     "JAVASCRIPT",
        "TAILWIND CSS",
        "BOOTSTRAP",
        "REACT JS",
        "NODE JS",
        "PYTHON",
        "RUBY",
  ]
  const reversedArray = ProgrammingLanguages.reverse();
  console.log("REVERSEDARRAY :",reversedArray);

  // 3)_ ARRAY.SORT METHOD :-
  // THIS METHOD SORTS THE ELEMENTS OF ARRAY:-
  const CARS = [
    "LAMBORGHINI",
    "BUGATTI",
    "MERCEDES",
      "BMW",
  ]
  const LIST = CARS.sort();
  console.log(CARS.sort());