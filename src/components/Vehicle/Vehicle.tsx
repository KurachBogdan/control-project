import { Container } from '@mui/material'
import './Vehicle.scss'

type Props = {}

const Vehicle = (props: Props) => {
    return (
        <div className="header-container">
            <Container maxWidth="xl" className="vehicle_container">
                <div className="vehicle_block">
                    <div className="text">
                        <div className="vehicle">
                            <p>Vehicle</p>
                        </div>
                        <div className="vehicle_title">
                            <p>
                                One of Saturn`s largest rings may be newer than
                                anyone
                            </p>
                        </div>
                        <div className="date_by_comments">
                            <p>
                                <span className="date">June 6, 2019</span>
                                <span className="by">
                                    <span className="by_color">By</span> Rickie
                                    Baroch
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Vehicle
