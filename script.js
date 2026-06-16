let arr = [];
function addstudent() {
    let studentname = document.getElementById("name").value;
    let studentmarks = document.getElementById("marks").value;
    console.log(studentname, studentmarks);
    // object
    let student = {
        name: studentname,
        marks: studentmarks
    };
    console.log(student);
    arr.push(student);
    console.log(arr);

    document.getElementById("tb").style.display = "block";
    document.getElementById("stu").style.display = "block";
    document.getElementById("topscore").style.display = "block";

    table1();

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function table1() {
    document.getElementById("tbody").innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let currentstudent = arr[i];
        console.log(currentstudent.name);
        console.log(currentstudent.marks);

        let row =
            `<tr>
                <td>${currentstudent.name}</td>
                <td>${currentstudent.marks}</td>
                <td>${getgrade(currentstudent.marks)}</td>
            </tr>
            `;
        console.log(row);

        document.getElementById("tbody").innerHTML = document.getElementById("tbody").innerHTML + row;
    }
    let average = getavg();
    document.getElementById("avg").innerHTML = "Average Marks: " + average;

    getTopscorer();
}



function getgrade(marks) {
    if (marks >= 90) {
        return "A";
    }

    else if (marks >= 85) {
        return "B";
    }

    else if (marks >= 70) {
        return "C";
    }

    else if (marks >= 60) {
        return "D";
    }
    else {
        return "Fail";
    }

}

function getavg() {
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + Number(arr[i].marks);
    }

    let average = total / arr.length;
    return average;
}


function getTopscorer() {
    let topscore = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].marks > topscore.marks) {
            topscore = arr[i];
        }
    }

    document.getElementById("topscore").innerHTML =
        "Top Scorer: " + topscore.name + " with " + topscore.marks + " marks";
}


function clearAll() {
    arr = [];
    document.getElementById("tbody").innerHTML = "";
    document.getElementById("avg").innerHTML = "Average Marks";
    document.getElementById("topscore").innerHTML = "Top Score";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

