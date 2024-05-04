import logo from 'assets/images/youtube.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    <>
      <img src={logo} alt="Youtube" width="50" />
      <h3 style={{ marginLeft: '6px' }}>MyTube</h3>
    </>
  );
};

export default Logo;
