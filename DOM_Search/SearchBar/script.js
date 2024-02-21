// Your JSON data
const jsonData = [
    { "name": "Apple", "category": "Fruit" },
    { "name": "Banana", "category": "Fruit" },
    { "name": "Carrot", "category": "Vegetable" },
    // Add more data as needed
];

function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
// we are getting the value of the input field and converting it to lowercase, why convert to lowercase?
// because we want to make the search case-insensitive, so that the user can type in any case and still get the correct results.


    // Filter JSON data based on the search term
    const results = jsonData.filter(namuna =>
        namuna.name.toLowerCase().includes(searchTerm) || namuna.category.toLowerCase().includes(searchTerm)
    );

    // Display search results
    displayResults(results);
    // we are calling the displayResults function and passing the results to it, so that it can display the results on the page.
    // we used hoisting to call the function before it was defined, why? because the function is defined below the search function, so we need to use hoisting to call it before it is defined.
}

function displayResults(results) {
    const searchResultsContainer = document.getElementById("searchResults");

    // Clear previous results
    // searchResultsContainer.innerHTML = "";
    // we are clearing the previous results by setting the innerHTML of the searchResultsContainer to an empty string. but if i want previous results to be displayed, what should i do? you can remove this line of code.


    if (results.length === 0) {
        searchResultsContainer.innerHTML = "No results found.";
        return;
    }

    // Create and append result elements
    results.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `<strong>${result.name}</strong> - ${result.category}`;
        searchResultsContainer.appendChild(resultElement);
    });
}
