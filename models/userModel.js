const db = require("../config/db");

const Course = {
  // Create a new course
  async create(courseData) {
    const { courseNo, courseDesc, lastSemTaught, maxStudents } = courseData;
    const sql = `INSERT INTO courses (courseNo, courseDesc, lastSemTaught, maxStudents) VALUES (?, ?, ?, ?)`;
    const [result] = await db.execute(sql, [courseNo, courseDesc, lastSemTaught, maxStudents]);
    return result.insertId;
  },

  // Read All courses 
  async findAll() {
    const sql = `SELECT courseID, courseNo, courseDesc, lastSemTaught, maxStudents FROM courses`;
    const [rows] = await db.execute(sql);
    return rows;
  },

  // Read One course by ID
  async findById(id) {
    const sql = `SELECT courseID, courseNo, courseDesc, lastSemTaught, maxStudents FROM courses WHERE courseID = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows[0] || null;
  },
};

module.exports = Course;
