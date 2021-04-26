import React from "react";
import Header from "../components/common/Header";
import GuestListContainer from '../containers/guests/GuestListContainer';
import PaginationContainer from '../containers/guests/PaginationContainer';

const GuestPage = () => {
    return (
        <>
        <Header/>
        <GuestListContainer/>
        <PaginationContainer />
        </>
    );
}

export default GuestPage;