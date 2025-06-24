"use strict";

// Never call promisas inside the LOOP - use Promise.allSettled()
const idSet = ["1", "2", "3", "500"];

async function fetcher() {
  const response = await Promise.allSettled(
    idSet.map((id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
  );
  const data = await Promise.allSettled(
    response.map((res) => res.value.json())
  );

  data.forEach((user) => {
    const person = user.value;
    console.log(`
      ${person.name}
      ${person.email}
    
      `);
  });
}

// fetcher();
