import React from 'react'
import Card from '../Components/Card'
import { meditions } from '../utils/constants'

const MeditionsTemplate = ({data}) => {

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
                                />

                            </div>
                    )})
                }
            </div>
        </>
    )
}

export default MeditionsTemplate
