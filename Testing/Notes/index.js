const getFullName = (fName,lName) => {
    return `${fName} ${lName}`
}

const actualFullName =getFullName("Bruce", "Wysno")

const  expectedName = "BruceWysno"
if(actualFullName !== expectedName){
    throw new Error(`${actualFullName} is not equal to ${expectedName}`)
}

/* 
Automated test is code that throws an error when actual output does notmatch with the expected output it will pass when the output is 
correct and provide meaningful feedback when it is not

*/