//1.Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
//  var person={
//     firstName:"Sweshika",
//     lastName:"Kodurupaka",
//     Age:21
// }
// person.city="New York",
// console.log(person.firstName);
// console.log(person);
// // o/p:Sweshika
// o/p:-{firstName: 'Sweshika', lastName: 'Kodurupaka', Age: 21, city: 'New York'}

// 2.Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
// var product={
//     name:"Js bekary",
//     price:10000,
//     inStock:"puffs"
// }
// product.price=500,
// delete(product.inStock);
// console.log(product);
// o/p:-{name: 'Js bekary', price: 500}

//4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
//  var user = {
//     username: "srinivas",
//     email: "srinu@gmail.com",
//     address: "gajularajam basthi"
// }
// user.city = "kothagudem"
// user.state = "Telangana"
// user.zip = 507101;
// Object.freeze(user);
// Object.isFrozen(user)
// user.mobile="123456789"
// console.log(user);
// o/p:{username: 'srinivas', email: 'srinu@gmail.com', address: 'gajularajam basthi', city: 'kothagudem', state: 'Telangana', …}
// Explaination: In this we are freezethe object so that we cannot modify or add the data in objects.

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

// let library = {
//     fantasy: {
//       books: [
//         { title: "The Hobbit", author: "J.R.R. Tolkien" },
//         { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" }
//       ]
//     },
//     mystery: {
//       books: [
//         { title: "The Da Vinci Code", author: "Dan Brown" },
//         { title: "Sherlock Holmes: The Hound of the Baskervilles", author: "Arthur Conan Doyle" }
//       ]
//     },
//     romance: {
//       books: [
//         { title: "Pride and Prejudice", author: "Jane Austen" },
//         { title: "The Notebook", author: "Nicholas Sparks" }
//       ]
//     }
//   };
//   library.scienceFiction = {
//     books: [
//       { title: "Dune", author: "Frank Herbert" },
//       { title: "Neuromancer", author: "William Gibson" }
//     ]
//   };
//   console.log(library.mystery.books[0]);
//   delete library.mystery;
//   console.log(library);
//  o/p:{title: 'The Da Vinci Code', author: 'Dan Brown'}
// o/p: fantasy: {books: Array(2)}
//     romance: {books: Array(2)}
//     scienceFiction: {books: Array(2)}

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

// Step 1: Create the car object
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     price: 20000
//   };
//   Object.seal(car);
//   delete car.make; 
//   console.log(Object.isSealed(car)); 
//   car.price = 18000; 
//   console.log(Object.isExtensible(car)); 
//   console.log(car);  
//   o/p: true
//         false
//        {make: 'Toyota', model: 'Corolla', price: 18000}


// 6.const store = {
//     name: "SuperMart",
//     products: {
//       electronics: {
//         phones: {
//           apple: {
//             iPhoneX: { price: 999, stock: 20 },
//             iPhone12: { price: 1099, stock: 15 },
//           },
//           samsung: {
//             galaxyS21: { price: 799, stock: 25 },
//             galaxyNote20: { price: 999, stock: 10 },
//           },
//         },
//         laptops: {
//           dell: {
//             XPS13: { price: 1200, stock: 10 },
//             Inspiron15: { price: 800, stock: 30 },
//           },
//           hp: {
//             SpectreX360: { price: 1300, stock: 5 },
//             Pavilion15: { price: 750, stock: 20 },
//           },
//         },
//       },
//       groceries: {
//         fruits: {
//           apples: { price: 2, stock: 100 },
//           bananas: { price: 1, stock: 150 },
//         },
//         vegetables: {
//           carrots: { price: 1.5, stock: 200 },
//           spinach: { price: 1, stock: 100 },
//         },
//       },
//     },
//   };
//   console.log(store.products.groceries.vegetables.spinach);
//   console.log(store.products.electronics.laptops.hp.Pavilion15.price);

// o/p:{price: 1, stock: 100}
//     750

