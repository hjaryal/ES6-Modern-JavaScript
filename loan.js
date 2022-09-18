var loan1 = {
    id : '101',
    customerName : 'Maria S.',
    phoneNumber : 'xx xxx xxxx',
    address : 'Tempe 85281',
    loanAmount : 250,
    interest : 6,
    loanTermYears : 4,
    loanType : 'Student loans',
    description : 'IFT 458'
}

var loan2 = {
    id : '102',
    customerName : 'Hansika Jaryal',
    phoneNumber : 'xx xxx xxxx',
    address : 'Tempe 85281',
    loanAmount : 300,
    interest : 6,
    loanTermYears : 7,
    loanType : 'Equity loans',
    description : 'IFT 458'
}

var loan3 = {
    id : '103',
    customerName : 'Karan Roy',
    phoneNumber : 'xx xxx xxxx',
    address : 'Tempe 85281',
    loanAmount : 200,
    interest : 6,
    loanTermYears : 2,
    loanType : 'Mortgage loans',
    description : 'IFT 458'
}

var loan4 = {
    id : '104',
    customerName : 'Sofia R.',
    phoneNumber : 'xx xxx xxxx',
    address : 'Tempe 85281',
    loanAmount : 450,
    interest : 6,
    loanTermYears : 3,
    loanType : 'Equity loans',
    description : 'IFT 458'

}

var loan5 = {
    id : '105',
    customerName : 'John T.',
    phoneNumber : 'xx xxx xxxx',
    address : 'Tempe 85281',
    loanAmount : 500,
    interest : 6,
    loanTermYears : 4,
    loanType : 'Student loans',
    description : 'IFT 458'   

}



function calculatedLoanAmount(loan){
    const i = loan.interest/(100*12);
    const n = 1/((1+i)**(loan.loanTermYears*12)); 
    const pv = (loan.loanAmount/i)*(1-n)
    return pv;
}

function displayLoanDetails(loan){
    console.log(loan);
    console.log(calculatedLoanAmount(loan));
}

displayLoanDetails(loan1);
displayLoanDetails(loan2);
displayLoanDetails(loan3);
displayLoanDetails(loan4);
displayLoanDetails(loan5);