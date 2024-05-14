//website with free API https://apipheny.io/free-api/


//function
function subNumbers(nbr1, nbr2){
  return nbr1-nbr2;
}

//annonymous function
let sumNumber = function(nbr1, nbr2){
  return nbr1 + nbr2;
};

//arow function
let productNumbers = (nbr1, nbr2) =>{
  return nbr1*nbr2;
};



function simpleFetch(url){
  fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Något gick fel - ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data hämtad:', data);
        return data;
    })
    .catch(error => {
        console.error('Fetch-fel:', error);
    });
}


function advancedFetch(url){
  fetch(url, {
    method: 'POST',  // HTTP-metod (GET, POST, PUT, DELETE, etc.)
    headers: {
        'Content-Type': 'application/json',  // Typ av data som skickas (JSON, text, etc.)
        'Authorization': 'Bearer TOKEN'       // Autentiseringsheader, om nödvändigt
    },
    body: JSON.stringify(data)  // Data som ska skickas (endast för POST, PUT, etc.)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch-fel:', error));
}

//////////////////

//not synchronised example
let notSyncResp = fetch("https://catfact.ninja/fact");
console.log(notSyncResp);


//synchronised example

//let apiResponse = simpleFetch("https://catfact.ninja/fact");
//console.log(apiResponse);
