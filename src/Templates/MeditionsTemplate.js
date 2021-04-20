import React from 'react'
import Card from '../Components/Card'
import { meditions } from '../utils/constants'

const MeditionsTemplate = ({data}) => {

    const getColorReloj = (medition, value) =>{
        if (medition === "Viento" && value > 50 ){
            return "fondo"
        }

        if (medition === "Peso Aplicado" && value > 6000 ){
            return "fondo"
        }
        if (medition === "Peso en Gancho" && value > 5000 ){
            return "fondo"
        }

    }




    return (
        <>
            <div className="meditions">
                {
                    meditions.map((medition, index) =>{
                        
                        return(
                            <div>
                                <Card 
                                    data={data[medition.data]}
                                    title={medition.data}
                                    index={index}
                                    className={ getColorReloj(medition, data[medition.data] ) }
                                />

                            </div>
                    )})
                }
            </div>
        </>
    )
}

export default MeditionsTemplate
