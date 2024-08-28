function ToggleCard() {
    const optCard = document.getElementById('optCard');

    if (optCard.checked) {
        document.getElementById('cardContainer').style.display = "block";
        document.getElementById('upiContainer').style.display = 'none'
    }
}

function ToggleUpi() {
    const optUpi = document.getElementById('optUpi');

    if (optUpi.checked) {
        document.getElementById('cardContainer').style.display = "none";
        document.getElementById('upiContainer').style.display = "block";
        document.querySelector('button').disabled=true; 
    }
}

function VerifyCard(){
    const cardNumber =document.getElementById('txtCard').value;
    const regex = /^\d{16}$/;
    if(cardNumber.match(regex)){
        document.getElementById('txtCvv').disabled=false;
        document.getElementById('txtCvv').focus()
       //document.getElementById('cardNumber').readOnly=true
    }
}

function VerifyCvv(){
    const cardCvv =document.getElementById('txtCvv').value;
    const regex1 = /^[0-9]{3}$/;
    if(cardCvv.match(regex1)){
        document.getElementById('lstExpiry').disabled=false;
        // document.getElementById('cardNumber').readOnly=true
    }
}

function VerifyExpiry(){
    document.querySelector('button').disabled=false;
}
function VerifyUPI(){
   //document.querySelector('button').disabled=true; 

    const UPI =document.getElementById('txtUpi').value;
    const atpos = UPI.indexOf('@');
    const domain=UPI.substring(atpos+1);
    if(atpos==10 && domain.length>=3){
        document.querySelector('button').disabled=false;  
    }else{
        document.querySelector('button').disabled=true; 
    }
    
}

var total,name
function bodyload(){
    username=sessionStorage.getItem('name');      //retrives the data (name) from the info.html
    total =sessionStorage.getItem('total'); //retrives the data (cart total) from the index.html
    console.log(username,total);
}
function AmountClick(){       
    
    const flag = confirm(`Hi , ${username} \n Are you sure your order want to be confirmed!`);
    if(flag){
        alert(` ${total*80} Rs. \n Amount is Debited From Your Account.`);  
    }else{
        alert('Try again later.')
    }
    console.log(username,total*80);
}