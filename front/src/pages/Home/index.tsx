import React, { useState } from 'react'

import Card from '../../components/Card';

const Home: React.FC = ({}) => {
    return (
     <>

    <Card author= 'J.K Rowling'
      total_ranking={0}
      description='O ladrão de raios, em que Percy descobre sua ligação com os deuses do Olimpo e precisa impedir uma guerra entre eles, que acabaria com toda a civilização ocidental; O Mar de Monstros, quando ele e seus amigos se envolvem numa perigosa aventura para defender o Acampamento Meio-Sangue; A maldição do Titã'/>
     </>
    )
};

export default Home;