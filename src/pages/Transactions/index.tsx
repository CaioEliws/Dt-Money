import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento De site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Aluguel do apartamento</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 1.200,00
                                </PriceHighLight>
                            </td>
                            <td>Casa</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}