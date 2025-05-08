
// const cbE =()=>{
//     console.log("Error");
// }

// // const cbS =(val)=>{
// //     console.log("Success");
// //     console.log(val.json());
// // }

// const pr = fetch(`https://dummyjson.com/products`);

// pr.then((val) =>{
//     // console.log("Sucess: ", val);
//     const pr2 = val.json();
//     pr2.then((data)=>{
        
//             console.log(data);
        
//     });
// }).catch(cbE);

const pr = fetch("https://api.github.com/users/likbalpande");

pr.then((val)=>{
    console.log("Done", val.json());
});

fetch("https://dummyjson.com/products").then(response=> response.json()).then(
    data=>{
        const filterProduct = data.products.filter(product=>
            product.reviews.some(review=> review.rating === 5)
        );

        const productTitle = filterProduct.map(product=> product.title);
        console.log("Here are the titles of the product with atleast one 5 rating: ", productTitle);
    }
).catch(console.log("Error"));