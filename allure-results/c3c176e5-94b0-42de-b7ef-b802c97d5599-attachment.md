# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: empinfo.spec.js >> Validate empinfo JSON data
- Location: tests\empinfo.spec.js:4:5

# Error details

```
ReferenceError: elseif is not defined
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
  11 |     expect(data.skills).toContain('API Testing');
  12 | 
  13 |     let ExactSkill=[];
  14 |     for(let i=0;i<data.skills.length;i++){
  15 |         if(data.skills[i]==='API Testing' && data.empname==='Arun'){
  16 |             ExactSkill.push(data.skills[i]);
  17 |           
  18 |         }
  19 |     console.log('The employee has API Testing skill and the name is Arun');
  20 |     console.log('Employee Name:', data.empname);
  21 |     console.log('Employee ID:', data.empid);
  22 |     console.log('Mobile2:', data.Phone.mobile2);
  23 |     console.log('Skills:',ExactSkill);
  24 |     }
> 25 |     elseif(data.skills[i]!=='API Testing' || data.empname!=='Arun')
     |     ^ ReferenceError: elseif is not defined
  26 |     {
  27 |         console.log('The employee does not have API Testing skill or the name is not Arun');    
  28 |     }
  29 |     
  30 | });
```