import React from 'react';
import {Table} from "../../components/Table/Table";
import {MainLayout} from "../../components/layouts/MainLayout";
import {ButtonLogout} from "../../components/Buttons/ButtonLogout";

export const Main = () => {
    return (
        <MainLayout>
            <Table />
            <ButtonLogout />
        </MainLayout>
    )
}
