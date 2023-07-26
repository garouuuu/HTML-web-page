console.log("hello");

let btn = document.getElementById("XRHSTHS");
let div = document.getElementById("forma");
let div2 = document.getElementById("DIAXIRISI");
let div3 = document.getElementById("back");
let div4 = document.getElementById("form");
let div5 = document.getElementById("arxiki");
let div6 = document.getElementById("alert");
let div7 = document.getElementById("forma2");

btn.addEventListener('click', () =>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
        div5.style.display = 'none';
    }else {
        div.style.display = 'none';
        div2.style.display = 'none';
        btn.style.display = 'none';
    }

});

div2.addEventListener('click', () =>{
  div5.style.display = 'none';
  div7.style.display = 'block';
});

div.addEventListener('click', () =>{
    div.style.display = 'none';
});

div3.addEventListener('click', () =>{
    div.style.display = 'none';
    div4.style.display = 'none';
    div6.style.display = 'none';
    div5.style.display = 'block';
    div7.style.display = 'none';
});


function showForm() {
    document.getElementById("form").style.display = "block";
  }

      function validateForm() {
    var x = document.forms["myForm"]["usr"].value;
    var y = document.forms["myForm"]["pass"].value;
    var z = document.forms["myForm"]["email"].value;
    if (!validateUsername()) {
      return false;
    }
    if (x == "" || y == "" || z == "") {
      document.getElementById("alert").style.display = "block";
      return false;
    }else{
      document.getElementById("form").action = "DOKIMI HTML (2).htm";
      document.getElementById("form").method = "post";
      return;
    }
}
      


function validateUsername() {
  var username = document.forms["myForm"]["usr"].value;
  var hasCapital = false;
  var hasSymbol = false;
  
  // Check for at least 8 characters
  if (username.length < 8) {
    alert("ΤΟ ΟΝΟΜΑ ΧΡΗΣΤΗ ΠΡΕΠΕΙ ΝΑ ΕΧΕΙ ΤΟΥΛΑΧΙΣΤΟΝ 8 ΧΑΡΑΚΤΗΡΕΣ.");
    return false;
  }
  
  // Check for at least one capital letter
  for (var i = 0; i < username.length; i++) {
    if (username[i] === username[i].toUpperCase() && username[i] !== username[i].toLowerCase()) {
      hasCapital = true;
      break;
    }
  }
  if (!hasCapital) {
    alert("ΤΟ ΟΝΟΜΑ ΧΡΗΣΤΗ ΠΡΕΠΕΙ ΝΑ ΕΧΕΙ ΤΟΥΛΑΧΙΣΤΟΝ 1 ΚΕΦΑΛΑΙΟ ΧΑΡΑΚΤΗΡΑ.");
    return false;
  }
  // Check for at least one symbol
  for (var i = 0; i < username.length; i++) {
    if (username[i].match(/[!@#$%^&*(),.?":{}|<>]/)) {
      hasSymbol = true;
      break;
    }
  }
  if (!hasSymbol) {
    alert("ΤΟ ΟΝΟΜΑ ΧΡΗΣΤΗ ΠΡΕΠΕΙ ΝΑ ΕΧΕΙ ΤΟΥΛΑΧΙΣΤΟΝ 1 ΣΥΜΒΟΛΟ (π.χ. #$*&@).");
    return false;
  }
  // Input is valid

  return true;
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//FETCH APO DATABASE DEDOMENA GIA USER =

const username = 'cleogeo'; // Replace with the username you want to query

        fetch(`getUserInfo.php?username=${username}`)
            .then(response => response.json())
            .then(data => {
                const userInfoDiv = document.getElementById('user-info');  // TO ID (DEN UPARXEI MEXRI STIGMHS GRAMMENO)
                userInfoDiv.innerHTML = `
                    <p>Username: ${data.username}</p>
                    <p>Email: ${data.email}</p>
                    <p>Location: ${data.location}</p>
                    <!-- Add other user information fields here -->
                `;
            })
            .catch(error => console.error('Error fetching user information:', error));
