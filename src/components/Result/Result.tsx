import {InvestmentData, ResultData} from "../../types.ts";
import {calculateInvestmentResults, formatter} from "../../utils/investment.ts";

export default function Result(
    props: {
        investment: InvestmentData
    }
) {
    const results: ResultData[] = calculateInvestmentResults(props.investment)
    const initialInvestment: number = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Years)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
            {
                results.map((result: ResultData, index: number) => {
                    const totalInterest: number = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;

                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(result.valueEndOfYear + result.annualInvestment)}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
