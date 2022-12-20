import React, { useState } from 'react'

import {Container} from './styles'
import Rating from '@mui/material/Rating'

interface Cardprops {
    url?: string
    author: string
    description: string
    total_ranking: number
}

const Card: React.FC<Cardprops> = ({author, description, total_ranking}) => {
    const [ranking, setRaking] = useState<number | null>(total_ranking)

    return (
    <Container>
        <img src='https://www.rickriordan.com.br/assets/img/percyjackson/gallery/o_ladrao_de_raios_gn.png' alt='teste'></img>
        <Rating
            name="simple-controlled"
            value={ranking}
            onChange={(event, newValue) => {
            setRaking(newValue);
        }}
        />
        <div>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    </Container>
)};

export default Card;