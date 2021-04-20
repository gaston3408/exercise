import React, { useEffect, useState } from 'react'
import { meditions } from '../utils/constants'

const Reloj = ({medition, index, className}) => {

    const [meditionPercent, setMeditionPercent] = useState(medition / 10000 * 240)
    const defaultValue = -90
    
    useEffect(() => {
        if(medition < 10000){
            setMeditionPercent(medition / 10000 * 240)
        }else{
            setMeditionPercent(10000 / 10000 * 240) 
        }
        document.getElementById(`aguja${index}`).style.transform = `rotate(${defaultValue + meditionPercent}deg)`
        
    }, [medition, index])

    return (
        <>
            <div className={`reloj ${className}`}>
                <img id={`aguja${index}`} className="aguja" style={{ height:200,position:'relative'}} src="./images/aguja.png"/>
            </div>
        </>
    )
}

export default Reloj
