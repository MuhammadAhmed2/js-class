// let str = "Hello, World!";
// str = str.replace("o", "x");
// console.log(str);

// function a(params) {

// }

let cart = [
    {
        catagory: 'fruits',
        productName: 'Apple',
        price: 180,
        weight: 1.5
    },
    {
        catagory: 'fruits',
        productName: 'Mango',
        price: 150,
        weight: 3.5
    },
    {
        catagory: 'fruits',
        productName: 'Banana',
        price: 80,
        weight: 5
    },
    {
        catagory: 'fruits',
        productName: 'Grapes',
        price: 200,
        weight: 2.5
    },
    {
        catagory: 'vegtables',
        productName: 'Okra',
        price: 60,
        weight: 1.75
    },
    {
        catagory: 'vegtables',
        productName: 'pea',
        price: 75,
        weight: 3
    },
]

// let Grandtotal = []
// cart.forEach((i) => {
//     let totalPrice = i.price*i.weight;
//     Grandtotal.push(totalPrice)
//     console.log(`Name:${i.productName} Rs.${i.price}/KG Weight:${i.weight} Total Price: ${totalPrice}`);
// });
// let gTotal  = Grandtotal.reduce((accumulator, initialValue) =>{
//     return accumulator+initialValue;
// },0)
// console.log(`Grand Total Price Rs.${gTotal}/-`);
// cart.map((a)=>{console.log(a.productName);})



// How to make Promises resolve then ke liye hota hai aur reject catch ke liye hota hai  

// let marks = +prompt('Enter Your Marks');
// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (marks > 400) {
//             console.log('chagaey');
//             resolve('Pass Hogaey');
//         } else {
//             console.log('Cutlo Beta');
//             reject('Fail Hogaey');
//         }
//     },1000);
// });
// result.then((res) => { console.log(res); }).catch((err) => { console.log(err); });


let div = document.querySelector('div')
axios('https://fakestoreapi.com/products').then((response) => {
    let api  = response.data;
    console.log(api)
    api.map((item)=>{
        div.innerHTML += `
            <img src='${item.image}' width='150'>
            <h1 id="name">
            ${item.title}
            </h1>
            <p id="des">${item.description}</p>
            <h3 id="price">
            ${item.price}
            </h3>
            <hr>
            <br>`
    })
})
