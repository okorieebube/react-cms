import { Link } from "react-router-dom";
const Portfolio = () => {
    return ( 
        <div>
        {/* start header */}
        {/* end header */}
        <section id="inner-headline">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="breadcrumb">
                  <li><Link to="#"><i className="fa fa-home" /></Link><i className="icon-angle-right" /></li>
                  <li className="active">Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="heading">Recent Works</h4>
                <div id="filters-container" className="cbp-l-filters-button">
                  <div data-filter="*" className="cbp-filter-item-active cbp-filter-item">All<div className="cbp-filter-counter" /></div>
                  <div data-filter=".identity" className="cbp-filter-item">Identity<div className="cbp-filter-counter" /></div>
                  <div data-filter=".web-design" className="cbp-filter-item">Web Design<div className="cbp-filter-counter" /></div>
                  <div data-filter=".graphic" className="cbp-filter-item">Graphic<div className="cbp-filter-counter" /></div>
                  <div data-filter=".logo" className="cbp-filter-item">Logo<div className="cbp-filter-counter" /></div>
                </div>
                <div id="grid-container" className="cbp-l-grid-projects">
                  <ul>
                    <li className="cbp-item graphic">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/1.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/1big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Dashboard<br>by Paul Flavius Nechita">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">Dashboard</div>
                      <div className="cbp-l-grid-projects-desc">Web Design / Graphic</div>
                    </li>
                    <li className="cbp-item web-design logo">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/2.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/2big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="World Clock Widget<br>by Paul Flavius Nechita">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">World Clock Widget</div>
                      <div className="cbp-l-grid-projects-desc">Logo / Web Design</div>
                    </li>
                    <li className="cbp-item graphic logo">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/3.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="http://vimeo.com/14912890" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="To-Do Dashboard<br>by Tiberiu Neamu">view video</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">To-Do Dashboard</div>
                      <div className="cbp-l-grid-projects-desc">Graphic / Logo</div>
                    </li>
                    <li className="cbp-item web-design graphic">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/4.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/4big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Events and  More<br>by Tiberiu Neamu">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">Events and More</div>
                      <div className="cbp-l-grid-projects-desc">Web Design / Graphic</div>
                    </li>
                    <li className="cbp-item identity web-design">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/5.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/5big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="WhereTO App<br>by Tiberiu Neamu">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">WhereTO App</div>
                      <div className="cbp-l-grid-projects-desc">Web Design / Identity</div>
                    </li>
                    <li className="cbp-item identity web-design">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/6.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/6big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Ski * Buddy<br>by Tiberiu Neamu">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">Ski * Buddy</div>
                      <div className="cbp-l-grid-projects-desc">Identity / Web Design</div>
                    </li>
                    <li className="cbp-item graphic logo">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/7.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/7big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Seemple* Music for iPad<br>by Tiberiu Neamu">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">Seemple* Music for iPad</div>
                      <div className="cbp-l-grid-projects-desc">Graphic / Logo</div>
                    </li>
                    <li className="cbp-item graphic logo">
                      <div className="cbp-caption">
                        <div className="cbp-caption-defaultWrap">
                          <img src="/img/works/8.jpg" alt="" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                          <div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body">
                              <Link to="/img/works/8big.jpg" className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Seemple* Music for iPad<br>by Tiberiu Neamu">view larger</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cbp-l-grid-projects-title">Seemple* Music for iPad</div>
                      <div className="cbp-l-grid-projects-desc">Graphic / Logo</div>
                    </li>
                  </ul>
                </div>
                <div className="cbp-l-loadMore-button">
                  <Link to="/ajax/loadMore.html" className="cbp-l-loadMore-button-link">LOAD MORE</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     );
}
 
export default Portfolio;