import React, { FC } from 'react';

interface Props {
    border: string
    color: string
    background: string
    height: string
    width: string
    radius: string
    onClick: () => void
    children?: React.ReactNode
}

const Button: FC<Props> = ({
  border, color, background, height, width, radius, onClick, children = 'Button',
}) => (
  <button
    type="button"
    style={{
      color,
      backgroundColor: background,
      border,
      borderRadius: radius,
      height,
      width,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
