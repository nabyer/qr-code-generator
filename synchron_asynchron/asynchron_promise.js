// Ein Promise mit dem Promise-Konstruktor erstellen
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Operation abgeschlossen.');
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) =>{
    console.log(error);
})