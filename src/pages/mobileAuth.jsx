import React from "react";
import PageHeader from "./pagesHeader";

export default function MobileAuth() {
    return (
        <div className="wrapper">
            <PageHeader />
            {/* <!-- Content Wrapper. Contains page content -->
            <!-- Main content --> */}
            <section className="bg_white min_hei_500">
               <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                  <div className="mar_top_50">
                     <h1 className="text-center"><strong>Member Login</strong></h1>
                     <h3 className="text-center mar_top_30"><strong>2-Factor Authendication</strong></h3>
                     <p className="text-center"><strong>Please enter the code sent to your mobile device</strong></p>
					 <p className="form_text1 mar_top_30"><strong>Authorization Code</strong></p>
                     <input type="text" placeholder="Enter authorization code" />
                     <button type="button" className="btn btn-primary btn-block">Sign In</button>
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