import React from 'react';
import cn from 'classnames';
import { Checkbox } from 'antd';

import styles from './styles.module.sass';

const Options = ({ options, handleClick, activeOption }) => {
  return (
    <Checkbox.Group className={styles.optionsList}>
      {options &&
        options.map((option, idx) => (
          <Checkbox
            key={option.id}
            onChange={handleClick}
            value={option.title}
            className={cn({
              [styles.active]: activeOption === idx
            })}>
            {option.title}
          </Checkbox>
        ))}
    </Checkbox.Group>
  );
};

export default Options;
