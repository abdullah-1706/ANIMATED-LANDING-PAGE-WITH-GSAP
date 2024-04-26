let product = [
    {name : 'Blue Chair', headline : 'Lakri ka Stool', price : "10,000" , image : 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww'},
    {name : 'White Chair', headline : 'Soft like Cloud', price : "15,000" , image : 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D'},
    {name : 'Traditional Chair', headline : 'LOoks very Old', price : "16,500" , image : 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww'}
];

let popular = [
    {name : 'Red Chair', headline : 'Painted Blood red', price : "10,000" , image : 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww'},
    {name : 'White Chair', headline : 'Soft like Cloud', price : "15,000" , image : 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMGNoYWlyfGVufDB8fDB8fHww'},
    {name : 'Traditional Chair', headline : 'LOoks very Old', price : "16,500" , image : 'https://images.unsplash.com/photo-1590411255052-ea52fd44c531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyZWVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D'}
];

let cart = [];

let clutter = '';
let addProduct = () => {
    product.forEach((product,index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
        <img class="w-full h-full object-cover overflow-hidden" src="${product.image}}"/>
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
            <h3 class="font-semibold opacity-20">${popular.headline}</h3>
            <h4 class="font-semibold mt-2">&#x20B9;&#x20B9; ${product.price}</h4>
            </div>
            <button data-index="${index}" class=" add w-10 h-10 rounded-full shader text-yellow-400"><i
                    class="ri-add-line add" data-index="${index}"></i></button>
                    </div>
                    </div>
                    </div>`
                });
    document.querySelector('.products').innerHTML = clutter;
}
            
let addPopularProduct = () => {
                let clutter = "";
                popular.forEach(popular => {
                    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                    <img class="w-full h-full object-cover overflow-hidden"
            src="${popular.image}"
            alt="">
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${popular.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
        </div>
</div>`
});
document.querySelector('.populars').innerHTML = clutter;
}

let addToCart = () => {
    document.querySelector('.products').addEventListener('click', (details) => {
    if(details.target.classList.contains('add')){
       cart.push(product[details.target.dataset.index])
       
    };
  })
}

let showCart = () => {
  document.querySelector('.carticon').addEventListener('click', () => {
    document.querySelector('.cartexpnd').style.display = 'block'
    clutter = "";
  cart.forEach((product, index) => {
    clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
        <img class="h-full w-full object-cover" src="${product.image}">
    </div>
    <div>
        <h3 class="font-semibold">${product.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
    </div>
</div>`
  });
  document.querySelector('.cartexpnd').innerHTML = clutter;
  })
}



addProduct();
addPopularProduct()
addToCart();
showCart();