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
            <Result investment={investment} />
        </>
    )
}

export default App
