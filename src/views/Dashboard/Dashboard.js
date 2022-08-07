import React from 'react';
import BombFinanceSummary from './components/BombFinanceSummary';
import ReadInvestMentStrategy from './components/ReadInvestmentStrategy';
import InvestnowAndLatestNews from './components/InvestnowAndLatestNews';
import BombFarmComponent from './components/BombFarmsComponent';
import BondsFunc from './components/BondsComponent';


const Dashboard = () => {
    return (
        <>
            <BombFinanceSummary />
            <ReadInvestMentStrategy/>
            <InvestnowAndLatestNews/>
            <BombFarmComponent/>
            <BondsFunc/>
        </>
    )
}

export default Dashboard;


