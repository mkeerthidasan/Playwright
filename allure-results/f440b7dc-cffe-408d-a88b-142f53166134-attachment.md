# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: empinfo.spec.js >> Validate empinfo JSON data
- Location: tests\empinfo.spec.js:4:5

# Error details

```
TypeError: ExactSkill.push is not a function
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
  10 | 
  11 |     let ExactSkill={};
  12 |     for(let i=0;i<data.skills.length;i++){
  13 |         if(data.skills[i]==='API Testing'){
> 14 |             ExactSkill.push(data.skills[i]);
     |                        ^ TypeError: ExactSkill.push is not a function
  15 |         }   
  16 |     }
  17 |     expect(data.skills).toContain('API Testing');
  18 | 
  19 |     console.log('Employee Name:', data.empname);
  20 |     console.log('Employee ID:', data.empid);
  21 |     console.log('Mobile2:', data.Phone.mobile2);
  22 |     console.log('Skills:', data.skills(ExactSkill));
  23 | });
```