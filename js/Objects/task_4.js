const user1 = {
    name: "User 1",
    age: 123
};

const user2 = {
    name: "User 1",
    age: 123
};

user2.user1 = {
    user1
};
console.log(user2);
user2["name"] = "User 2";
user2["age"] = 321;
console.log(user2);