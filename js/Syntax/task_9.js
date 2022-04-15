const question = () => {
    const name = prompt("Как вас зовут?");
    alert(`Привет ${name}`);
    let wannaJs = confirm("Ты знаком с JavaScript?");
    if (wannaJs === true) {
        alert("Молодец!")
    } else {
        alert("Можно начать изучение прямо сейчас!");
    }
};

question();