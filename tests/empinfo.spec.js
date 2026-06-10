import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Validate empinfo JSON data', async () => {

    const data = JSON.parse(
        fs.readFileSync('./tests/empinfo.json')
    );
    expect(data.Phone.mobile2).toBe('9989873839');
    console.log('Mobile2:', data.Phone.mobile2);
    
    expect(data.skills).toContain('API Testing');
    console.log("Employee has API Testing skill:", data.skills.includes('API Testing'));

    let ExactSkill=[];
    for(let i=0;i<data.skills.length;i++){
        if(data.skills[i]==='API Testing' && data.empname==='Arun'){
            ExactSkill.push(data.skills[i]);
          
        }
    }
    console.log('\nValidating Employee Information:');
    console.log('Employee Name:', data.empname);
    console.log('Employee ID:', data.empid);
    console.log('Mobile2:', data.Phone.mobile2);
    console.log('Skills:',ExactSkill);
    
});