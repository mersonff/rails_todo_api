import React, { useState } from 'react'

import {ContainerPage} from './styles';

import Card from '../../components/Card';

const Home: React.FC = ({}) => {
    return (
     <ContainerPage>

        <Card author= 'J.K Rowling'
            total_ranking={0}
            description='O ladrão de raios, em que Percy descobre sua ligação com os deuses do Olimpo e precisa impedir uma guerra entre eles, que acabaria com toda a civilização ocidental'
        />

        <Card author= 'J.K Rowling'
            total_ranking={0}
            description='O ladrão de raios, em que Percy descobre sua ligação com os deuses do Olimpo e precisa impedir uma guerra entre eles, que acabaria com toda a civilização ocidental'
        />

        <Card author= 'J.K Rowling'
            total_ranking={0}
            description='O ladrão de raios, em que Percy descobre sua ligação com os deuses do Olimpo e precisa impedir uma guerra entre eles, que acabaria com toda a civilização ocidental'
        />
     </ContainerPage>
    )
};

export default Home;