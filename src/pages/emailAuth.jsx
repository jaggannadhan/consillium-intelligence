import React from "react";
import PageHeader from "./pagesHeader";

export default function EmailAuth() {
    return (
        <div className="wrapper">
            <PageHeader />
            {/* <!-- Content Wrapper. Contains page content -->
            <!-- Main content --> */}
            <section className="bg_white min_hei_500">
                <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                    <div className="text-center mar_top_50">
                        <h1 className="text-center"><strong>Member Login</strong></h1>
                        <h3 className="text-center mar_top_30"><strong>Authendication</strong></h3>
                        <p className="text-center pad_bot_30"><strong>An authendication link has been sent to the email account email. please verify this device.</strong></p>
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