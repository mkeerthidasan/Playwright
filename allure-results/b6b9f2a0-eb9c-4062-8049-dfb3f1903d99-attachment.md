# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: empinfo.spec.js >> Validate empinfo JSON data
- Location: tests\empinfo.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'mobile2')
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from 'fs';
  3  | 
  4  | test('Validate empinfo JSON data', async () => {
  5  | 
  6  |     const data = JSON.parse(
  7  |         fs.readFileSync('./tests/empinfo.json')
  8  |     );
  9  |     expect(data.Phone.mobile2).toBe('9989873839');
  10 |     console.log('Mobile2:', data.Phone.mobile2);
> 11 |     console.log("Validating Employee Name:", data.phone.mobile2.includes('9989873839'));
     |                                                         ^ TypeError: Cannot read properties of undefined (reading 'mobile2')
  12 |     
  13 |     expect(data.skills).toContain('API Testing');
  14 |     console.log("Employee has API Testing skill:", data.skills.includes('API Testing'));
  15 | 
  16 |     let ExactSkill=[];
  17 |     for(let i=0;i<data.skills.length;i++){
  18 |         if(data.skills[i]==='API Testing' && data.empname==='Arun'){
  19 |             ExactSkill.push(data.skills[i]);
  20 |           
  21 |         }
  22 |     }
  23 |     console.log('Validating Employee Information:');
  24 |     console.log('Employee Name:', data.empname);
  25 |     console.log('Employee ID:', data.empid);
  26 |     console.log('Mobile2:', data.Phone.mobile2);
  27 |     console.log('Skills:',ExactSkill);
  28 |     
  29 | });
```