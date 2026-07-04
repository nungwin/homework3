// 1. Define Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// 2. Create inventory array
let myInventory: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 25000,
        quantity: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        quantity: 20
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1200,
        quantity: 15
    }
];

// 3. Function updateStock
function updateStock(productId: number, amountSold: number): void {

    const product = myInventory.find(item => item.id === productId);

    if (!product) {
        console.log("Product not found");
        return;
    }

    if (amountSold > product.quantity) {
        console.log("Not enough stock");
        return;
    }

    product.quantity -= amountSold;

    console.log(`${product.name} sold ${amountSold} item(s).`);
    console.log(`Remaining stock: ${product.quantity}`);
}

// Test
updateStock(1, 3);    // Laptop เหลือ 7
updateStock(2, 25);   // Not enough stock

console.log(myInventory);