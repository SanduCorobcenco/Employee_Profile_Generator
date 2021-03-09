const containers = require('./IDs');

// validation functions

const validateEmail = (email) => {
	const valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
	if (valid) {
		return true;
	} else {
		return "Please enter a valid email address"
	}
}

const validateId = (id) => {
	if (!id) {
		return "Input cannot be blank. Please try again."
	} else if (containers.ids.includes(id)) {
		return "Duplicate ID - please enter a different ID";
	}
	return true;
}

const validate = (input) => {
	if (!input) {
		return "Input cannot be blank. Please try again."
	}
	return true;
}


// inquirer questions

const manager = [
	{
		type: 'input',
		message: "What is the manager's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the manager's ID?",
		name: 'id',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the manager's email?",
		name: 'email',
		validate: validateEmail
	},
	{
		type: 'input',
		message: "What is the manager's office number?",
		name: 'officeNumber',
		validate: validate
	}
];

const engineer = [
	{
		type: 'input',
		message: "What is the engineer's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the engineer's ID?",
		name: 'id',
		validate: validateId
	},
	{
		type: 'input',
		message: "What is the engineer's email?",
		name: 'email',
		validate: validateEmail
	},
	{
		type: 'input',
		message: "What is the engineer's GitHub username?",
		name: 'github',
		validate: validate
	}
];

const intern = [
	{
		type: 'input',
		message: "What is the intern's name?",
		name: 'name',
		validate: validate
	},
	{
		type: 'input',
		message: "What is the intern's ID?",
		name: 'id',
		validate: validateId
	},
	{
		type: 'input',
		message: "What is the intern's email?",
		name: 'email',
		validate: validateEmail
	},
	{
		type: 'input',
		message: "What is the intern's school?",
		name: 'school',
		validate: validate
	}
];

const nextEmp = [
	{
		type: 'list',
		message: 'What employee would you like to add next?',
		name: 'role',
		choices: ['Engineer', 'Intern', 'I am finished entering employees']
	}
];

module.exports = { manager, engineer, intern, nextEmp };
