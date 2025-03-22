document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        //fix the correct element ID to attach the event listener
        fetch('books.json') 
            .then(response => {
                if(!response.ok)
                    throw Error('Book not found')
                return response.json();
            })
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                console.log('mostRecentBook:',mostRecentBook);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
                //fix the correct element ID to display content.
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById("room1Result").textContent = `Error: ${error}`;
            });
        //disable the button after solving the room
        document.getElementById("solveRoom1").disabled = true;
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        //display the common concepts between JS and React
        const jsConcepts = new Set(['closure', 'scope', 'hoisting' ,'async']);
        // 🪲 Bug: What's mssing from JS concepts? ('async' is omitted in jsConcepts)
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        //fix the correct function call to find the common concepts between JS and React
        console.log('commonConcepts:',commonConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
        
        //disable the button after solving the room
        document.getElementById("solveRoom2").disabled = true;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => {
                if(!response.ok)
                    throw Error('Directions not found')
                return response.json();
            })
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        console.log(message);
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").textContent = message;
                        //fix the correct method by changing innerHTML to textContent to display the message.
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById("room3Result").textContent = `Error: ${error}`;
            });
        //disable the button after solving the room
        document.getElementById("solveRoom3").disabled = true;
    });
});

//function to find the most recent book published and display as the key to the next room.   
function findMostRecentBook(books) {
 
        // 🪲 Bug: Logic error
        return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent, books[0]);
        //fix the comparison logic to get the most recent book and use the first book as the initial value for comparison.
};

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    return new Set([...setA].filter(concept => setB.has(concept)));
    //fix the logic to find the intersection of two sets.
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        //fix the delay by adding await to the promise
        console.log(`Navigating: ${direction.step}`);
        
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

