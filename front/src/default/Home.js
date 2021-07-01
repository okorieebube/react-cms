import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div>
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="fa fa-home" /></Link></li>
                                <li className="active">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className="left-sidebar">
                                <div className="widget">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="s" placeholder="Search.." />
                                        </div>
                                    </form>
                                </div>
                                <div className="widget">
                                    <h5 className="widgetheading">Categories</h5>
                                    <ul className="cat">
                                        {'{'}{'{'}#each cats{'}'}{'}'}
                                        <li><i className="fa fa-angle-right" /><Link to="#">{'{'}{'{'}title{'}'}{'}'}</Link><span> &gt;</span></li>
                                        {'{'}{'{'}/each{'}'}{'}'}
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h5 className="widgetheading">Latest posts</h5>
                                    <ul className="recent">
                                        <li>
                                            <img src="img/dummies/blog/65x65/thumb1.jpg" className="pull-left" alt="" />
                                            <h6><Link to="#">Lorem ipsum dolor sit</Link></h6>
                                            <p>
                                                Mazim alienum appellantur eu cu ullum officiis pro pri
                                            </p>
                                        </li>
                                        <li>
                                            <Link to="#"><img src="img/dummies/blog/65x65/thumb2.jpg" className="pull-left" alt="" /></Link>
                                            <h6><Link to="#">Maiorum ponderum eum</Link></h6>
                                            <p>
                                                Mazim alienum appellantur eu cu ullum officiis pro pri
                                            </p>
                                        </li>
                                        <li>
                                            <Link to="#"><img src="img/dummies/blog/65x65/thumb3.jpg" className="pull-left" alt="" /></Link>
                                            <h6><Link to="#">Et mei iusto dolorum</Link></h6>
                                            <p>
                                                Mazim alienum appellantur eu cu ullum officiis pro pri
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h5 className="widgetheading">Popular tags</h5>
                                    <ul className="tags">
                                        <li><Link to="#">Web design</Link></li>
                                        <li><Link to="#">Trends</Link></li>
                                        <li><Link to="#">Technology</Link></li>
                                        <li><Link to="#">Internet</Link></li>
                                        <li><Link to="#">Tutorial</Link></li>
                                        <li><Link to="#">Development</Link></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-8">
                            {'{'}{'{'}#each posts{'}'}{'}'}
                            <article>
                                <div className="post-image">
                                    <div className="post-heading">
                                        <h3><Link to="#">{/* {'{'}{'{'}title{'}'}{'}'} */}</Link></h3>
                                    </div>{/* {'{'}{'{'}!-- img/dummies/blog/img1.jpg --{'}'}{'}'} */}
                                    <img src="/public/uploads/{{file}}" alt="" className="img-responsive" />
                                </div>
                                <p>
                                    {/* {'{'}{'{'}description{'}'}{'}'} */}
                                </p>
                                <div className="bottom-article">
                                    <ul className="meta-post">
                                        <li><i className="fa fa-calendar" /><Link to="#">{'{'}{'{'}dateCreated{'}'}{'}'}</Link></li>
                                        <li><i className="fa fa-user" /><Link to="#"> Admin</Link></li>
                                        <li><i className="fa fa-folder-open" /><Link to="#"> Blog</Link></li>
                                        <li><i className="fa fa-comments" /><Link to="#">4 Comments</Link></li>
                                    </ul>
                                    <Link to="#" className="readmore pull-right">Continue reading <i className="fa fa-angle-right" /></Link>
                                </div>
                            </article>
                            {/* {'{'}{'{'}/each{'}'}{'}'} */}
                            <div id="pagination">
                                <span className="all">Page 1 of 3</span>
                                <span className="current">1</span>
                                <Link to="#" className="inactive">2</Link>
                                <Link to="#" className="inactive">3</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;