import React from "react";
import instagram from '../../images/instagram.svg';
import cl from './social.module.css';

const Instagram = () => {
  return (
    <div className={cl.social}>
      <a onClick={(e) => e.preventDefault()} href="#">
        <img src={instagram} />
      </a>
    </div>
  );
};

export default Instagram;
