import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Secao } from './styles';
import { NavRodape } from '../components/NavRodape';

const CardWrapper = styled.div`
margin: 10%;
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  display: none;
`;

const ExpandedCard = styled(CardWrapper)`
  width: 400px;

  ${Details} {
    display: block;
  }
`

const CardEventos = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Container>

    <Secao>Eventos</Secao>
    <div onClick={handleCardClick}>
      {isExpanded ? (
          <ExpandedCard>
          <CardContent>
            <h3>Título do Card</h3>
            <p>Conteúdo do card. Clique para ver mais detalhes.</p>
            <Details>
              <p>Detalhe 1</p>
              <p>Detalhe 2</p>
              {/* Adicione mais detalhes conforme necessário */}
            </Details>
          </CardContent>
        </ExpandedCard>
      ) : (
          <CardWrapper>
          <CardContent>
            <h3>Título do Card</h3>
            <p>Conteúdo do card. Clique para ver mais detalhes.</p>
          </CardContent>
        </CardWrapper>
      )}
    </div>
    <NavRodape/>
      </Container>
  );
};

export default CardEventos;