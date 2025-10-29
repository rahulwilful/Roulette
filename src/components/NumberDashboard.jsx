import React, { useState } from 'react'
import { RouletteNumbers, RouletteNumbersSorted } from '../constansts/rouletteNumbers'
import Container from './Container'

const NumberDashboard = () => {
    const numbers = RouletteNumbersSorted
    return (
        <>
            <Container py={5}>

                <div className='container '>
                    <div className='row '>
                        {
                            numbers.map((number, i) => (
                                <button key={i} onClick={()=>{console.log(number.number)}} className='d-flex col-2 border pointer btn justify-content-center fw-medium text-light fs-3 ' style={{ backgroundColor: number.color }}>
                                    {number.number}
                                </button>
                            )
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NumberDashboard