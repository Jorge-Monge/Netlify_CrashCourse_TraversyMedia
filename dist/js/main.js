const target = document.getElementById("random-word");

/*
fetch("/getword")
  .then(res => {
    console.log(res);
    return res.text();
  })
  .then(text => {
    console.log(text);
    target.innerText = text;
  });
  */

// It also could be written as:
const getWord = async () => {
  const res = await fetch("/getword");
  const word = await res.text();
  return word;
};

getWord().then(word => (target.innerText = word));

// Another function
const getUsers = async () => {
  const res = await fetch("/api/users");
  const users = await res.json();
  users.forEach(user => {
    const li = document.createElement("li");
    const text = document.createTextNode(user.name);
    li.appendChild(text);
    document.getElementById("users").appendChild(li);
  });
};

getUsers();
