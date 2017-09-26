/**
 * MajorCourse.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_course_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      model: "major",
      columnName: "major_id"
    },
    course: {
      model: "course",
      columnName: "course_id"
    }
  },
  autoPK: false,
  tableName: "major_course"
};
