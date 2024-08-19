import {InvestmentData} from "../../types.ts";

export default function UserInput(
    props: {
        investmentData: InvestmentData,
        onChangeInput: (inputIdentifier: string, newValue: string) => void
    }
) {
    return(
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        min="10"
                        step="10"
                        value={props.investmentData.initialInvestment}
                        onChange={(event) => props.onChangeInput('initialInvestment', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        min="10"
                        step="10"
                        value={props.investmentData.annualInvestment}
                        onChange={(event) => props.onChangeInput('annualInvestment', event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return (%)</label>
                    <input
                        type="number"
                        min="1"
                        step="0.01"
                        value={props.investmentData.expectedReturn}
                        onChange={(event) => props.onChangeInput('expectedReturn', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duration (years)</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={props.investmentData.duration}
                        onChange={(event) => props.onChangeInput('duration', event.target.value)}
                        required
                    />
                </div>
            </div>
        </section>
    )
}
