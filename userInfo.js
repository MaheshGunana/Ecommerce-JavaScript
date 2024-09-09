//This is for Model

function OrderClick() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('userMobile').value;
    const paymentUPI=document.getElementById('paymentUPI');
    const paymentCard=document.getElementById('paymentCard');

    document.getElementById('lblName').innerHTML = name;
    document.getElementById('lblEmail').innerHTML = email;
    // document.getElementById('lblPassword').innerHTML = password;
    document.getElementById('lblMobile').innerHTML = mobile

    if(paymentUPI.checked){
        document.getElementById('lblPayment').innerHTML='UPI';
    }else if(paymentCard.checked){
        document.getElementById('lblPayment').innerHTML='Card';
    }
}

//This is for form

const changeCase = () => {
    const name = document.getElementById('userName').value;
    document.getElementById('userName').value = name.toUpperCase()
}

const verifyEmail=()=>{
    const email = document.getElementById('userEmail').value;
    const emailMessage=document.getElementById('emailMessage');

    if(email.endsWith('@gmail.com')){
        emailMessage.innerHTML=' '
    }else{
        emailMessage.innerHTML='Enter Your Valid Email'
    }          
}

const VerifyMobile=()=>{
    const mobile = document.getElementById('userMobile').value;
    const mobileMessage = document.getElementById('mobileMessage');
    
    if(mobile.length==10){
        mobileMessage.innerHTML=''
        document.getElementById('formButton').disabled=false;

    }else{
        mobileMessage.innerHTML='Plz Enter Your Valid Mobile Number'
    }
}

// const VerifyName=()=>{
//     var userName=document.getElementById('userName').value;
//     localStorage.setItem('name',userName);
// }
   