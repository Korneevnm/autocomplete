import React from 'react';
import { Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

import styles from './styles.module.sass';

const Tags = ({ tags, handleClose }) => {
  return (
    <div className={styles.tags}>
      <TweenOneGroup
        enter={{
          scale: 0.6,
          opacity: 0,
          type: 'from',
          duration: 200
        }}
        leave={{ opacity: 0, width: 0, scale: 0, duration: 100 }}
        appear={false}>
        {tags.map(tag => (
          <span key={tag} style={{ display: 'inline-block' }}>
            <Tag
              closable
              color='#108ee9'
              className={styles.tag}
              onClose={e => {
                e.preventDefault();
                handleClose(tag);
              }}>
              {tag}
            </Tag>
          </span>
        ))}
      </TweenOneGroup>
    </div>
  );
};

export default Tags;
