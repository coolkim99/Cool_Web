import React from "react";
import Header from "../components/common/Header";
import GuestListContainer from '../containers/guests/GuestListContainer';
import PaginationContainer from '../containers/guests/PaginationContainer';
import EditorContainer from '../containers/guests/EditorContainer';
import WriteActionButtonsContainer from '../containers/guests/WriteActionButtonsContainer';

const GuestPage = () => {
    return (
        <>
        <Header/>
        <EditorContainer/>
        <WriteActionButtonsContainer/>
        <GuestListContainer/>
        <PaginationContainer />
        </>
    );
}

export default GuestPage;