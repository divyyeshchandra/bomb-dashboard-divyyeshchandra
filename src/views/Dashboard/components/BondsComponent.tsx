import React from 'react'

const BondsFunc=()=>{
    
    return(
        <>
            <div className='BondsStarting'>
                <p className='BondText'>Bonds</p>
                <p className='TextBelowBondText'>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                <div className='BondsSecondDivStarting'>
                    <div className='BondsSecondDivStartingFirstDiv'>
                        <p className='BondsSecondDivStartingFirstDivText1'>Current Price: (Bomb)^2</p>
                        <p className='BondsSecondDivStartingFirstDivText2'>Available to redeem:</p>
                        <p className='BondsSecondDivStartingFirstDivText3'>Purchase BBond<br/>Bomb is over peg</p>
                        <div className='RedeemButton'>
                            <p className='RedeemButtonText'>Purchase</p>
                        </div>
                        <hr className='LineAfterBonds'></hr>
                    </div>
                    <div className='BondsSecondDivStartingSecondDiv'>
                        <p className='BondsSecondDivStartingSecondDivText1'>BBond = 6.2872 BTCB</p>
                        <p className='BondsSecondDivStartingSecondDivText2'>456</p>
                        <p className='BondsSecondDivStartingSecondDivText4'>Redeem Bomb</p>
                        <div className='RedeemButton1'>
                            <p className='RedeemButtonText1'>Redeem</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BondsFunc;