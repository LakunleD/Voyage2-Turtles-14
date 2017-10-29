import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// =====================================
// STYLED COMPONENTS
// =====================================

const MainContent = styled.div`
  align-items: center;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 2.2vh;
  justify-content: space-between;
  width: 10vw;
  height: 17vh;
`;

const Card = styled.div`
  transition: 0.3s ease;
  background-color: #ECECEC;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 10vw;
  height: 24vh;
  margin-top: 1em;
  margin-left: 1em;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  };
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  justify-content: center;
  margin-top: 0.8em;
  padding-left: 0.5em;
`;

const SiteName = styled.h3`
`;

const Text = styled.p`
  color: #7E7C80;
  margin: 0;
`;

// ==========================================

const CardComponent = (props) => {
  return(
    <Card>
      <MainContent>
        <SiteName>{props.siteName}</SiteName>
      </MainContent>
      <Info>
        <Text>Last Visit:</Text>
        <Text>{props.lastVisit}</Text>
      </Info>
    </Card>
  )
}

CardComponent.propTypes = {
  siteName: PropTypes.string.isRequired,
  lastVisit: PropTypes.string.isRequired,
}

export default CardComponent;


