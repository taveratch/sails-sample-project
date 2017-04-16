/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		name: {
			type: 'string'
		}
	},

	enroll: (option, cb) => {
		User.findOne(option.id).exec((err, theUser) => {
			if (err) return cb(err);
			if(!theUser) return cb(new Error('User not found'));
			theUser.save();
		});
	}
};
