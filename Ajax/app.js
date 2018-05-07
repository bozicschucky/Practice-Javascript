// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // OPEN
//   xhr.open('GET', 'data.txt', true);

//   // console.log('READYSTATE', xhr.readyState);

//   // Optional - Used for spinners/loaders
//   xhr.onprogress = function(){
//     console.log('READYSTATE', xhr.readyState);
//   }

//   xhr.onload = function(){
//     console.log('READYSTATE', xhr.readyState);
//     if(this.status === 200) {
//       // console.log(this.responseText);
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   }

//   // xhr.onreadystatechange = function() {
//   //   console.log('READYSTATE', xhr.readyState);
//   //   if(this.status === 200 && this.readyState === 4){
//   //     console.log(this.responseText);
//   //   }
//   // }

//   xhr.onerror = function() {
//     console.log('Request error...');
//   }

//   xhr.send();


//     // readyState Values
//     // 0: request not initialized 
//     // 1: server connection established
//     // 2: request received 
//     // 3: processing request 
//     // 4: request finished and response is ready


//   // HTTP Statuses
//   // 200: "OK"
//   // 403: "Forbidden"
//   // 404: "Not Found"
// }

document.getElementById('button1').addEventListener(
  'click',loadCustomer);

document.getElementById('button2').addEventListener(
  'click',loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
      <li>ID:${customer.id}</li>
      <li>Name:${customer.name}</li>
      <li>Company:${customer.company}</li>
      <li>Phone:${customer.Phone}</li>
      </ul>
      
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = ' ';
      customers.forEach(function (customer) {
        output += `
        <ul>
        <li>ID:${customer.id}</li>
        <li>Name:${customer.name}</li>
        <li>Company:${customer.company}</li>
        <li>Phone:${customer.Phone}</li>
        </ul>
        
        `;
        
      });

     
      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}