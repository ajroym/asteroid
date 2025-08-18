'use client'

import { useState } from "react";
import ClientErrorModal from "./error-modal";
import SearchButton from "../search/search-button";

export function ErrorModalWrapper({ message }: { message: string }) {
    const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);

    const closeModal = () => {
        setShouldShowModal(false);
    }

    const showModal = () => {
        setShouldShowModal(true);
    }

    return (
        <>
        <SearchButton showModal={showModal}></SearchButton>
        { shouldShowModal &&
            <ClientErrorModal closeModal={closeModal} message={message}></ClientErrorModal>
        }
        </>
    )
}