import React from "react";
import PageHeader from "./pagesHeader";

export default function ForgotPassword() {
    return (
        <div className="wrapper">
            <PageHeader />
            {/* <!-- Content Wrapper. Contains page content --> */}
            {/* <!-- Main content --> */}
            <section className="bg_white min_hei_500">
                <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                        <div className="mar_top_50">
                            <h1 className="text-center"><strong>Choose a Password</strong></h1>
                            <p className="form_text1  text-center">Password must be at 8 characters long and contain at least one letter and one number. Password are case sensitive.</p>
                            <p className="form_text1 mar_top_30">Password</p>
                            <input type="text" placeholder="Password" />
                            <p className="form_text1">Confirm Password</p>
                            <input type="text" placeholder="Confirm password" />
                            <button type="button" className="btn btn-primary btn-block mar_top_10">Update</button>
                            <div className="clearfix"></div>
                        </div>
                    <div className="clearfix"></div>
                </div>
               {/* <!-- /.content --> */}
               <div className="clearfix"></div>
            {/* <!-- /.content-wrapper --> */}
            <div className="clearfix"></div>
            </section>        
        </div>
    );
}