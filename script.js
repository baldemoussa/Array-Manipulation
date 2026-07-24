//-------------------------------------//
//--Task 1: Array Manipulation Basics--//
//-------------------------------------//

//1. Empty array shopping list
let shoppingList = [];

//2. addItem: Add an item to the shopping list
function addItem(item) {
    shoppingList.push(item);
    console.log(`${item} has been added to the shopping list.`);
}

//3. removeLastItem: Remove the last item from the shopping list
function removeLastItem() {
    if (shoppingList.length > 0) {
        const removedItem = shoppingList.pop();
        console.log(`${removedItem} has been removed from the shopping list.`);
    } else {
        console.log("The shopping list is already empty.");
    }
}

//4. displayList: Display the current shopping list
function displayList() {
    if (shoppingList.length > 0) {
        console.log("Current shopping list:");
        for (let i = 0; i < shoppingList.length; i++) {
            console.log(`${i + 1}. ${shoppingList[i]}`);
        }
    } else {
        console.log("The shopping list is empty.");
    }
}
//Task 1 test cases
// addItem("Apples");
// addItem("Bananas");
// addItem("Oranges");
// addItem("Mangoes");
// addItem("Grapes");
// displayList();
// removeLastItem();
// displayList();

//--------------------------------------//
//--Task 2: Filter and Search an Array--//
//--------------------------------------//
//1. addItemNew: Modify the addItem function to only add the item if it is not already in the shoppingList array.
function addItemNew(item) {
    const itemExists = shoppingList.some(
        existingItem => existingItem.toLowerCase() === item.toLowerCase()
    );

    if (!itemExists) {
        addItem(item);
        return `${item} : added to your card.`;
    } else {
        return `${item}: is already in your card.`;
    }
}

//2. filterItems: Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(searchTerm) {
    if (searchTerm === "") {
        return shoppingList;
    }
    return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}
//------------------------------------------//
//--Task 3: Render the List in the Browser--//
//------------------------------------------//
const itemName = document.getElementById("item-name");
const cartItems = document.getElementById("cart-items");
const btnAddItemButton = document.getElementById("add-item-button");
const btnRemoveLastItem = document.getElementById("remove-last-item");
const cartMessage = document.getElementById("cart-message");

// addItemNew("Bananas");
// let filteredItems = filterItems("ang");
// console.log("Filtered items containing 'ang':", filteredItems);

// Clear the cart and list items
function refreshCartAnddisplayCart() {
    if (shoppingList.length === 0) {
        cartMessage.textContent = "Your cart is empty.";
    }
    cartItems.innerHTML = "";
    if (shoppingList.length > 0) {
        for (let i = shoppingList.length - 1; i >= 0; i--) {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item"; // Bootstrap styling
            listItem.innerText = shoppingList[i];
            cartItems.appendChild(listItem);
        }
    }
}

refreshCartAnddisplayCart();

btnAddItemButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newItem = itemName.value.trim();

    if (newItem !== "") {
        const initialLength = shoppingList.length;
        const message = addItemNew(newItem);
        cartMessage.textContent = message;

        // Only refresh cart UI if the item was actually added
        if (shoppingList.length > initialLength) {
            refreshCartAnddisplayCart();
        }

        itemName.value = "";
    }
});

btnRemoveLastItem.addEventListener("click", () => {
    removeLastItem();
    refreshCartAnddisplayCart();
});