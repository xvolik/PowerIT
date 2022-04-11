let students = [
    {
        name: "Alex",
        marks: [8, 10, 7, 5, 4],
    },
    {
        name: "Serghei",
        marks: [9, 10, 7, 7, 10],
    },
    {
        name: "Marina",
        marks: [6, 9, 4, 5, 10],
    },
    {
        name: "Ruslan",
        marks: [9, 10, 10, 8, 10],
    },
    {
        name: "Maxim",
        marks: [5, 4, 6, 3, 2],
    },
];
let classMedia = [];
let studentsList = [];
let lessFiveList = [];

function mainFunc() {
    students.forEach(function (item) {
        let result = item.marks.reduce((sum, current) => sum + current, 0);
        let media = result / item.marks.length;
        item['media'] = media;
        classMedia.push(media);
        studentsList.push(item.name + ': ' + media);
    });

    function showStudentList() {
        console.log("Имя и средний балл студентов: ");
        let i = 0;
        while (i < studentsList.length) {
            console.log(studentsList[i])
            i++
        }
    }

    showStudentList();

    function lessFive() {
        console.log("Список студентов с оценкой ниже 5: ");
        let i = 0;
        while (i < lessFiveList.length) {
            console.log(lessFiveList[i]);
            i++
        }
    }

    lessFive();

    function highLow() {
        console.log('Наивысший балл: ' + students[0].name + ' ' + students[0].media);
        console.log('Наименьший балл: ' + students[students.length - 1].name + ' ' + students[students.length - 1].media);
    }

    highLow()

    function sortByMedia() {
        function sorter(x, y) {
            return y['media'] - x['media']
        }

        students.sort(sorter)
        console.log("Сортировка по убыванию :");
        students.forEach(element => console.log(element.name + " " + element.media));
    }

    sortByMedia();

    function topStudents() {
        let classMediaSumm = classMedia.reduce((sum, current) => sum + current, 0);
        let commonMedia = classMediaSumm / classMedia.length;
        const bests = students.filter(student => {
            if (student.media >= commonMedia) {
                return true
            }
        })
        console.log("Топ класса:")
        let i = 0;
        while (i < bests.length) {
            console.log(bests[i].name + ': ' + bests[i].media);
            i++;
        }
    }

    topStudents();
}

mainFunc();