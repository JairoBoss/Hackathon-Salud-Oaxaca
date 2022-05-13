
const Inicio = () => {
    
  return (
    <>
      <div>
        <div id="preloader" className="preloader-hide">
          <div className="spinner-border color-highlight" role="status" />
        </div>
        <div id="page" data-swup={0} className="device-is-ios">
          <div id="footer-bar" className="footer-bar-1">
            <a href="index.html" className="active-nav">
              <i className="fa fa-home" />
              <span>Home</span>
            </a>
            <a href="index-components.html">
              <i className="fa fa-star" />
              <span>Features</span>
            </a>
            <a href="index-pages.html">
              <i className="fa fa-heart" />
              <span>Pages</span>
            </a>
            <a href="index-search.html">
              <i className="fa fa-search" />
              <span>Search</span>
            </a>
            <a href="#" data-menu="menu-settings">
              <i className="fa fa-cog" />
              <span>Settings</span>
            </a>
          </div>
          <div className="page-content header-clear-small">
            <div
              className="splide single-slider slider-no-arrows slider-no-dots splide--loop splide--ltr splide--draggable is-active"
              id="single-slider-home"
              style={{ visibility: "visible" }}
            >
              <div className="splide__arrows">
                <button
                  className="splide__arrow splide__arrow--prev"
                  type="button"
                  aria-controls="single-slider-home-track"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  type="button"
                  aria-controls="single-slider-home-track"
                  aria-label="Go to first slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
              </div>
              <div className="splide__track" id="single-slider-home-track">
                <div
                  className="splide__list"
                  id="single-slider-home-list"
                  style={{
                    "-webkit-transform": "translate(-1500px)",
                    "-ms-transform": "translate(-1500px)",
                    transform: "translate(-1500px)",
                    "-webkit-transition":
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                    transition:
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                  }}
                >
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          Carefuly Built
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          Flexibility, Speed, Ease of Use.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/28.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          Elite Quality
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          Mobile Website, App or PWA Ready.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/29.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="single-slider-home-slide01"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          StickyMobile
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          The Menu Everyone Requested.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/13.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide is-active is-visible"
                    id="single-slider-home-slide02"
                    style={{ width: "375px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          Carefuly Built
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          Flexibility, Speed, Ease of Use.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/28.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="single-slider-home-slide03"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          Elite Quality
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          Mobile Website, App or PWA Ready.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/29.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          StickyMobile
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          The Menu Everyone Requested.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/13.jpg" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card rounded-m shadow-l mx-3">
                      <div className="card-bottom text-center mb-0">
                        <h1 className="color-white font-700 mb-n1">
                          Carefuly Built
                        </h1>
                        <p className="color-white opacity-80 mb-4">
                          Flexibility, Speed, Ease of Use.
                        </p>
                      </div>
                      <div className="card-overlay bg-gradient" />
                      <img className="img-fluid" src="images/pictures/28.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="splide__pagination">
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="single-slider-home-slide01"
                    aria-label="Go to slide 1"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="single-slider-home-slide02"
                    aria-label="Go to slide 2"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page is-active"
                    type="button"
                    aria-controls="single-slider-home-slide03"
                    aria-label="Go to slide 3"
                    aria-current="true"
                  />
                </li>
              </ul>
            </div>
            <div
              className="splide single-slider slider-no-arrows slider-no-dots splide--loop splide--ltr splide--draggable is-active"
              id="single-slider-cta"
              style={{ visibility: "visible" }}
            >
              <div className="splide__arrows">
                <button
                  className="splide__arrow splide__arrow--prev"
                  type="button"
                  aria-controls="single-slider-cta-track"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  type="button"
                  aria-controls="single-slider-cta-track"
                  aria-label="Go to first slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width={40}
                    height={40}
                  >
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                  </svg>
                </button>
              </div>
              <div className="splide__track" id="single-slider-cta-track">
                <div
                  className="splide__list"
                  id="single-slider-cta-list"
                  style={{
                    "-webkit-transform": "translate(-1875px)",
                    "-ms-transform": "translate(-1875px)",
                    transform: "translate(-1875px)",
                    "-webkit-transition":
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                    transition:
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                  }}
                >
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">This or That?</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Which is your Favorite?
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          Multiple choices are awesome, highlighting them is
                          even easier with our Call to Actions
                        </p>
                        <p className="text-center mt-n3 mb-0 pb-0">
                          <a
                            href="#"
                            className="btn btn-m bg-green-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
                          >
                            Call Now
                          </a>
                          <a
                            href="#"
                            className="icon icon-m rounded-s opacity-40 color-theme ms-3 me-3"
                          >
                            or
                          </a>
                          <a
                            href="#"
                            className="btn btn-m bg-red-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
                          >
                            GET A QUOTE
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">Direct Action</h1>
                        <p className="text-center color-highlight mt-n1 mb-2 font-12">
                          Invite Users to Tap Button
                        </p>
                        <p className="boxed-text-xl">
                          Make a button stand out at the top of your page so
                          it's easily accessible as a first option.
                        </p>
                        <a
                          href="#"
                          className="btn btn-m btn-center-l bg-highlight text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
                        >
                          Purchase today for $25
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="single-slider-cta-slide01"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">Call to Actions</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Sticky comes Prepared for You
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          Call to action are highly important, but we can't
                          choose a style for you, so we created a few!
                        </p>
                        <a
                          href="#"
                          className="btn btn-m btn-center-l bg-highlight text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
                        >
                          Swipe Left to Begin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="single-slider-cta-slide02"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-style">
                      <div className="content">
                        <h1 className="text-center mb-0">Let's get Social</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Follow &amp; Get in Touch with Us
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          It's easy. Just add your links and you're ready to go.
                          Social links are wildely available in Sticky
                        </p>
                        <p className="text-center pb-2">
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-phone ms-2 me-2"
                          >
                            <i className="fa fa-phone" />
                          </a>
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide is-active is-visible"
                    id="single-slider-cta-slide03"
                    style={{ width: "375px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">This or That?</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Which is your Favorite?
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          Multiple choices are awesome, highlighting them is
                          even easier with our Call to Actions
                        </p>
                        <p className="text-center mt-n3 mb-0 pb-0">
                          <a
                            href="#"
                            className="btn btn-m bg-green-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
                          >
                            Call Now
                          </a>
                          <a
                            href="#"
                            className="icon icon-m rounded-s opacity-40 color-theme ms-3 me-3"
                          >
                            or
                          </a>
                          <a
                            href="#"
                            className="btn btn-m bg-red-dark text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4 mt-3"
                          >
                            GET A QUOTE
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="single-slider-cta-slide04"
                    style={{ width: "375px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">Direct Action</h1>
                        <p className="text-center color-highlight mt-n1 mb-2 font-12">
                          Invite Users to Tap Button
                        </p>
                        <p className="boxed-text-xl">
                          Make a button stand out at the top of your page so
                          it's easily accessible as a first option.
                        </p>
                        <a
                          href="#"
                          className="btn btn-m btn-center-l bg-highlight text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
                        >
                          Purchase today for $25
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card card-style">
                      <div className="content mb-0">
                        <h1 className="text-center mb-0">Call to Actions</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Sticky comes Prepared for You
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          Call to action are highly important, but we can't
                          choose a style for you, so we created a few!
                        </p>
                        <a
                          href="#"
                          className="btn btn-m btn-center-l bg-highlight text-uppercase font-900 text-uppercase rounded-s shadow-xl mb-4"
                        >
                          Swipe Left to Begin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "375px" }}
                  >
                    <div className="card card-style">
                      <div className="content">
                        <h1 className="text-center mb-0">Let's get Social</h1>
                        <p className="text-center color-highlight mt-n1 font-12">
                          Follow &amp; Get in Touch with Us
                        </p>
                        <p className="boxed-text-xl mt-n3">
                          It's easy. Just add your links and you're ready to go.
                          Social links are wildely available in Sticky
                        </p>
                        <p className="text-center pb-2">
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-phone ms-2 me-2"
                          >
                            <i className="fa fa-phone" />
                          </a>
                          <a
                            href="#"
                            className="icon icon-s rounded-s shadow-xl color-white bg-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="splide__pagination">
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="single-slider-cta-slide01"
                    aria-label="Go to slide 1"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="single-slider-cta-slide02"
                    aria-label="Go to slide 2"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="single-slider-cta-slide03"
                    aria-label="Go to slide 3"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page is-active"
                    type="button"
                    aria-controls="single-slider-cta-slide04"
                    aria-label="Go to slide 4"
                    aria-current="true"
                  />
                </li>
              </ul>
            </div>
            <div className="card card-style">
              <div className="content mb-0">
                <h1 className="text-center mb-0">Packed with Goodies</h1>
                <p className="text-center color-highlight font-11 mt-n1">
                  The Absolute Best Products &amp; Care for You
                </p>
                <p className="boxed-text-xl mt-n3">
                  Over 10 years of Experience in Building Gorgeous Products only
                  for you! We are Envato Elite.
                </p>
                <div className="divider" />
              </div>
              <div className="row me-2 ms-2 mb-0">
                <div className="col-6 text-center">
                  <i className="fa fa-trophy color-yellow-dark fa-3x" />
                  <h2 className="mt-3 mb-1">Future Proof</h2>
                  <p>Built to last, with the latest quality code</p>
                </div>
                <div className="col-6 text-center">
                  <i className="fab fa-cloudscale color-highlight fa-3x" />
                  <h2 className="mt-3 mb-1">Powerful</h2>
                  <p>Speed, Features and Flexibility all in One!</p>
                </div>
                <div className="col-6 text-center">
                  <i className="fa fa-check color-green-dark fa-3x" />
                  <h2 className="mt-3 mb-1">Easy to Use</h2>
                  <p>Customers love our work for it's ease.</p>
                </div>
                <div className="col-6 text-center">
                  <i className="fa fa-life-ring color-blue-dark fa-3x" />
                  <h2 className="mt-3 mb-1">Customer Care</h2>
                  <p>We treat others like we want to be treated.</p>
                </div>
              </div>
            </div>
            <div
              className="splide double-slider slider-no-arrows slider-no-dots splide--loop splide--ltr splide--draggable is-active"
              id="double-slider-home-1"
              style={{ visibility: "visible" }}
            >
              <div className="splide__track" id="double-slider-home-1-track">
                <div
                  className="splide__list"
                  id="double-slider-home-1-list"
                  style={{
                    "-webkit-transform": "translate(-937.5px)",
                    "-ms-transform": "translate(-937.5px)",
                    transform: "translate(-937.5px)",
                    "-webkit-transition":
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                    transition:
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                  }}
                >
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-17"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          KolorMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-13"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          EazyMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-27"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          UltraMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-17"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          KolorMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide is-active is-visible"
                    id="double-slider-home-1-slide01"
                    style={{ width: "187.5px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-13"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          EazyMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide is-visible"
                    id="double-slider-home-1-slide02"
                    style={{ width: "187.5px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-27"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          UltraMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="double-slider-home-1-slide03"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-17"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          KolorMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-13"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          EazyMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-27"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          UltraMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-17"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          KolorMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={250}
                      className="card mx-3 rounded-m shadow-l bg-13"
                      style={{ height: "250px" }}
                    >
                      <div className="card-bottom text-center">
                        <h2 className="color-white font-900 mb-0">
                          EazyMobile
                        </h2>
                        <p className="text-center mb-3">
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                          <i className="fa fa-star color-yellow-dark" />
                        </p>
                        <a
                          href="#"
                          className="btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="card-overlay bg-gradient" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="splide__pagination">
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="double-slider-home-1-slide01 double-slider-home-1-slide02"
                    aria-label="Go to page 1"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page is-active"
                    type="button"
                    aria-controls="double-slider-home-1-slide02 double-slider-home-1-slide03"
                    aria-label="Go to page 2"
                    aria-current="true"
                  />
                </li>
              </ul>
            </div>
            <div className="card card-style">
              <div className="content mb-4">
                <h1 className="text-center mb-0">Care &amp; Quality</h1>
                <p className="text-center color-highlight font-11 mt-n1 pb-0">
                  No stone left unturned, no aspect overlooked.
                </p>
                <p className="text-center font-20 mt-n2">
                  <i className="fa fa-star color-yellow-dark" />
                  <i className="fa fa-star color-yellow-dark" />
                  <i className="fa fa-star color-yellow-dark" />
                  <i className="fa fa-star color-yellow-dark" />
                  <i className="fa fa-star color-yellow-dark" />
                </p>
                <div
                  className="splide single-slider slider-no-arrows slider-no-dots splide--loop splide--ltr splide--draggable is-active"
                  id="single-slider-home-quotes"
                  style={{ visibility: "visible" }}
                >
                  <div className="splide__arrows">
                    <button
                      className="splide__arrow splide__arrow--prev"
                      type="button"
                      aria-controls="single-slider-home-quotes-track"
                      aria-label="Previous slide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width={40}
                        height={40}
                      >
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                      </svg>
                    </button>
                    <button
                      className="splide__arrow splide__arrow--next"
                      type="button"
                      aria-controls="single-slider-home-quotes-track"
                      aria-label="Go to first slide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        width={40}
                        height={40}
                      >
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="splide__track"
                    id="single-slider-home-quotes-track"
                  >
                    <div
                      className="splide__list"
                      id="single-slider-home-quotes-list"
                      style={{
                        "-webkit-transform": "translate(-939px)",
                        "-ms-transform": "translate(-939px)",
                        transform: "translate(-939px)",
                        "-webkit-transition":
                          "transform 400ms                      cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s",
                        transition:
                          "transform 400ms                      cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s",
                      }}
                    >
                      <div
                        className="splide__slide splide__slide--clone"
                        style={{ width: "313px" }}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The code is always great with any Enabled template,
                          the customer support that wins me over always.
                        </h2>
                      </div>
                      <div
                        className="splide__slide splide__slide--clone"
                        style={{ width: "313px" }}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The best support I have ever had, it's so good I
                          purchased another theme. Highlighy Recommended.
                        </h2>
                      </div>
                      <div
                        className="splide__slide is-active is-visible"
                        id="single-slider-home-quotes-slide01"
                        style={{ width: "313px" }}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The code is always great with any Enabled template,
                          the customer support that wins me over always.
                        </h2>
                      </div>
                      <div
                        className="splide__slide"
                        id="single-slider-home-quotes-slide02"
                        style={{ width: "313px" }}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The best support I have ever had, it's so good I
                          purchased another theme. Highlighy Recommended.
                        </h2>
                      </div>
                      <div
                        className="splide__slide splide__slide--clone"
                        style={{ width: "313px" }}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The code is always great with any Enabled template,
                          the customer support that wins me over always.
                        </h2>
                      </div>
                      <div
                        className="splide__slide splide__slide--clone"
                        style={{ width: "313px" }}
                      >
                        <h2 className="text-center font-300 line-height-xl content mb-0 mt-0">
                          The best support I have ever had, it's so good I
                          purchased another theme. Highlighy Recommended.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <ul className="splide__pagination">
                    <li>
                      <button
                        className="splide__pagination__page"
                        type="button"
                        aria-controls="single-slider-home-quotes-slide01"
                        aria-label="Go to slide 1"
                      />
                    </li>
                    <li>
                      <button
                        className="splide__pagination__page is-active"
                        type="button"
                        aria-controls="single-slider-home-quotes-slide02"
                        aria-label="Go to slide 2"
                        aria-current="true"
                      />
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="btn btn-m btn-center-l text-uppercase font-900 bg-highlight rounded-sm shadow-xl mt-4 mb-0"
                >
                  More Testimonials
                </a>
              </div>
            </div>
            <div
              className="splide double-slider slider-no-arrows slider-no-dots splide--loop splide--ltr splide--draggable is-active"
              id="double-slider-home-2"
              style={{ visibility: "visible" }}
            >
              <div className="splide__track" id="double-slider-home-2-track">
                <div
                  className="splide__list"
                  id="double-slider-home-2-list"
                  style={{
                    "-webkit-transform": "translate(-937.5px)",
                    "-ms-transform": "translate(-937.5px)",
                    transform: "translate(-937.5px)",
                    "-webkit-transition":
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                    transition:
                      "transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99)                  0s",
                  }}
                >
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-3"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-star fa-4x color-yellow-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">Quality</h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built with Care and Detail
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-18"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-bolt fa-4x color-red-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Performance
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Fast and feature filled
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-14"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-trophy fa-4x color-blue-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Elite Care
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built by the Best for You
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-3"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-star fa-4x color-yellow-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">Quality</h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built with Care and Detail
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide is-active is-visible"
                    id="double-slider-home-2-slide01"
                    style={{ width: "187.5px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-18"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-bolt fa-4x color-red-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Performance
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Fast and feature filled
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide is-visible"
                    id="double-slider-home-2-slide02"
                    style={{ width: "187.5px" }}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-14"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-trophy fa-4x color-blue-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Elite Care
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built by the Best for You
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide"
                    id="double-slider-home-2-slide03"
                    style={{ width: "187.5px" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-3"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-star fa-4x color-yellow-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">Quality</h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built with Care and Detail
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-18"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-bolt fa-4x color-red-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Performance
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Fast and feature filled
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-14"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-trophy fa-4x color-blue-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Elite Care
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built by the Best for You
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-3"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-star fa-4x color-yellow-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">Quality</h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Built with Care and Detail
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                  <div
                    className="splide__slide splide__slide--clone"
                    style={{ width: "187.5px" }}
                  >
                    <div
                      data-card-height={180}
                      className="card mx-3 rounded-m shadow-l bg-18"
                      style={{ height: "180px" }}
                    >
                      <div className="card-top ms-3 mt-3">
                        <i className="fa fa-bolt fa-4x color-red-dark" />
                      </div>
                      <div className="card-bottom ms-3">
                        <h2 className="color-white font-900 mb-0">
                          Performance
                        </h2>
                        <p className="color-white font-11 mt-n1 mb-2">
                          Fast and feature filled
                        </p>
                      </div>
                      <div className="card-overlay bg-black opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="splide__pagination">
                <li>
                  <button
                    className="splide__pagination__page"
                    type="button"
                    aria-controls="double-slider-home-2-slide01 double-slider-home-2-slide02"
                    aria-label="Go to page 1"
                  />
                </li>
                <li>
                  <button
                    className="splide__pagination__page is-active"
                    type="button"
                    aria-controls="double-slider-home-2-slide02 double-slider-home-2-slide03"
                    aria-label="Go to page 2"
                    aria-current="true"
                  />
                </li>
              </ul>
            </div>
            <div className="card card-style">
              <div className="content mt-0 mb-0">
                <div className="list-group list-custom-large">
                  <a
                    href="#"
                    data-toggle-theme
                    data-trigger-switch="toggle-dark-home"
                    className="border-0"
                  >
                    <i className="fa font-12 fa-moon rounded-s bg-highlight color-white me-3" />
                    <span className="font-600">Dark Mode</span>
                    <strong>Sticky will Remember</strong>
                    <div className="custom-control scale-switch ios-switch">
                      <input
                        data-toggle-theme
                        type="checkbox"
                        className="ios-input"
                        id="toggle-dark-home"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="toggle-dark-home"
                      />
                    </div>
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content mb-0">
                <h1 className="text-center mb-0">Get Sticky Today</h1>
                <p className="text-center color-highlight font-11 mt-n1 pb-0">
                  Tons of Awesome Features just for You.
                </p>
                <p className="boxed-text-xl mt-n3">
                  Fast, easy to use and filled with features. Get Sticky Today
                  and give your site the Mobile Feeling it deserves.
                </p>
                <a
                  href="#"
                  className="btn btn-m btn-center-l text-uppercase font-900 bg-highlight rounded-sm shadow-xl mb-4"
                >
                  Purchase Now - $25
                </a>
              </div>
            </div>
            <div className="footer card card-style">
              <a href="#" className="footer-title">
                <span className="color-highlight">StickyMobile</span>
              </a>
              <p className="footer-text">
                <span>
                  Made with
                  <i className="fa fa-heart color-highlight font-16 ps-2 pe-2" />{" "}
                  by Enabled
                </span>
                <br />
                <br />
                Powered by the best Mobile Website Developer on Envato Market.
                Elite Quality. Elite Products.
              </p>
              <div className="text-center mb-3">
                <a
                  href="#"
                  className="icon icon-xs rounded-sm shadow-l me-1 bg-facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="#"
                  className="icon icon-xs rounded-sm shadow-l me-1 bg-twitter"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="#"
                  className="icon icon-xs rounded-sm shadow-l me-1 bg-phone"
                >
                  <i className="fa fa-phone" />
                </a>
                <a
                  href="#"
                  data-menu="menu-share"
                  className="icon icon-xs rounded-sm me-1 shadow-l bg-red-dark"
                >
                  <i className="fa fa-share-alt" />
                </a>
                <a
                  href="#"
                  className="back-to-top icon icon-xs rounded-sm shadow-l bg-dark-light"
                >
                  <i className="fa fa-angle-up" />
                </a>
              </div>
              <p className="footer-copyright">
                Copyright © Enabled <span id="copyright-year">2022</span>. All
                Rights Reserved.
              </p>
              <p className="footer-links">
                <a href="#" className="color-highlight">
                  Privacy Policy
                </a>{" "}
                |
                <a href="#" className="color-highlight">
                  Terms and Conditions
                </a>{" "}
                |
                <a href="#" className="back-to-top color-highlight">
                  {" "}
                  Back to Top
                </a>
              </p>
              <div className="clear" />
            </div>
          </div>
          <div
            id="menu-settings"
            className="menu menu-box-bottom menu-box-detached"
            style={{ display: "block" }}
          >
            <div className="menu-title mt-0 pt-0">
              <h1>Settings</h1>
              <p className="color-highlight">Flexible and Easy to Use</p>
              <a href="#" className="close-menu">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="divider divider-margins mb-n2" />
            <div className="content">
              <div className="list-group list-custom-small">
                <a
                  href="#"
                  data-toggle-theme
                  data-trigger-switch="switch-dark-mode"
                  className="pb-2 ms-n1"
                >
                  <i className="fa font-12 fa-moon rounded-s bg-highlight color-white me-3" />
                  <span>Dark Mode</span>
                  <div className="custom-control scale-switch ios-switch">
                    <input
                      data-toggle-theme
                      type="checkbox"
                      className="ios-input"
                      id="switch-dark-mode"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="switch-dark-mode"
                    />
                  </div>
                  <i className="fa fa-angle-right" />
                </a>
              </div>
              <div className="list-group list-custom-large">
                <a data-menu="menu-highlights" href="#">
                  <i className="fa font-14 fa-tint bg-green-dark rounded-s" />
                  <span>Page Highlight</span>
                  <strong>16 Colors Highlights Included</strong>
                  <span className="badge bg-highlight color-white">HOT</span>
                  <i className="fa fa-angle-right" />
                </a>
                <a data-menu="menu-backgrounds" href="#" className="border-0">
                  <i className="fa font-14 fa-cog bg-blue-dark rounded-s" />
                  <span>Background Color</span>
                  <strong>10 Page Gradients Included</strong>
                  <span className="badge bg-highlight color-white">NEW</span>
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            id="menu-highlights"
            className="menu menu-box-bottom menu-box-detached"
            style={{ display: "block" }}
          >
            <div className="menu-title">
              <h1>Highlights</h1>
              <p className="color-highlight">
                Any Element can have a Highlight Color
              </p>
              <a href="#" className="close-menu">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="divider divider-margins mb-n2" />
            <div className="content">
              <div className="highlight-changer">
                <a href="#" data-change-highlight="blue">
                  <i className="fa fa-circle color-blue-dark" />
                  <span className="color-blue-light">Default</span>
                </a>
                <a href="#" data-change-highlight="red">
                  <i className="fa fa-circle color-red-dark" />
                  <span className="color-red-light">Red</span>
                </a>
                <a href="#" data-change-highlight="orange">
                  <i className="fa fa-circle color-orange-dark" />
                  <span className="color-orange-light">Orange</span>
                </a>
                <a href="#" data-change-highlight="pink2">
                  <i className="fa fa-circle color-pink2-dark" />
                  <span className="color-pink-dark">Pink</span>
                </a>
                <a href="#" data-change-highlight="magenta">
                  <i className="fa fa-circle color-magenta-dark" />
                  <span className="color-magenta-light">Purple</span>
                </a>
                <a href="#" data-change-highlight="aqua">
                  <i className="fa fa-circle color-aqua-dark" />
                  <span className="color-aqua-light">Aqua</span>
                </a>
                <a href="#" data-change-highlight="teal">
                  <i className="fa fa-circle color-teal-dark" />
                  <span className="color-teal-light">Teal</span>
                </a>
                <a href="#" data-change-highlight="mint">
                  <i className="fa fa-circle color-mint-dark" />
                  <span className="color-mint-light">Mint</span>
                </a>
                <a href="#" data-change-highlight="green">
                  <i className="fa fa-circle color-green-light" />
                  <span className="color-green-light">Green</span>
                </a>
                <a href="#" data-change-highlight="grass">
                  <i className="fa fa-circle color-green-dark" />
                  <span className="color-green-dark">Grass</span>
                </a>
                <a href="#" data-change-highlight="sunny">
                  <i className="fa fa-circle color-yellow-light" />
                  <span className="color-yellow-light">Sunny</span>
                </a>
                <a href="#" data-change-highlight="yellow">
                  <i className="fa fa-circle color-yellow-dark" />
                  <span className="color-yellow-light">Goldish</span>
                </a>
                <a href="#" data-change-highlight="brown">
                  <i className="fa fa-circle color-brown-dark" />
                  <span className="color-brown-light">Wood</span>
                </a>
                <a href="#" data-change-highlight="night">
                  <i className="fa fa-circle color-dark-dark" />
                  <span className="color-dark-light">Night</span>
                </a>
                <a href="#" data-change-highlight="dark">
                  <i className="fa fa-circle color-dark-light" />
                  <span className="color-dark-light">Dark</span>
                </a>
                <div className="clearfix" />
              </div>
              <a
                href="#"
                data-menu="menu-settings"
                className="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4"
              >
                Back to Settings
              </a>
            </div>
          </div>
          <div
            id="menu-backgrounds"
            className="menu menu-box-bottom menu-box-detached"
            style={{ display: "block" }}
          >
            <div className="menu-title">
              <h1>Backgrounds</h1>
              <p className="color-highlight">
                Change Page Color Behind Content Boxes
              </p>
              <a href="#" className="close-menu">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="divider divider-margins mb-n2" />
            <div className="content">
              <div className="background-changer">
                <a href="#" data-change-background="default">
                  <i className="bg-theme" />
                  <span className="color-dark-dark">Default</span>
                </a>
                <a href="#" data-change-background="plum">
                  <i className="body-plum" />
                  <span className="color-plum-dark">Plum</span>
                </a>
                <a href="#" data-change-background="magenta">
                  <i className="body-magenta" />
                  <span className="color-dark-dark">Magenta</span>
                </a>
                <a href="#" data-change-background="dark">
                  <i className="body-dark" />
                  <span className="color-dark-dark">Dark</span>
                </a>
                <a href="#" data-change-background="violet">
                  <i className="body-violet" />
                  <span className="color-violet-dark">Violet</span>
                </a>
                <a href="#" data-change-background="red">
                  <i className="body-red" />
                  <span className="color-red-dark">Red</span>
                </a>
                <a href="#" data-change-background="green">
                  <i className="body-green" />
                  <span className="color-green-dark">Green</span>
                </a>
                <a href="#" data-change-background="sky">
                  <i className="body-sky" />
                  <span className="color-sky-dark">Sky</span>
                </a>
                <a href="#" data-change-background="orange">
                  <i className="body-orange" />
                  <span className="color-orange-dark">Orange</span>
                </a>
                <a href="#" data-change-background="yellow">
                  <i className="body-yellow" />
                  <span className="color-yellow-dark">Yellow</span>
                </a>
                <div className="clearfix" />
              </div>
              <a
                href="#"
                data-menu="menu-settings"
                className="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4"
              >
                Back to Settings
              </a>
            </div>
          </div>
          <div
            id="menu-share"
            className="menu menu-box-bottom menu-box-detached"
            style={{ display: "block" }}
          >
            <div className="menu-title mt-n1">
              <h1>Share the Love</h1>
              <p className="color-highlight">
                Just Tap the Social Icon. We'll add the Link
              </p>
              <a href="#" className="close-menu">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="content mb-0">
              <div className="divider mb-0" />
              <div className="list-group list-custom-small list-icon-0">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.enableds.com/products/sticky/v53/index.html"
                  className="shareToFacebook external-link"
                  target="_blank"
                >
                  <i className="font-18 fab fa-facebook-square color-facebook" />
                  <span className="font-13">Facebook</span>
                  <i className="fa fa-angle-right" />
                </a>
                <a
                  href="http://twitter.com/share?text=StickyMobile BootStrap%20https://www.enableds.com/products/sticky/v53/index.html"
                  className="shareToTwitter external-link"
                  target="_blank"
                >
                  <i className="font-18 fab fa-twitter-square color-twitter" />
                  <span className="font-13">Twitter</span>
                  <i className="fa fa-angle-right" />
                </a>
                <a
                  href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.enableds.com/products/sticky/v53/index.html&title=StickyMobile BootStrap&summary=&source="
                  className="shareToLinkedIn external-link"
                  target="_blank"
                >
                  <i className="font-18 fab fa-linkedin color-linkedin" />
                  <span className="font-13">LinkedIn</span>
                  <i className="fa fa-angle-right" />
                </a>
                <a
                  href="whatsapp://send?text=https://www.enableds.com/products/sticky/v53/index.html"
                  className="shareToWhatsApp external-link"
                  target="_blank"
                >
                  <i className="font-18 fab fa-whatsapp-square color-whatsapp" />
                  <span className="font-13">WhatsApp</span>
                  <i className="fa fa-angle-right" />
                </a>
                <a
                  href="mailto:?body=https://www.enableds.com/products/sticky/v53/index.html"
                  className="shareToMail external-link border-0"
                  target="_blank"
                >
                  <i className="font-18 fa fa-envelope-square color-mail" />
                  <span className="font-13">Email</span>
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            id="menu-install-pwa-android"
            className="menu menu-box-bottom menu-box-detached rounded-l"
            style={{ display: "block" }}
          >
            <div className="boxed-text-l mt-4 pb-3">
              <img
                className="rounded-l mb-3"
                src="app/icons/icon-128x128.png"
                alt="img"
                width={90}
              />
              <h4 className="mt-3">Add Sticky on your Home Screen</h4>
              <p>
                Install Sticky on your home screen, and access it just like a
                regular app. It really is that simple!
              </p>
              <a
                href="#"
                className="pwa-install btn btn-s rounded-s shadow-l text-uppercase font-900 bg-highlight mb-2"
              >
                Add to Home Screen
              </a>
              <br />
              <a
                href="#"
                className="pwa-dismiss close-menu color-gray-dark text-uppercase font-900 opacity-60 font-10 pt-2"
              >
                Maybe later
              </a>
              <div className="clear" />
            </div>
          </div>
          <div
            id="menu-install-pwa-ios"
            className="menu menu-box-bottom menu-box-detached rounded-l"
            style={{ display: "block" }}
          >
            <div className="boxed-text-xl mt-4 pb-3">
              <img
                className="rounded-l mb-3"
                src="app/icons/icon-128x128.png"
                alt="img"
                width={90}
              />
              <h4 className="mt-3">Add Sticky on your Home Screen</h4>
              <p className="mb-0 pb-0">
                Install Sticky, and access it like a regular app. Open your
                Safari menu and tap "Add to Home Screen".
              </p>
              <div className="clearfix pt-3" />
              <a
                href="#"
                className="pwa-dismiss close-menu color-highlight text-uppercase font-700"
              >
                Maybe later
              </a>
            </div>
          </div>
        </div>
        <div className="menu-hider" />
        <p className="offline-message bg-red-dark color-white">
          No internet connection detected
        </p>
        <p className="online-message bg-green-dark color-white">
          You are back online
        </p>
      </div>
    </>
  );
};

export default Inicio;
