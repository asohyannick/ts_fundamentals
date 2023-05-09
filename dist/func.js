"use strict";
function claculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
claculateTax(10000, 2023);
//# sourceMappingURL=func.js.map