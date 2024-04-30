const URL = "http://universities.hipolabs.com/search?country=United+States";
const getfacts = async () => {
  console.log("getting data... ");
  let response = await fetch(URL);
  console.log(response.status);
};
