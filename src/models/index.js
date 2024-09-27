const Course = require("./Course");
const Student = require("./Student");

Course.belongsToMany(Student,{through: 'courseStudent'})
Student.belongsToMany(Course,{through: 'courseStudent'})