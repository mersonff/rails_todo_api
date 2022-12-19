import React from 'react'

import {Container} from './styles'

interface Cardprops {
    url?: string
    author: string
    description: string
}

const Card: React.FC<Cardprops> = ({author, description}) => (
    <Container>
        <img src='https://www.rickriordan.com.br/assets/img/percyjackson/gallery/o_ladrao_de_raios_gn.png' alt='teste'></img>
        <div>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    </Container>
);

export default Card;