import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const Container = styled.div`
  width: calc(100vw - 18rem);
  padding-right: 50px;
`;

export const Welcome = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  line-height: 48px;
  color: var(--textColor500);
`;

export const MenuButton = styled.div`
  width: 100%;
  border-bottom: 1.5px solid var(--textColor200);
  margin-bottom: 30px;
`;

export const ButtonParagraph = styled.button`
  font-size: 21px;
  font-weight: 400;
  line-height: 31px;
  color: var(--textColor200);
  display: inline;
  padding: 15px 50px;
  border: none;
  background-color: var(--backgroundGray);

  &:hover {
    color: var(--textColor500);
    transition: 10ms;
    border-bottom: 1.5px solid var(--textColor500);
  }
`;

export const FormLogin = styled.div`
  width: 30rem;
`;

export const StyledTrigger = styled(Select.SelectTrigger)`
  width: 12rem;
  background-color: var(--background);
  color: var(--textColor300);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
`;

export const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: var(--background);
  border-radius: 6px;
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  all: unset;
  font-size: 14px;
  line-height: 1.5;
  color: var(--textColor500);
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 5px;
  position: relative;

  &:focus {
    background-color: var(--primaryColorHover);
    color: var(--background);
    cursor: pointer;
  }
`;

export const ContentRowLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: end;
`;
