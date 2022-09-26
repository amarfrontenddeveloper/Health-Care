import React from 'react';

const Contact = () => {
    return (
        <div class="contact_section layout_padding">
      <div class="container">
         <h1 class="contact_taital">What we do</h1>
         <div class="news_section_2">
            <div class="row">
               <div class="col-md-6">
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-7.png"/></div>
                     <h4 class="diabetes_text">Diabetes and obesity Counselling </h4>
                  </div>
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-5.png"/></div>
                     <h4 class="diabetes_text">Obstetrics and Gynsecology</h4>
                  </div>
                  <div class="icon_main">
                     <div class="icon_7"><img src="images/icon-6.png"/></div>
                     <h4 class="diabetes_text">Surgical and medical Oncology</h4>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="contact_box">
                     <h1 class="book_text">Book Appoinment</h1>
                     <input type="text" class="Email_text" placeholder="Name" name="Name"/>
                     <input type="text" class="Email_text" placeholder="Name" name="Name"/>
                     <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                     <div class="send_bt"><a href="#">SEND</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
};

export default Contact;