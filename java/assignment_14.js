let sam = {
	name: ‘sam’,
	department: ‘tech’,
	designation: ‘manager’,
	salary: 40000,
	raise: true,
};

console.log(sam);

let mary = {
	name: ‘Mary’,
	department: ‘finance’,
	designation: ‘trainee’,
	salary: 18500,
	raise: true,
};

let bill = {
	name: ‘Bill’,
	department: ‘HR’,
	designation: ‘Executive’,
	salary: 21200,
	raise: false,
};

console.log(‘Problem 1’, sam, mary, bill);


const company = {
	companyName: ‘Tech Stars’,
	website: ‘www.techstars.site’,
	employees: [sam, mary, bill);
}

console.log(‘Problem 2’, company);


let anna = {
	name: ‘Anna’,
	department: ‘Tech’,
	designation: ‘Executive’,
	salary: 25600,
	raise: false,
};

company.employees.push(anna);
console.log(‘Problem 3’, company);


let sum = 0
for (var i = 0; i  < company.employees.length; i++) {
	sum+= company.employees[i].salary;
}
console.log(‘Problem 4’, sum);


function increaseBy10(num) {
	return num * 1.1;
}

for (var i = 0; i  < company.employees.length; i++) {
	if (company.employees[i].raise; {

company.employees[i].salary *= 1.1;
company.employees[i].raise = false;

	}
}

console.log(‘Problem 5’, company);


const peopleWFH = [‘Anna’, ‘Sam’];
For (var i = 0; i < company.employees.length; i++) {
	company.employees[i].wfh = peopleWFH.includes(
	if (peopleWFH.includes(company.employees.length; i++) {
