import { toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = styled.div`
  position: fixed;
  top : 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: red;
  span {
    display: flex;
    align-items: center;
    font-weight: 500;
  }
`;

const WordLimitToast = () => {
  return (
    <ToastComponent>
      <span>이것은 토스트 경고창</span>
    </ToastComponent>
  );
};

export const handleWordLimitToast = () => {
  return toast(({}) => <WordLimitToast />, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'words-limit',
    containerId: 'words',
  });
};
