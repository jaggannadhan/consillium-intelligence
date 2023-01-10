import React from "react";
import PageHeader from "./pagesHeader";

function emailAuth(){
    window.location.href = "/email_auth";
}

function mobileAuth(){
    window.location.href = "/mobile_auth";
}
export default function AuthMethods() {
    return (
        <div className="wrapper">
            <PageHeader />
            {/* <!-- Content Wrapper. Contains page content -->
            <!-- Main content --> */}
            <section className="bg_white min_hei_500">
               <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                  <div className="text-center mar_top_50">
                     <h1 className="text-center"><strong>Member Login</strong></h1>
                     <h3 className="text-center mar_top_30"><strong>Authentication</strong></h3>
                     <p className="text-center mar_top_20"><strong>Please select your method of authenticating</strong></p>
                     <button type="button" className="btn btn-primary btn-block mar_top_20" onClick={() => emailAuth()}>Email Authentication</button><br/>
                     <button type="button" className="btn btn-success btn-block" onClick={() => mobileAuth()}>Mobile Authentication</button>
                     <h4 className="text-center mar_top_20 pad_bot_30"><strong><a href="#">Back</a></strong></h4>
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