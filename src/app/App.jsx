import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/pages/mainPage/mainPage';
import Footer from './components/ui/footer/footer';
import Category from './components/pages/categories/category';
import ResetButton from './components/common/resetButton/resetButton';
import Zaglushka from './components/ui/zaglushka/zaglushka';

const App = () => {
    const [runSite, setRunSite] = useState(false);
    return (
        <div className='container'>
            {!runSite ? (
                <Zaglushka setRunSite={setRunSite} />
            ) : (
                <>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route
                            path='about/:subCutName?'
                            element={<Category category={'about'} />}
                        />
                        <Route
                            path='locations/:location?'
                            element={<Category category={'locations'} />}
                        />
                        <Route
                            path='symbols/:symbol?'
                            element={<Category category={'symbols'} />}
                        />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                    <Footer />
                    <ResetButton />
                </>
            )}
        </div>
    );
};

export default App;
