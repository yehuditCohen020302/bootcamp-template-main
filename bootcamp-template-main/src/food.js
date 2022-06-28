var dataOut;

function search() {
  console.log("Searching...");
  const options = {
    method: "GET",
    headers: {},
  };

  const prod = document.getElementById("prod").value;

  const req = fetch(
    ` https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${prod}`
  )
    .then((response) => response.json())
    .then((response) => {
      const data = response.result.records;
      console.log(data);
      return data;
    })

    .then((data) => {
      const containered = document.querySelector(".selectFood");
      containered.innerHTML = `items:	נמצאו ${data.length} תוצאות`;

      const container = document.querySelector(".selectCheck");
      container.innerHTML = `
	  <option>select the food</option>`;
      let option = " ";
	  if(data.length == 0) {
        alert("There is no such product");
      } 
	  else {
        // console.log(data);
		dataOut=data;
	}
      data.forEach((d) => {
        option += `<option>${d.shmmitzrach}</option>`;
        // console.log(d);
      });
      container.innerHTML += option;
    })
    
    .catch((err) => console.error(err));
}

function getValue() {
//   debugger;
  let checked = document.querySelector(".selectCheck").value;
  const container = document.querySelector(".getValues");
  container.innerHTML = "";
  let div = " ";
  dataOut.forEach((d) =>{
	 if(d.shmmitzrach == checked){
		div += `<p>${"total_sugars: " + d.total_sugars}</p>
			<p>${"sodium: " + d.sodium}</p>
			<p>${"potassium: " + d.potassium}</p>
			<p>${"food_energy: " + d.food_energy}</p>
			`;}
	 })
 
  container.innerHTML += div;
}

function Clear(){
  document.getElementById("prod").value='';
  search();
}
