const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const questions = require('./lib/questions');
const containers = require('./lib/IDs');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRender');

// store employees
const employees = [];

// promt function asking questions inline
const promptUser = (type) => {
	return inquirer.prompt(questions[type]);
};

// write team html document in the dist folder
const writeHTML = (page) => {
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR);
	}
	fs.writeFileSync(outputPath, page);
	console.log("Team file successfully generated in dist folder");
}

// function to create manger object
const buildTeam = () => {
	return promptUser('manager').then((emp) => {
		const newE = new Manager(emp.name, emp.id, emp.email, emp.officeNumber);
		employees.push(newE);
		containers.ids.push(emp.id);
		nextEmployee();
	})
		.catch((err) => {
			console.log(err);
		});
};




// function to ask user for an employee to add next
const nextEmployee = () => {
	return promptUser('nextEmp').then((answer) => {
		if (answer.role === 'Engineer') {
			promptUser('engineer').then((emp) => {
				const newE = new Engineer(emp.name, emp.id, emp.email, emp.github);
				employees.push(newE);
				containers.ids.push(emp.id);
				nextEmployee();
			})
				.catch((err) => {
					console.log(err);
				});
		} else if (answer.role === 'Intern') {
			promptUser('intern').then((emp) => {
				const newE = new Intern(emp.name, emp.id, emp.email, emp.school);
				employees.push(newE);
				containers.ids.push(emp.id);
				nextEmployee();
			})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log('Well done, all team members added, proceed creating the page');
			const htmlPage = render(employees);
			writeHTML(htmlPage);
		}
	});
};

// starts the app
buildTeam();
