document.getElementById('my-form').addEventListener('submit', function(){

    var name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
        })


    