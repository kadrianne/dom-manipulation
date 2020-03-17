const trees = [
    {
        species: "Oak",
        height: 45,
        color: "green",
        age: 26,
        image: "https://cdn.shopify.com/s/files/1/0778/2679/products/1500white_oak_M_620x.jpg?v=1544495215"
    },
    {
        species: "Maple",
        height: 40,
        color: "red",
        age: 30,
        image: "https://cdn.thetreecenter.com/c/uploads/2014/07/american-red-maple-1.jpg"
    },
    {
        species: "Cocobolo",
        height: 35,
        color: "blue",
        age: 15,
        image: "https://ticotimes.net/wp-content/uploads/2016/01/160110cocobolo02.jpg"
    },
    {
        species: "Rosewood",
        height: 65,
        color: "brown",
        age: 51,
        image: "https://images-na.ssl-images-amazon.com/images/I/A1aoVEuwjXL._AC_SL1500_.jpg"
    }
];

trees.forEach(tree => {

    const card = document.createElement('div');
    const species = document.createElement('h2')
    const image = document.createElement('img')
    const stats = document.createElement('ul')
    const height = document.createElement('li')
    const color = document.createElement('li')
    const age = document.createElement('li')

species.innerText = tree.species;
image.src = tree.image               
height.innerText = `Height: ${tree.height} feet`;
color.innerText = `Color: ${tree.color}`;
age.innerText = `Age: ${tree.age} years`;

stats.append(height,color,age);
card.append(species,image,stats);
document.body.append(card);

})