const obj = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

obj.contacts.phone = "+37312345678";
delete obj.address;
console.log(obj);