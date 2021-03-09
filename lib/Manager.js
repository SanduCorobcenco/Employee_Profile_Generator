// Defines and exports the Manager class.  This code inherits from the employee class, then adds in the office number 

const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		const role = 'Manager';
		super(name, id, email, role);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

module.exports = Manager;