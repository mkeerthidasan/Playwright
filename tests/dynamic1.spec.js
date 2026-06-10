import { test, expect } from '@playwright/test';

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

test('Employee Serialization Test', async () => {
    const emp = new Employee(101, "Keerthi", 100000);

    
    const jsonRequest = JSON.stringify(emp);

    expect(emp.id).toBe(101);
    expect(emp.name).toBe("Keerthi");
    expect(emp.salary).toBe(100000);

    console.log('Serialized JSON:', jsonRequest);
});