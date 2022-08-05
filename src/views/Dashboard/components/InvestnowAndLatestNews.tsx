import React from 'react'

const InvestnowAndLatestNews = () => {

    return(
        <>
        <div className='InvestnowAndLatestNewsFirstDiv'>
            <div className='InvestNow'>
                <p className='InvestNowText'>Invest Now</p>
            </div>
            <div className='BelowInvestNow'>
                <div className='ChatOnDescord'>
                <p className='ChatOnDescordText'>ChatOnDescordText</p>
                </div>
                <div className='ReadDocs'>
                <p className='ReadDocsText'>Read Docs</p>
                </div>
            </div>
            <div className='BelowDescordAndRead'>
            <div className='BoardroomBox'>
                <p className='BoardroomText'>Boardroom</p>
            </div>
            <div className='RecommentBox'>
                <p className='RecommentBoxText'>Recommend</p>
            </div>
            </div>
            <p className='TextBelowBoardroom'>Stake Bshare and BOMB every Epoch</p>
            <p className='TVLprice'>TVL: $23,288,0</p>
            <hr className='LineAfetrBoardroom'></hr>
            <p className='TotalStaked'>Total Staked: 7232</p>
            <div className='LastDivBoardroomBox'>
                <p className='DailyReturnDiv'>Daily Returns:<br/>2%</p>
                <p className='YourStakeDiv'>Your Stake: <br/>6.0000<br/>=$656747</p>
                <p className='EarnedDiv'>Your Stake: <br/>16.09000<br/>=$29589</p>
            </div>
            <div className='DepositAndWithdrawDivBoardroom'>
                <div className='depositButton'>
                    <p className='depositButtonText'>Deposit</p>
                </div>
                <div className='withdrawButton'>
                    <p className='withdrawButtonText'>Withdraw</p>
                </div>
            </div>
            <div className='claimRewardButton'>
                <p className='claimRewardButtonText'>Claim Rewards</p>
            </div>
            <div className='LatestNewsDiv'>
                <p className='LatestNewsText'>Latest News</p>
            </div>
        </div>
        </>
    );
}

export default InvestnowAndLatestNews;