import Header from "./components/Header/Header.tsx";
import UserInput from "./components/UserInput/UserInput.tsx";
import {InvestmentData} from "./types.ts";
import Result from "./components/Result/Result.tsx";
import {useState} from "react";

const INITIAL_INVESTMENT: InvestmentData = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 2
}

function App() {
    const [investment, setInvestment] = useState<InvestmentData>(INITIAL_INVESTMENT)

    const inputIsValid: boolean = (investment.duration > 0)

    function handleChange(inputIdentifier: string, newValue: string) {
        setInvestment((prevUserInput: InvestmentData) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header />
            <UserInput investmentData={investment} onChangeInput={handleChange} />
            {inputIsValid ? <Result investment={investment}/> : <p className="center">Please enter a valid duration greater then 0</p>}
        </>
    )
}

export default App
