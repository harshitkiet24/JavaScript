const course = {
  coursename : "js in hindi",
  price: "990",
  courseInstructor: "hitesh"
}
console.log(course.courseInstructor);
//course.courseInstructor

const {courseInstructor : instructor} = course

console.log(instructor);

