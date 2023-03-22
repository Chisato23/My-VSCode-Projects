
const getText = async function (){

const response = await fetch('https://catfact.ninja/fact');
const data = await response.json();
return data

// document.getElementById("cat").innerHTML = data;

};

getText().then(data=> console.log('resolved',data));