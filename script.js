const productGrid = document.getElementById('productGrid');
// here we are creating a list of products with their names and images
// this is a sample list of products, you can replace it with your own data
const products = [
    { name: 'Round-Neck T-Shirt', img: 'round neck.jpg' },
    { name: 'U-Neck T-Shirt', img: 'u tshirt' },
    { name: 'Polo T-Shirt', img: 'polo.jpg' },
    { name: 'V-Neck T-Shirt', img: 'v t-shirt' },
    { name: 'Round-Neck T-Shirt', img: 'round neck.jpg' },
    { name: 'U-Neck T-Shirt', img: 'u tshirt' },
    { name: 'Polo T-Shirt', img: 'polo.jpg' },
    { name: 'V-Neck T-Shirt', img: 'v t-shirt' },
    { name: 'Round T-Shirt', img: 'round neck.jpg' },
    { name: 'U-Neck T-Shirt', img: 'u tshirt' },
    { name: 'Polo T-Shirt', img: 'polo.jpg' },
    { name: 'V-Neck T-Shirt', img: 'v t-shirt' }
];

// Function to load more products
function loadMore() {
    const getData = document.createDocumentFragment();

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.id = 'product';
        
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';

        const h4 = document.createElement('h4');
        h4.textContent = product.name;

        const p = document.createElement('p');
        p.innerHTML = 'Explore Now &#8594;';

        infoDiv.appendChild(h4);
        infoDiv.appendChild(p);

        productDiv.appendChild(img);
        productDiv.appendChild(infoDiv);

        getData.appendChild(productDiv);
    });

    productGrid.appendChild(getData);
}
