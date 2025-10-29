import React, { useState } from 'react'
import { RouletteNumbers, RouletteNumbersSorted } from '../constansts/rouletteNumbers'

const NumberDashboard = () => {
    const numbers = RouletteNumbers
    return (
        <>
            <div className='container border border-danger border-5'>
                <div className=' row '>
                    {
                        numbers.map((number, i) => (
                            <div className='d-flex col-2 border '>
                                <div className=''>{number.number} : </div>
                                <div className=''>{number.color} , </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NumberDashboard