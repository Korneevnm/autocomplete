import React from 'react';
import AutoComplete from '../../containers/AutoComplete';
import filtersArray from '../../filtersArray';

import styles from './styles.module.sass';

const App = () => {
  filtersArray.map(option => {
    if (option.name === 'country') option.title = 'Страна';
    if (option.name === 'year') option.title = 'Год';
    if (option.name === 'region') option.title = 'Регион';
    return option;
  });
  return (
    <div className={styles.app}>
      <AutoComplete options={filtersArray} />
    </div>
  );
};

export default App;
