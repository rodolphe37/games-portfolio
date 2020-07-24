import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StopButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Recharger la partie!</StyledStartButton>
)

export default StopButton;
