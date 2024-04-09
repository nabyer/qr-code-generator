// Aufgabe 2:

// Beispiel 1: Dieser Code ist synchron
function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(2, 3));

// Asynchron Beispiel
async function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

(async () => {
    console.log(await sum(2, 3));
})();


// Beispiel 2: Ist durch die setTimeout Funktion asynchron
setTimeout(() => {
    console.log('Nachricht nach 2 Sekunden');
  }, 2000);


// Beispiel 3: Ist durch die setTimeout Funktion asynchron 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Erfolg"), 1000);
  });
  
  promise.then(result => console.log(result));


// Beispiel 4: Ist durch die async/await und fetch Funktion asynchron
async function fetchUserData() {
    let response = await fetch('<https://api.example.com/user>');
    let data = await response.json();
    console.log(data);
  }
  
  fetchUserData();


// Beispiel 5: Ist synchron
  console.log('Start');
setTimeout(() => {
  console.log('In der Mitte');
}, 0);
console.log('Ende');

// Asynchron Beispiel:
console.log('Start');
setTimeout(() => {
  console.log('In der Mitte');
  console.log('Ende');
}, 0);


// Beispiel 6: Ist durch die setTimeout Funktion asynchron
function fetchData(callback) {
    setTimeout(() => {
      callback('Daten geladen');
    }, 1500);
  }
  
  fetchData(result => console.log(result));


// Aufgabe 3:

// Beispiel 1:
let promise = new Promise((resolve, reject) => {
    let completed = true;
    if (completed) {
      resolve('Aufgabe abgeschlossen');
    } else {
      reject('Aufgabe fehlgeschlagen');
    }
  });


// Beispiel 2:
promise.then((message) => {
    console.log(message);
  }).catch((error) => {
    console.error(error);
  });


// Beispiel 3:
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }).then((result) => {
    console.log(result); // 1
    return result * 2;
  }).catch((error) => {
    console.error(error);
  }).then((result) => {
    console.log(result); // 2
    return result * 3;
  }).then((result) => {
    console.log(result); // 6
  });
  


// Beispiel 4:
async function fetchUserData() {
    let response = await fetch('<https://api.example.com/user>');
    let data = await response.json();
    console.log(data);
  }
  
  fetchUserData();


// Beispiel 5:
async function checkStatus() {
    try {
      let response = await fetch('<https://api.example.com/status>');
      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok');
      }
      let data = await response.json();
      console.log('Serverstatus:', data.status);
    } catch (error) {
      console.error('Fehler gefangen:', error);
    }
  }
  
  checkStatus();