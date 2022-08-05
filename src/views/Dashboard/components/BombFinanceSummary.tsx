import React from 'react';
const BombFinanceSummary = ()=>{
    return (
        <>
            <div className='firstContainer'>
                <p className='bombfinancesummary--heading'>Bomb Finance Summary</p>
                <hr className='bombfinancesummary--heading--line'></hr>
                <div className='container'>
                    <div className='container1'>
                        <div className='FirstThreeLetters'>
                            <div className='FirstThreeLetters-text1'>
                                <p>Current Supply</p>
                            </div>
                            <div className='FirstThreeLetters-text2'>
                                <p>Total Supply</p>
                            </div>
                            <div className='FirstThreeLetters-text3'>
                                Price
                            </div>
                        </div>
                        <hr className='Line-After-FirstThreeLetters1'></hr>
                        <div className='FirstDiv'>
                            <p className='BombElement'>$BOMB</p>
                            <p className='BombElement2'>8.85M</p>
                            <p className='BombElement3'>60.9K</p>
                            <p className='BombElement4'>0.24$<br/>1.05 BTCB</p>
                        </div>
                        <hr className='Line-After-FirstThreeLetters2'></hr>
                        <div className='SecondDiv'>
                            <p className='Bshare'>$BSHARE</p>
                            <p className='Bshare2'>11.43K</p>
                            <p className='Bshare3'>8.49m</p>
                            <p className='Bshare4'>$300<br/>13000 BTCB</p>
                        </div>
                        <hr className='Line-After-FirstThreeLetters3'></hr>
                        <div className='ThirdDiv'>
                            <p className='Bbond'>$BSHARE</p>
                            <p className='Bbond2'>20.00K</p>
                            <p className='Bbond3'>175K</p>
                            <p className='Bbond4'>$0.28<br/>1.15 BTCB</p>
                        </div>
                    </div>
                    <div className='container2'>
                        <p className='CurrentEpoch'>Current Epoch<br/>258</p>
                        <hr className='Line1'></hr>
                        <p className='NextEpochIn'>03:38:36<br/>Next Epoch in</p>
                        <p className='LiveTwap'>Live TWAP:1.17</p>
                        <p className='TVL'>TVL:$5,003,112</p>
                        <p className='LastEpoch'>Last Epoch TWAP:1.17</p>
                    </div>
                    <div className='container3'>
                        <div className='eclipse'>
                            <div className='insideeclipse'>
                                <p className='insideeclipseText'>
                                    $10,451
                                    +22%
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='Container3-Bomb'>Bomb:17%</p>
                            <p className='Container3-Bshare'>Bshare:12%</p>
                            <p className='Container3-Bbond'>Bbond:22%</p>
                            <p className='Container3-Bomb-BTCB'>Bomb BTCB:17%</p>
                            <p className='Container3-Bshare-BNB'>Bshare BNB:17%</p>
                            <p className='Container3-others'>others:17%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BombFinanceSummary;