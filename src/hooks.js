import {useState} from 'react';


const usePasswordgenerator=()=>{
    const [password, setPassword]=useState("");
    const [errormessage, setErromessage]=useState("");

    let possiblepassword="", generatedpassword="";

   

    const generatepassword=(checkboxdata, length)=>{

        const selectedOption=checkboxdata.filter((checkdata)=>checkdata.state);
   
         if(selectedOption.length==0){
            setPassword("");
            setErromessage("select atlead one option");
            return ;
         }

    selectedOption.map((selectopt)=>{
        if(selectopt.title=="include Uppercase letters"){
            possiblepassword+="ABCDEFGHIKLMNOPQRSTVXYZ";
        }
        else if(selectopt.title=="include lowercase letters"){
            possiblepassword+="abcdefghijklmnopqrstuvwxyz"
        }
        else if(selectopt.title=="include numbers"){
            possiblepassword+="0123456789";
        }
        else if(selectopt.title=="include symbols "){
            possiblepassword+="@#%4^&*";
        }
    })



        for( let i=0;i<length;i++){
            let idx=Math.floor(Math.random()*possiblepassword.length)
            generatedpassword+=possiblepassword[idx];
        }
        console.log(possiblepassword);
        setPassword(generatedpassword);
        setErromessage("");
    }
  

    return {password, errormessage, generatepassword}
}

export default usePasswordgenerator;