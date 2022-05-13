import Header from "./header";

const CuestionarioTemplate = () => {
  return (
    <>
      <Header />
      <div className="card card-style">
        <div className="content">
          <h1>Cuestionario COVID</h1>
          <p className="color-highlight font-12 mt-n3 pt-1 mb-2">
            Responde lo mas sinsero que puedas
          </p>
          <p>
            Lorem ipsum dolor sit amet, ut veniam inimicus instructior est, sint
            veri posse ut quo, diam everti vituperata cum eu. Tale assum melius
            cum eu. Duo ad everti instructior. In mei nemore apeirian urbanitas,
            posse iudico ei has.
          </p>
          <ul className="icon-list mb-0">
            <li>
              <i className="fa fa-check color-green-dark" />
              Over, Push, Parallax
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Left or Right Position
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Attached or Boxed Layout.
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Any width you require.
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Auto Activate on page load.
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Can deploy other menus or sheets.
            </li>
            <li>
              <i className="fa fa-check color-green-dark" />
              Any Icon Layout or Boxed Design.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CuestionarioTemplate;
