# Lab 4.2: Array Manipulation

## Reflection Questions

**1. How did array methods like push() and filter() help you manipulate data in this activity?**
Array methods made data manipulation much simpler and cleaner. The `push()` method allowed me to easily add new items to the end of the `shoppingList` array without needing to manually manage the array's index length. The `filter()` method (and `some()`) was incredibly helpful for searching because it allowed me to concisely check conditions (like finding matches) without having to write long, traditional `for` loops.

**2. What challenges did you face when trying to filter and search for items in the array?**
The main challenge was dealing with case sensitivity. For example, if a user tried to add "bananas" but the list already contained "Bananas", a standard comparison would treat them as two different items. To solve this, I had to ensure both the user's input and the existing items in the array were converted to lowercase using `.toLowerCase()` before comparing them with methods like `.includes()` or `.some()`.

**3. How would you modify this code to make it more efficient or user-friendly?**
To make it more user-friendly, I could add a feature that allows the user to remove a specific item from the list (by adding a "Delete" button next to each item in the UI), rather than only being able to remove the last item. 
To make it more efficient, instead of clearing the entire `innerHTML` of the list and re-rendering all the items from scratch every time an item is added or removed, I could dynamically append or remove just the specific `<li>` element that changed.
