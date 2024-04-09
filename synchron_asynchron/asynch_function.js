async function asyncOperation() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Abgeschlossen!"), 2000);
    });

    let result = await promise;
    console.log(result);
}

asyncOperation();