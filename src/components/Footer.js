function Footer(props) {
  console.log(props.user);
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2022. Андрей Микулин</p>
    </footer>
  );
}

export default Footer;
