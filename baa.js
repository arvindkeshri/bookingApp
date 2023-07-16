document.getElementById('my-form').addEventListener('submit', function(){

    var name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
        })

let myObj = {
    name: document.getElementById('name').value,
     email : document.getElementById('email').value
    

}

let myObj_serializd = JSON.stringify(myObj);
console.log(myObj_serializd);

localStorage.setItem('myObj', myObj_serializd);
console.log(localStorage.getItem("myObj"));

myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);




    