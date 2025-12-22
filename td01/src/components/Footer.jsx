function Footer() {
    const now = new Date();
  return (
    <footer>
      <p>© {now.getFullYear()} - Abdelghafour ELMOBARAKY, Tous droits réservés.</p>
    </footer>
  );
}
export default Footer;