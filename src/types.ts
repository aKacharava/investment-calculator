export type InvestmentData = {
    year?: number;
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export type ResultData = {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
}
