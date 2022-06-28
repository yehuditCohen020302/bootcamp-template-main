var productsList;
var productsNames;
var autocomplete;
var autocomplete_result;

function importAllProducts(){
  console.log("Searching...");
  const options = {
    method: "GET",
    headers: {},
  };

  const req = fetch(
    ` https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=4633`
  )
    .then((response) => response.json())
    .then((response) => {
      productsList = response.result.records;
      console.log(productsList);
      return productsList;
    })
    .then((data) => {
      const containered = document.querySelector(".selectFood");
      containered.innerHTML = `ישנם סך הכל ${data.length} מוצרים`;

      const container = document.querySelector(".selectCheck");
      container.innerHTML = `
	  <option>select the food</option>`;
      let option = " ";
	  if(data.length == 0) {
        alert("There is no products");
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
    .then(()=>addAutocomplete())
    
    .catch((err) => console.error(err));
}

function addAutocomplete(){
  productsNames=productsList.map(product =>product.shmmitzrach)
  autocomplete=document.getElementById('searchProduct');
  autocomplete_result=document.getElementById('autocomplete_result');

  autocomplete.addEventListener("keyup", updPopup);
  autocomplete.addEventListener("change", updPopup);
  autocomplete.addEventListener("focus", updPopup);
}

function popupClearAndHide() {
  autocomplete_result.innerHTML = "";
  autocomplete_result.style.display = "none";
}

function updPopup() {
  if(!autocomplete.value) {
    popupClearAndHide();
    return;
  }
  var a = new RegExp("^" + autocomplete.value, "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < productsNames.length; x++) {
    if(a.test(productsNames[x])) {
      c = true;
      var d = document.createElement("p");
      d.innerText = productsNames[x];
      d.setAttribute("onclick", "autocomplete.value=this.innerText;autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
      b.appendChild(d);
    }
  }
  if(c == true) {
    autocomplete_result.innerHTML = "";
    autocomplete_result.style.display = "block";
    autocomplete_result.appendChild(b);
    return;
  }
  popupClearAndHide();
}

function search() {
  console.log("Searching...");
  const productName=document.getElementById("searchProduct").value;
  const data=productsList.filter(p=>p.shmmitzrach.includes(productName));
      const containered = document.querySelector(".selectFood");
      containered.innerHTML = `נמצאו ${data.length} מוצרים`;

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
  document.getElementById("searchProduct").value='';
  importAllProducts();
}



