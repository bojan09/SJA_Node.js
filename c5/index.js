// Importing data from the JSON file

const studentsData = require("./students.json");
// console.log(studentsData);

// 1. Студент со највисок просек
console.log(
  studentsData.sort((a, b) =>
    a.prosek > b.prosek ? 1 : b.prosek > a.prosek ? -1 : 0
  )
);

// 2. Студент со најнизок просек

console.log(
  studentsData.sort((a, b) =>
    a.prosek < b.prosek ? 1 : b.prosek < a.prosek ? -1 : 0
  )
);

// 3. Среден просек на сите студенти

a = studentsData.prosek;
b = studentsData.prosek;
avg = a + b;

console.log(studentsData.reduce((a, b) => a.prosek + b.prosek) / avg.length);

// 4. Град со највисок просек

console.log(
  studentsData.sort((a, b) =>
    a.grad > b.grad ? 1 : b.grad > a.grad ? -1 : 0
  ) &&
    studentsData.sort((a, b) =>
      a.prosek > b.prosek ? 1 : b.prosek > a.prosek ? -1 : 0
    )
);

// 5. Град со најнизок просек

console.log(
  studentsData.sort((a, b) =>
    a.grad < b.grad ? 1 : b.grad < a.grad ? -1 : 0
  ) &&
    studentsData.sort((a, b) =>
      a.prosek < b.prosek ? 1 : b.prosek < a.prosek ? -1 : 0
    )
);

// 7. Подредување на сите студенти по азбучен ред

console.log(
  studentsData.sort((a, b) => (a.ime > b.ime ? 1 : b.ime > a.ime ? -1 : 0))
);
