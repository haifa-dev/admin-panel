import React from "react";

const Request = () => {
    return (
        <main>
            <aside className="aside flex-column py-5">
                <h5>Requests</h5>
                <a href="/#">1 Israeli Israeli
                <span className="float-right"><i className="fa fa-circle" aria-hidden="true"></i> online</span></a>
                <a href="/#">2 Israeli Israeli
                <span className="float-right online"><i className="fa fa-circle" aria-hidden="true"></i> online</span></a>
            </aside>

            <section className="m-4">
                <form>
                    <div className="card shadow mb-3">
                        <div className="card-header bg-transparent ">Edit Request</div>
                        <div className="card-body">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="first-name">First Name:</label>
                                    <input type="text" className="form-control" id="first-name" placeholder="Israeli" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last-name">Last Name:</label>
                                    <input type="text" className="form-control" id="last-name" placeholder="Israeli" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address:</label>
                                    <input type="email" className="form-control" placeholder="Enter email: Israeli@co.il" id="email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="comment">Comment:</label>
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Enter comment..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent ">
                            <button type="submit" className="btn btn-success float-right">Save</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Request;
