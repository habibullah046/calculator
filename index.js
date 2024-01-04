let input=document.getElementById("input_number_box");
let btn=document.querySelectorAll("button");
let string="";
let btn_array=Array.from(btn);
btn.forEach(button=>{
    button.addEventListener('click',(num)=>{
        if(num.target.innerHTML == "="){
            string=eval(string);
            input.value=string;
        }
        else if(num.target.innerHTML == "AC"){
            string="";
            input.value=string;
        }
        else if(num.target.innerHTML == "C"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=num.target.innerHTML;
            input.value=string;
        }
        
    })
})