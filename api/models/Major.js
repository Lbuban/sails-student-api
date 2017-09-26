/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      type: 'string',
      maxLength: 30,
      required: true
    },
    sat: {
      type: 'string',
      maxLength: 4,
      required: true
    }
  },
  autoPK: false
};
