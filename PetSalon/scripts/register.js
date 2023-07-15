let petSalon = {
name: "The Fashion Pet",
phone: "619-555-7564",
address: {
    street: "Palm Ave",
    number: 369,
    zip: 92154,
},
hours: {
    open: "9:00am",
    close: "6:00pm",
},
pets: [],
contact:[]
};

function displayPetNames() {}
//use elementID ... same as the practice but with OBJ.
    

function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`
    <label>
    ${petSalon.name} it opens at
    ${petSalon.hours.open} to
    ${petSalon.hours.close}
    </label>
    `;
}

function displayNumberPets() {
    document.getElementById("numberofPets").innerHTML=petSalon.pets.length;
}

function displaySalonInfo() {
document.getElementById("salonInfo").innerHTML = `
    <p> Welcome to the ${petSalon.name}</p>
    <p>.....${petSalon.phone} </p>
    <p>Address: ${petSalon.address.number} ${petSalon.address.street}, ${petSalon.address.zip}</p>
    <p>Hours: ${petSalon.hours.open} - ${petSalon.hours.close}</p>
`;
}

//Create the CONSTRUCTOR function ... creates parameters for an obj that you can add
//this is the CONSTRUCTOR:it generates objects when called

let c=0;
function Pet(n, a, g, t, b, s, contact) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.type = t;
    this.breed = b;
    this.service = s;
    this.contact = contact;
    this.id=c++;
}


//GLOBAL VARIABLES FOR THE HTML INPUTS!!! ... (gets needed data from user input)
// insert id names within HTML so you capture data from user (used in form)
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputContact = document.getElementById("txtContact");

let notifications = document.getElementById("notifications");



function isValid(aPet){
    let validation = true;
    //clear input styles
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    notifications.classList.remove("error");
    notifications.innerHTML="";

    if(aPet.name == ""){
        //if you get here, not valid
        validation=false;
        //modify input style
        inputName.classList.add("error");
        notifications.innerHTML=`Please add a name!`;
        notifications.classList.add("error");
    }

//validate the service
    if(aPet.service ==""){
        validation=false;
        inputService.classList.add("error");
    }
    return validation;
}

//this is where we create the new objects using the constructor function
function register(){
    console.log("Register a new pet");
    //create new pet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputType.value,inputBreed.value,inputService.value,inputContact.value);
    //display the new object in the console
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayNumberPets();
        // displayCards();
        displayTable();
        clearForm();
    }
}
























//create a function that will CLEAR THE FORM (clearForm function)
function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputType.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputContact.value = "";
}




function deletePet(idToRemove){
    console.log("Deleting..." + idToRemove);
//remove element from the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(idToRemove === pet.id){
            var deleteIndex=i; //to know the positions on the array
            break;
        }
    }
    petSalon.pets.splice(deleteIndex,1);//remove the pet from the array
//Remove it from HTML
    document.getElementById(idToRemove).remove();
    displayNumberPets();
}




function init() {
  //hook events


  //EXECUTE THE FUNCTIONS HERE !!!
// displaySalonInfo();
displayFooterInfo();


let scooby = new Pet("scooby",3,"male","dog","bulldog","grooming",6195554321);
let dexter = new Pet("dexter",3,"male","dog", "poodle","vaccines", 5551234567);
petSalon.pets.push(scooby,dexter);
displayNumberPets();

// displayCards();
displayTable();
}

window.onload = init;
