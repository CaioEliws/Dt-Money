import { useEffect, useState } from "react"

import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles"

interface Transacion {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<Transacion[]>([])

    async function loadTransactionsApi() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactionsApi()
    }, [])

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
                
            </TransactionsContainer>
        </div>
    )
}