// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
// import piggybank from '../images/piggy-bank.jpg';
// import '../css/style.css';
import { 
  checkDatabase, 
  populateChart,
  populateTable,
  populateTotal,
  sendTransaction,
} from './db';

// if ('serviceWorker' in navigator) {
//   const registration = runtime.register();
// }

let transactions = [];
let myChart;

fetch("/api/transaction")
  .then(response => response.json())
  .then(data => {
    // save db data on global variable
    transactions = data;
    populateTotal(transactions);
    populateTable(transactions);
    populateChart(transactions, myChart);
  });

document.querySelector("#add-btn").addEventListener("click", function(event) {
  event.preventDefault();
  sendTransaction(true, transactions);
});

document.querySelector("#sub-btn").addEventListener("click", function(event) {
  event.preventDefault();
  sendTransaction(false, transactions);
});

// const img = document.createElement('img');
// img.setAttribute('src', piggybank);
// document.body.appendChild(img);

let db;
// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   // create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase(db);
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};


// listen for app coming back online
window.addEventListener("online", () => checkDatabase(db));