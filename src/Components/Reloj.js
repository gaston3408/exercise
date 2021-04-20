import React, { useEffect, useState } from 'react'

const Reloj = ({medition, index}) => {

    const [meditionPercent, setMeditionPercent] = useState(medition / 25000 * 240)
    const defaultValue = -90
    
    useEffect(() => {
        setMeditionPercent(medition / 20000 * 240)
        document.getElementById(`aguja${index}`).style.transform = `rotate(${defaultValue + meditionPercent}deg)`
    }, [medition, index])

    return (
        <>
            <div className="reloj">
                <img id={`aguja${index}`} className="Aguja" style={{ height:200,position:'relative'}} src="./images/aguja.png"/>
            </div>
        </>
    )
}

export default Reloj
