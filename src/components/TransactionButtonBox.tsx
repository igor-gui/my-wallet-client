import { TransactionButtons } from "@/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "@/styles";



export function TransactionButtonBox() {

    return (
        <TransactionButtons>
            <Button>entrada</Button>
            <Button>saída</Button>
        </TransactionButtons>
    );
}


function Button({ children }: { children: string }) {
    const navigate = useNavigate();
    
    function goToTransactionForm(e: React.MouseEvent<HTMLInputElement>) {
        e.preventDefault();

        const navig = (path : string) => navigate(`/new_transaction/${path}`);

        return children === "saída" ? navig("saida")
            : children === "entrada" ? navig(children)
                : console.log('the input data should be "entrada" or "saída"');


    }

    return <ButtonStyle type="submit" onClick={(e) => goToTransactionForm(e)} value={`Nova ${children}`}></ButtonStyle>
}

