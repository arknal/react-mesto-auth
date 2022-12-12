const Loader = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        zIndex: '1',
        display: 'block',
        backgroundColor: '#000',
      }}
    >
      <div className='spinner'>
        <div className='lds-roller'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
