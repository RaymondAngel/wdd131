const aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            section: "001",
            enrolled: 95,
            instructor: "Roberto Diaz Rodriguez"
        },
        {
            section: "002",
            enrolled: 80,
            instructor: "Sarah Gobble"
        }
    ]
};

function setCourseInformation(course) {
    const courseName = document.querySelector("#courseName");
    courseName.textContent = `${course.code} – ${course.title}`;
}

function renderSections(course) {
    const tableBody = document.querySelector("#sections tbody");

    course.sections.forEach((courseSection) => {
        const row = document.createElement("tr");
        const section = document.createElement("th");
        const enrollment = document.createElement("td");
        const instructor = document.createElement("td");

        section.scope = "row";
        section.textContent = courseSection.section;
        enrollment.textContent = courseSection.enrolled;
        instructor.textContent = courseSection.instructor;

        row.append(section, enrollment, instructor);
        tableBody.appendChild(row);
    });
}

setCourseInformation(aCourse);
renderSections(aCourse);
