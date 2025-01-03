import React from "react";
import PageHeader from "../components/PageHeader";
import NavBar from "../components/NavBar";
import Steps from "../components/Steps";
import TermsBody from "../components/TermsBody";

const Terms = () => {

    return (
        <div className="w-5/6 h-screen flex flex-col justify-start items-center overflow-auto">
            <PageHeader />
            <NavBar main={'Quotes'} sub={'Quote Response'} mainlink={'/'} sublink={'/quote-response'} />
            <Steps id={2} />
            <TermsBody />
        </div>
    )
}

export default Terms;