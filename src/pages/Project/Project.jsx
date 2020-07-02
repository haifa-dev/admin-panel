import React from "react";

const Project = () => {
    return (
        <main>
            <aside className="aside flex-column py-5">
                <h5>Projects</h5>
                <a href="/#">1 Project
                <span className="float-right"><i className="fa fa-circle" aria-hidden="true"></i> online</span></a>
                <a href="/#">2 Project
                <span className="float-right online"><i className="fa fa-circle" aria-hidden="true"></i> online</span></a>
            </aside>

            <section className="m-4">
                <form>
                    <div className="card shadow mb-3">
                        <div className="card-header bg-transparent ">Edit User</div>
                        <div className="card-body">
                            <div className="card-body">
                                <h1>Project</h1>
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

export default Project;
