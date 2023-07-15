function displayCards(){
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the template of the card
        card +=`
        <div class="petCard">
            <h5>Name: ${pet.name}</h5>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
    }
    //insert the card into the HTML
    document.getElementById("pets").innerHTML=card;
}


function displayTable() {
    let tr="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tr+=`
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.type}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.contact}</td>

            <td><button class="btn-del"onclick="deletePet(${pet.id})"><i class="fa-solid fa-trash" style="color: #ffc857;"></i></button></td>
        </tr>
        `;//create the table row
    };
    document.getElementById("petTable").innerHTML=tr;
}