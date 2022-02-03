import React, { FC } from 'react';

const Header: FC = () => {
  const auth = false;
  return (
    <div className="header">
      <div className="container-fluid">
        {auth ? 'auth' : (
          <div>noauth</div>
        )}
      </div>
    </div>
  );
};

export default Header;
