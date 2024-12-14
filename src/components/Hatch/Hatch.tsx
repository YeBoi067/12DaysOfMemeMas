import React from "react";
// Types
import { HatchType } from "../../helpers";
// Styles
import { Wrapper } from "./Hatch.styles";

type Props = {
  hatch: HatchType;
  handleClick: (nr: number) => void;
};

const Hatch: React.FC<Props> = ({
  hatch: { nr, text, img, open, link },
  handleClick,
}) => (
  <Wrapper
    open={open}
    background={img}
    enabled={true}
    onClick={() => handleClick(nr)}
  >
    <div className="front">
      <p>{nr}</p>
    </div>
    <div className="back">
      <p>{text}</p>
      {link &&
        open && ( // Only show link when hatch is open
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hatch-link"
          >
            Pump Fun
          </a>
        )}
    </div>
  </Wrapper>
);

export default Hatch;
