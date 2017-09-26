/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    course_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    instructor: {
      model: "instructor",
      columnName: "instructor_id"
    },
    subject: {
      required: true,
      type: 'string',
      maxLength: 30
    },
    course: {
      required: true,
      type: 'integer',
      maxLength: 4
    }
  },
  autoPK: false
};
