let titleEle = document.getElementById("title");
let jokeEle = document.getElementById("joke");
let buttonEle = document.getElementById("button");
const apikey="RtoNUa1FXJWAMu1GMdgCTA==py9vcupOVvuEgOhE";
const options ={
  method: 'GET',
  headers: {
    'X-Api-Key' : apikey,
  },
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {

  try {
    jokeEle.innerText="Updating..."
   buttonEle.disabled=true;
  const response = await fetch(apiurl,options);
  const data= await response.json();
  jokeEle.innerText=data[0].joke;
  buttonEle.disabled=false;
    
  } catch (error) {
     const num = document.querySelector("body");
     num.innerText="ERROR...OOPS NO INTERNET"
  }
   
}

buttonEle.addEventListener('click' , getJoke);

