import React from 'react';

const News = () => {
    return (
        <div class="news_section layout_padding">
      <div class="container">
         <h1 class="health_taital">Why choose 24hr home care</h1>
         <p class="health_text">labore et dolore magna aliqua. Ut enim ad minim veniam</p>
         <div class="news_section_2 layout_padding">
            <div class="row">
               <div class="col-lg-4 col-sm-6">
                  <div class="box_main">
                     <div class="icon_1"><img src="images/icon-2.png"/></div>
                     <h4 class="daily_text">Daily care experts</h4>
                  </div>
               </div>
               <div class="col-lg-4 col-sm-6">
                  <div class="box_main active">
                     <div class="icon_1"><img src="images/icon-3.png"/></div>
                     <h4 class="daily_text_1">Available 24/7</h4>
                  </div>
               </div>
               <div class="col-lg-4 col-sm-6">
                  <div class="box_main">
                     <div class="icon_1"><img src="images/icon-4.png"/></div>
                     <h4 class="daily_text_1">Balanced care</h4>
                  </div>
               </div>
            </div>
         </div>
         <div class="getquote_bt"><a href="#">Get A Quote <span><img src="images/right-arrow.png"/></span></a></div>
      </div>
   </div>
    );
};

export default News;