
import css from "./SectionAddress.module.css"; // Importuj style

const Address = () => {
  return (
    <div className={css.build_title}>
      <h1>
        <span className={css.companyName}>Tapicer Jędrzejów</span> Zaprasza!
      </h1>
      <h2>ul. Strażacka 39, 28-300 Jędrzejów</h2>
    </div>
  );
};

export default Address;
