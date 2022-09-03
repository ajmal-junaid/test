let nameVal;
let emailVal;
let subjectVal;
let msgVal;
let mobVal;
function isname(){
    console.log("name validated")
    console.log(nameVal+"namval")
  let name_x=document.getElementById("name").value
  let regex = /^[a-zA-Z ]{2,30}$/;
  
  if(regex.test(name_x))
  {
      document.getElementById("namee").innerHTML=""
      nameVal=true;
  }
  else{
      document.getElementById("namee").innerHTML= "Please Enter Characters"
      nameVal=false;
  }
  
   
}

  function isEmail(){
    console.log("email validated")
  let mail_x=document.getElementById("email").value
  let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(regex.test(mail_x))
  {
      document.getElementById("emaill").innerHTML=""
      emailVal=true;
  }
  else{
      document.getElementById("emaill").innerHTML= "<i>Enter Valid mail</i>"
      emailVal=false;
  }
}

function issubject(){
    let subject = document.getElementById("subject").value
    let lengthh = subject.length;
    console.log(lengthh);
    if(lengthh<3){
        document.getElementById("subjectt").innerHTML= "<i>Enter a subject</i>"
        subjectVal=false;
    }
    else{
        subjectVal=true;
        document.getElementById("subjectt").innerHTML=""
    }
}
function ismessage(){
    let message = document.getElementById("message").value
    let lengthhh = message.length
    console.log(lengthhh);
    if(lengthhh<3){
        document.getElementById("messagee").innerHTML= "<i>Enter a message</i>"
        msgVal=false
    }
    else{
        document.getElementById("messagee").innerHTML=""
        msgVal=true
    }
}

function isphone(){
  let number=document.getElementById("phone").value
  var regex = /^[0-9]+$/;
  var check = /^[0-9]{10}/;
  let length = number.toString().length;
  var result = number.match(check);
  
 
  if(regex.test(number) &&result!= null && length==10)
  {
      document.getElementById("phonee").innerHTML=""
     
      mobVal = true;
  }
  else{
      document.getElementById("phonee").innerHTML= "<i>Enter Valid Mobile</i>"
     
      mobVal = false;
  }
}

function isSubmit(){
    if(nameVal==true && emailVal==true && subjectVal == true && msgVal == true && mobVal == true){

        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxTTa6qW0w-Fugi1acjrNOPZE3dnwDlAr5OGM8gLqB3diS32fR5-8hdLqdntFNN0185/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
        
                }
            })
        })
    }
    else{
        alert("please enter proper details")
    }
    

}

