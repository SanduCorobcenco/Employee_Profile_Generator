// Defines and exports the Engineer class.  This code inherits from the employee class, then adds in the GitHub 
const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		const role = 'Engineer';
		super(name, id, email, role);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;
