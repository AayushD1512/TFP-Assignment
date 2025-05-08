let ecom = [];

const pr = fetch('https://dummyjson.com/products?limit=40');
pr.then((res)=>{
    const pr2 = res.json();
    pr2.then((data)=>{
        console.log(data);
        ecom = data.products;
        RenderUI(ecom);
        
    })
}).catch((err)=>{
    console.log(err,"Fetching Error");
});


const main = document.querySelector("main");

const RenderUI = (res) => {
    main.innerHTML= "";

    res.forEach((elem)=>{
        const newDiv = document.createElement('div');
        newDiv.className = "product-container";
        const reviews = elem.reviews;
        let totalSum = 0;
        
        // console.log(reviews);
        reviews.forEach((obj)=>{
            totalSum += obj.rating;
        })
        let images = "";
        const avgRating = Math.round(totalSum/reviews.length);

        // for(let i=0; i<avgRating; i++){
        //     images += "<img src='https://png.pngtree.com/png-vector/20231107/ourmid/pngtree-goldan-3d-star-emoji-icon-png-image_10459560.png' width='5'/>"
        // }
        const category = elem.tags;
        let arr = [category];
        console.log(arr);
        console.log(images);
        newDiv.innerHTML = `
            <img src="${elem.images[0]}"/>
            <h2>Brand: ${elem.title}</h2>
            <p>${elem.description}</p>
            <h3>Price: $${elem.price}</h3>
            <h4>Stock Status: ${elem.availabilityStatus}</h4>
            ${images}
            <p>${elem.tags[0]}</p>
            <p>${""+arr}</p>
        `;

        main.appendChild(newDiv);
    })
}

const input = document.querySelector(".nav-search-bar input");


input.addEventListener("input", (e)=>{
    const query = input.value.toLowerCase();

    const filteredProduct = ecom.filter(item => 
        item.title.toLowerCase().includes(query) || item.tags[0].includes(query)
    );

    console.log(filteredProduct);

    RenderUI(filteredProduct);
})