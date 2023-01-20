import React from "react";
import vk from '../../images/vk.svg';
import cl from './social.module.css';

const Vk = () => {
  return (
    <div
      className={cl.social}
    >
      <a onClick={(e) => e.preventDefault()} href="#">
        <img src={vk} />
      </a>
    </div>
  );
};

export default Vk;
