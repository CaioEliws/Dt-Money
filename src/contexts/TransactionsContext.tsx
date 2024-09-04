import { createContext, ReactNode, useEffect, useState } from "react";

interface Transacion {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transacion[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
        <TransactionsContext.Provider value={{ transactions }}>
            { children }
        </TransactionsContext.Provider>
    )
}