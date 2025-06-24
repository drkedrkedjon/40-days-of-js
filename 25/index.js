"use strict";

// GET - By Default, no option object present.
async function fetchPosts() {
  const URL_API = "https://jsonplaceholder.typicode.com/users/2";

  try {
    const res = await fetch(URL_API);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
// fetchPosts();

// With Query Parameters
async function fetchAndQueryParmsPosts() {
  const URL_API = "https://jsonplaceholder.typicode.com/posts"; // false url

  const queryParams = {
    _embed: "comments",
  };

  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${URL_API}?${queryString}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Create Post POST
async function createPost(postData) {
  const URL_API = "https://jsonplaceholder.typicode.com/posts"; // false url

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const res = await fetch(URL_API, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// PUT and PATCH
// PUT is when we want to update WHOLE resourse. WHOLE object that represent user, por ejemplo.
// PATCH is keepeng same DATA object, but is updating only a PART of specific USER.

// PUT
async function updatePost(postData) {
  const URL_API =
    "https://jsonplaceholder.typicode.com/posts/s5464851-sdf5d-45sd4fs54df"; // false url AND we need ID of the post we are updating... while GET and POST don't

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const res = await fetch(URL_API, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// PATCH  - Only update part, like one KEY value
async function patchPost(postData) {
  const URL_API =
    "https://jsonplaceholder.typicode.com/posts/s5464851-sdf5d-45sd4fs54df"; // false url

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const res = await fetch(URL_API, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// DELETE
async function createPost(ID) {
  const URL_API = `https://jsonplaceholder.typicode.com/posts/${ID}`; // false url

  const options = {
    method: "DELETE",
  };

  try {
    const res = await fetch(URL_API, options);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

// ------
// Custom Headers are shitload of headers that goes to headers part of configuration objects that is sent with fetch API.

// Creating a Request Object - Usefull if we want to have one fetch async function that can serve all fetch request of diferent types

const postRequest = new Request("https://jsonplaceholder.typicode.com/posts/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: crypto.randomUUID(),
    title: "How to post something",
  }),
});

const deleteRequest = new Request(
  "https://jsonplaceholder.typicode.com/posts/45fsd5f4s6df54sd5",
  {
    method: "DELETE",
  }
);

async function fetcherFunct(requestType) {
  try {
    const res = await fetch(requestType);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// ----
// Handling errors
async function fetchAllPosts() {
  const URL_API = "https://jsonplaceholder.typicode.com/users";

  try {
    const res = await fetch(URL_API);
    // from here
    if (!res.ok) {
      throw new Error(`Shit happens sometimes... ${res.status}`);
    }
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Upsa, not a JSON file");
    }
    // to here
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Canceling the request
// You can not cancel Promisse but you can cancel what promise do, like FETCH() - or basicly, if fetch does streaming or downloading, then we can cancel that download or stream

// TASKS PRACTICE

async function userList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const data = await res.json();
  data.forEach((post) => console.log(post.title));
}
// userList();

// ----

const postData = async () => {
  const conf = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "King",
      body: "Fuck this",
      id: crypto.randomUUID(),
    }),
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", conf);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// postData();

async function putData() {
  const conf = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "King of PUT",
      body: "Fuck, this is boring",
    }),
  };

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      conf
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// patchData();

async function patchData() {
  const conf = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "King of PUT-PATCH",
    }),
  };

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      conf
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// patchData();

// deleteData
async function deleteData() {
  const conf = {
    method: "DELETE",
  };

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      conf
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// deleteData();

async function fetcherinko(url, options) {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
const users = {
  url: "https://jsonplaceholder.typicode.com/users",
  options: {},
};
const post = {
  url: "https://jsonplaceholder.typicode.com/posts",
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "King",
      body: "Fuck this",
      id: crypto.randomUUID(),
    }),
  },
};
// fetcherinko(users.url);
// fetcherinko(post.url, post.options);
