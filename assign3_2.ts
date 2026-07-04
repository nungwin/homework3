// 1. Create enum
enum CourseStatus {
    Open = "Open",
    Closed = "Closed",
    Full = "Full"
}

// 2. Create Student interface
interface Student {
    id: number;
    name: string;
}

// 3. Create Course interface
interface Course {
    title: string;
    code: string;
    status: CourseStatus;
    students: Student[];
}

// Sample student
let student1: Student = {
    id: 101,
    name: "Alice"
};

let student2: Student = {
    id: 102,
    name: "Bob"
};

// Sample course
let course1: Course = {
    title: "Introduction to TypeScript",
    code: "TS101",
    status: CourseStatus.Open,
    students: []
};

// 4. Function enroll
function enroll(student: Student, course: Course): void {
    if (course.status === CourseStatus.Open) {
        course.students.push(student);
        console.log(`${student.name} enrolled in ${course.title}`);
    } else {
        console.log("Course is not open for enrollment.");
    }
}

// Test
enroll(student1, course1);
enroll(student2, course1);

console.log(course1);