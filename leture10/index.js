const URL = "http://universities.hipolabs.com/search?country=United+States";

const factPara = document.querySelector("#data");
const btn = document.querySelector("#btn");

const getfacts = async () => {
  console.log("getting data... ");
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json();
  let universities = data.map((university) => university.name);
  factPara.innerText = universities.join( " name ",", ");

 // factPara.innerText = universities.text;
};
btn.addEventListener("click", getfacts);
