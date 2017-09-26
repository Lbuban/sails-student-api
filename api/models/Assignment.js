/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    assignment_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      required: 'true',
      type: 'integer'
    },
    // student: {
    //   model: "student",
    //   columnName: "student_id"
    // },
    assignment_nbr: {
      required: 'true',
      type: 'integer'
    },
    grade_id: {
      required: 'true',
      type: 'integer'
    },
    // grade: {
    //   model: "grade",
    //   columnName: "grade_id"
    // },
    course_id: {
      required: 'true',
      type: 'integer'
    }
    // course: {
    //   model: "course",
    //   columnName: "course_id"
    // }
  },
  autoPK: false
};
