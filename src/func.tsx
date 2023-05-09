function claculateTax(income: number, taxYear = 2023) : number {
    if(taxYear  < 2023) 
        return income * 1.2;
        // undefined
        return income * 1.3;
}

claculateTax(10_000, 2023);







