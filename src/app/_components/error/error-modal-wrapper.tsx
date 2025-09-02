'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import ClientErrorModal from "./error-modal";
import SearchBar from "../search/search-bar";
import SearchButton from "../search/search-button";
import { parseDate } from "@/lib/api/api";

export function ErrorModalWrapper({ message }: { message: string }) {
    const router = useRouter();
    const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
    const [userEnteredDate, setUserEnteredDate] = useState<string>('');

    const closeModal = () => {
        setShouldShowModal(false);
    }

    const handleClick = () => {
        try {
            const dateString = parseDate(userEnteredDate);
            router.push(`/view?date=${dateString}`);

        } catch (error) {
            setShouldShowModal(true);
        }
    }

    const searchBarChanged = (value: string) => {
        setUserEnteredDate(value);
    }

    return (
        <>
        <SearchBar inputChanged={searchBarChanged}></SearchBar>
        <SearchButton showModal={handleClick}></SearchButton>
        { shouldShowModal &&
            <ClientErrorModal closeModal={closeModal} message={message}></ClientErrorModal>
        }
        </>
    )
}