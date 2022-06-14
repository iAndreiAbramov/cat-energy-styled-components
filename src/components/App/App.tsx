import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';
import { CatalogPage } from 'pages/CatalogPage';
import { FormPage } from 'pages/FormPage';
import { HomePage } from 'pages/HomePage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Home()} element={<HomePage />} />
                <Route path={AppRoute.Form()} element={<FormPage />} />
                <Route path={AppRoute.Catalog()} element={<CatalogPage />} />
            </Routes>
        </BrowserRouter>
    );
};
