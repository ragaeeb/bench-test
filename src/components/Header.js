import { string } from "prop-types";

const Header = ({ title }) => (
  <section className="title">
    <h3>{title}</h3>
  </section>
);

Header.propTypes = {
  title: string,
};

export default Header;
