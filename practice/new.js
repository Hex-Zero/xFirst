$(document).ready(() => {
    const $practiceSign = $('#practiceSign');
    const $navDropdown = $('#jsarea');
  
    $practiceSign.on('mouseover', () => {
      $navDropdown.show();
    })
    
    $navDropdown.on('mouseleave', () => {
      $navDropdown.hide();
    })
  })
 
//alert("What are you doing here?")
let a = "";
function con(text) {
    a=a+text + "\n\n" ;
    document.getElementById("jsarea").value = a;
}
const source = document.getElementById('greet').innerHTML;
const template = Handlebars.compile(source);
const context = {
  greeting : "Handlebar over here! "
};
const compiledHtml = template(context);
// ^^^ Handlebar setup above ^^^
const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml;

function changeImage(a) {
    document.getElementById(a).style.height="12rem";
    document.getElementById(a).style.width="auto";
    return true;
}
function changeColor(){
    document.getElementById("h3s").style.color="rgb(250, 3, 197)";
    document.getElementById("h3s").firstChild.nodeValue="Happy!";
    return true;
}
function changeAgain(){
    document.getElementById("h3s").style.color="gray";
    document.getElementById("h3s").firstChild.nodeValue="Sad...";
    return true;
}
function hideImg(){
    document.getElementById("Angel_TTT21").style.visibility=(document.formex.hideI.checked) ? "hidden" : "visible";
    document.getElementById("Angel_TTT2").style.visibility=(document.formex.hideI.checked) ? "hidden" : "visible";
    return true;
}
function showP() {
    if(document.formex.firstp.checked &&document.formex.secondp.checked &&document.formex.thirdp.checked ){
        document.formex.firstp.setAttribute("disabled", "");
        document.getElementById("secondp").setAttribute("disabled", "");
        document.getElementById("thirdp").setAttribute("disabled", "");
    }
    else{document.getElementById("first").style.visibility=(document.formex.firstp.checked) ? "visible" : "hidden";
    document.getElementById("second").style.visibility=(document.formex.secondp.checked) ? "visible" : "hidden";
    document.getElementById("third").style.visibility=(document.formex.thirdp.checked) ? "visible" : "hidden";
    }return true;
}
function uncheck(){
    document.formex.firstp.disabled = false;
    document.formex.secondp.disabled = false;
    document.formex.thirdp.disabled = false;
}

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
   document.formex.mousex.value = x + " px";
   document.formex.mousey.value = y + " px";  
  }
function clicki(event){
    var x = event.clientX;
    var y = event.clientY;
    document.formex.onclick.value = "X : " + x+"px Y : " + y+"px";
}
function clickkey(event){
 KeyClicked = String.fromCharCode(event.charCode);
 document.formex.keypress.value = KeyClicked;
}
function mousekey(event){
    switch(event.which){
        case 1: document.formex.mousekey.value = "Left";
        break;
        case 2: document.formex.mousekey.value = "Middle";
        break;
        default: document.formex.mousekey.value = "Right";
        break;
    }
}
function cColor(a){
    if(a == "black"){
    const arr = ["html","jsarea","textf","textf1","textf2","textf3","textf4"];
    for(let i = 0; i < arr.length; i++){
    document.getElementById(arr[i]).style.color=(document.formex.CColor.checked)?"white": "black";
    document.getElementById(arr[i]).style.backgroundColor =(document.formex.CColor.checked)?"black":"white";
   }
}else if(a == "red"){
    const arr = ["html","jsarea","textf","textf1","textf2","textf3","textf4"];
    for(let i = 0; i < arr.length; i++){
    document.getElementById(arr[i]).style.color=(document.formex.CColor1.checked)?"red":"white";
    document.getElementById(arr[i]).style.backgroundColor =(document.formex.CColor1.checked)?"white": "red";
   }
}
    return true;
  
}









const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers() {return this._courses.appetizers},
    get mains() {return this._courses.mains},
    get desserts() {return this._courses.desserts},
    set appetizers(appetizerIn){this._courses.appetizers=appetizerIn},
    set mains(mainsi){this._courses.mains=mainsi},
    set desserts(dessertsi){this._courses.desserts=dessertsi},
    get courses(){
      return {
      appetizers:this.appetizers,
        mains:this.mains,
        desserts:this.desserts,
      };
    },addDishToCourse(courseName,dishName ,dishPrice){
      const dish= {
        name:dishName,
        price:dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse("appetizers");
      const main = this.getRandomDishFromCourse("mains");
      const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizer.price + main.price +dessert.price;
      return `Your meal is ${appetizer.name},${main.name} and ${dessert.name}, and the total price is ${totalPrice}`;
    },
    order(courseName,dishname){
        const dishes = this.courses[courseName];
        const fIndex = dishes.findIndex(x => x.name == dishname);
        return dishes[fIndex];
      },
   orderOwn(a,m,d){
    const appetizer = this.order("appetizers",a);
    const main = this.order("mains",m);
    const dessert = this.order("desserts",d);
       const totalPrice = appetizer.price + main.price +dessert.price;
       return `Your meal is ${appetizer.name},${main.name} and ${dessert.name}, and the total price is ${totalPrice}`;
    }
  };
     
  menu.addDishToCourse('appetizers', "Salad", 4.00);
  menu.addDishToCourse('appetizers', "Wings", 4.45);
  menu.addDishToCourse('appetizers', "Fries", 2.00);
  menu.addDishToCourse("appetizers","Bread With Cheese", 3.30);
  
  menu.addDishToCourse('mains', "Steak", 10.20);
  menu.addDishToCourse('mains', "Salmon", 6.30);
  menu.addDishToCourse('mains', "tofu", 3.70);
  
  menu.addDishToCourse('desserts', "Ice ceram", 5.00);
  menu.addDishToCourse('desserts', "Cake", 4.30);
  menu.addDishToCourse('desserts', "Tea", 1.00);
  let meal = menu.generateRandomMeal();
  con(meal);
  //meal = menu.orderOwn("Salad","Salmon","Cake");
 //const indexofsalad = menu._courses.appetizers.findIndex(x => x.name == "Fries");
 
  con(menu.orderOwn("Bread With Cheese","Steak","Cake"));


  const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)
