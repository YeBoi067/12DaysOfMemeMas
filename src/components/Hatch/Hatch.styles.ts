import styled from 'styled-components';
import hatchBackdrop from '../../img/hatch_backdrop.jpg';

type Props = {
  open: boolean;
  background: string;
  enabled: boolean;
};

export const Wrapper = styled.div<Props>`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  pointer-events: ${({ enabled }) => (enabled ? '' : 'none')};

  .front {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: ${props => (props.open ? 'rotateY(180deg)' : 'rotateY(0deg)')};

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Dancing Script', cursive;
      color: #fff;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 2rem;
      user-select: none;
    }
  }

  .back {
    position: absolute;
    background: center / cover url(${hatchBackdrop});
    top: 0px;
    left: 0px;
    z-index: ${props => (props.open ? 2 : 1)};
    transform: ${props => (props.open ? 'rotateY(0deg)' : 'rotateY(180deg)')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 10px;
      font-size: 1.2rem;
      text-align: center;
      user-select: none;
    }

    .hatch-link {
      margin-top: 10px;
      padding: 8px 15px;
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
      font-family: 'Dancing Script', cursive;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;