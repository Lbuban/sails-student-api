/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    instructor_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: 'string',
      maxLength: 30
    },
    last_name: {
      type: 'string',
      maxLength: 30
    },
    // major_id: {
    //   type: integer,
    // },
    major: {
      model: 'Major',
      columnName: 'major_id'
    },
    years_of_experience: {
      required: true,
      type: 'integer',
      maxLength: 30
    },
    tenured: {
      required: true,
      type: 'integer',
      maxLength: 1
    }
  },
  autoPK: false
};
