import React from 'react';

const styles = {
  screen: {
    backgroundColor: 'white',
    borderColor: 'grey',
    border: 'solid',
    borderWidth: '1rem',
    borderRadius: '12px',
  },
};

const ComputerScreen = () => {
  return (
    <>
      <div styles={styles.screen}>Hello</div>
    </>
  );
};

export default ComputerScreen;
