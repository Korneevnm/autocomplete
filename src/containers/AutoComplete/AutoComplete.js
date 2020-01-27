import React, { useState, useRef, useEffect } from 'react';
import { Input, Popover, Checkbox } from 'antd';
import Options from '../../components/Options';
import Tags from '../../components/Tags';

import styles from './styles.module.sass';

const AutoComplete = ({ options }) => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const [activeOption, setActiveOption] = useState(0);
  const [tempFilter, setTempFilter] = useState(undefined);
  const [tempOperator, setTempOperator] = useState(undefined);
  const [tempOption, setTempOption] = useState(undefined);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tempFilter, tempOperator, tempOption]);

  const handleChange = e => {
    setInput(e.target.value);
    if (!e.target.value.includes('=')) {
      const optionsFilter = options.filter(
        option =>
          option.title &&
          option.title.toLowerCase().trim() ===
            e.target.value.toLowerCase().trim()
      );
      setTempFilter(...optionsFilter);
      setTempOperator(undefined);
    } else {
      setTempOperator('=');
    }

    if (tempFilter && tempOperator && tempOption !== undefined) {
      setTempOption(
        tempFilter.filters.filter(
          option =>
            option.title &&
            option.title.toLowerCase().trim() ===
              e.target.value
                .split(' = ')[1]
                .toLowerCase()
                .trim()
        )[0]
      );
    }
  };

  const handleClick = e => {
    if (tempFilter) {
      setTempOperator('=');
      setInput(input + '= ');
    } else {
      setInput(e.target.value + ' ');
      const optionsFilter = options.filter(
        option => option.title === e.target.value
      );
      setTempFilter(...optionsFilter);
    }

    if (tempFilter && tempOperator) {
      setTags([
        ...tags,
        `${tempFilter.title} ${tempOperator} ${e.target.value}`
      ]);
      setInput('');
      setTempFilter(undefined);
      setTempOperator(undefined);
      setTempOption(undefined);
    }
  };

  const handleKey = e => {
    let currentOption;
    if (tempFilter && tempOperator) {
      currentOption =
        tempFilter.filters !== undefined &&
        tempFilter.filters.map(option => option)[activeOption];
    } else if (tempFilter === undefined) {
      currentOption = options.map(option => option)[activeOption];
    } else {
      currentOption = ['='][activeOption];
    }
    if (e.key === 'Enter') {
      if (tempFilter && tempOperator && tempOption) {
        if (tags.includes(input)) return;
        setTags([...tags, input]);
        setInput('');
        setTempFilter(undefined);
        setTempOperator(undefined);
        setTempOption(undefined);
        setActiveOption(0);
      } else if (tempFilter && tempOperator) {
        setInput(input.split(' = ')[0].trim() + ' = ' + currentOption.title);
        setTempOption(currentOption.title);
      } else if (tempFilter === undefined) {
        setTempFilter(currentOption);
        setInput(currentOption.title + ' ');
      } else {
        setTempOperator(' = ');
        setInput(input + '= ');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeOption === 0) return;
      setActiveOption(activeOption - 1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      let optionsArray = [];
      if (tempFilter === undefined) optionsArray = options;
      else optionsArray = tempFilter.filters;
      if (activeOption === optionsArray.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  const handleClose = removedTag => {
    setTags(tags.filter(tag => tag !== removedTag));
  };

  const filteredOptions = options.filter(option =>
    option.title.toLowerCase().includes(input.toLowerCase())
  );

  const searchValue = input.split(' = ')[1];

  return (
    <>
      <Tags tags={tags} handleClose={handleClose} />
      <div className={styles.filters}>
        {tempFilter === undefined && (
          <Popover
            trigger='click'
            placement='bottomLeft'
            className='Options'
            content={
              filteredOptions !== undefined && filteredOptions.length > 0 ? (
                <Options
                  options={filteredOptions}
                  handleClick={handleClick}
                  activeOption={activeOption}
                />
              ) : (
                'nothing not found'
              )
            }>
            <Input
              type='text'
              className={styles.input}
              value={input}
              onChange={handleChange}
              onKeyDown={handleKey}
              placeholder='Just start writing'
              ref={inputRef}
            />
          </Popover>
        )}
        {tempFilter && !tempOperator && (
          <Popover
            trigger='focus'
            placement='bottomLeft'
            className='Options'
            content={
              <Checkbox.Group className={styles.optionsList}>
                <Checkbox
                  onChange={handleClick}
                  value='='
                  className={styles.active}>
                  =
                </Checkbox>
              </Checkbox.Group>
            }>
            <Input
              type='text'
              className={styles.input}
              value={input}
              onChange={handleChange}
              onKeyDown={handleKey}
              ref={inputRef}
            />
          </Popover>
        )}
        {tempFilter && tempOperator && (
          <Popover
            trigger='focus'
            placement='bottomLeft'
            className='Options'
            content={
              tempFilter.filters && tempFilter.filters.length > 0 ? (
                <Options
                  options={
                    searchValue
                      ? tempFilter.filters.filter(option =>
                          option.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase().trim())
                        )
                      : tempFilter.filters
                  }
                  handleClick={handleClick}
                  activeOption={activeOption}
                />
              ) : (
                'nothing not found'
              )
            }>
            <Input
              type='text'
              className={styles.input}
              value={input}
              onChange={handleChange}
              onKeyDown={handleKey}
              ref={inputRef}
            />
          </Popover>
        )}
      </div>
    </>
  );
};

export default AutoComplete;
