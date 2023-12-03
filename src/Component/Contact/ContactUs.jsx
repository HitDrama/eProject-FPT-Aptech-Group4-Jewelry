import React from 'react'

function ContactUs() {
    const handleMapClick = () => {
        window.location.href =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817677925698!2d103.84944677436592!3d1.2832450617875781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190ec0e87f83%3A0xaaa7dbb76fe429da!2sOcean%20Financial%20Centre!5e0!3m2!1svi!2s!4v1701054411143!5m2!1svi!2s"
      };
  return (
    <div>
        <div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
        <div className="row align-items-center">
        	<div className="col-md-6">
                <div className="page-title">
            		<h1>Contact</h1>
                </div>
            </div>
            <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Contact Us</li>
                </ol>
            </div>
        </div>
    </div>
</div>

<div className="main_content">


<div className="section pb_70">
	<div className="container">
        <div className="row">
            <div className="col-xl-4 col-md-6">
            	<div className="contact_wrap contact_style3">
                    <div className="contact_icon">
                        <i className="linearicons-map2"></i>
                    </div>
                    <div className="contact_text">
                        <span>Address</span>
                        <p>10 Collyer Quay 3-4 Ocean Financial Centre Singapore 049315</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
            	<div className="contact_wrap contact_style3">
                    <div className="contact_icon">
                        <i className="linearicons-envelope-open"></i>
                    </div>
                    <div className="contact_text">
                        <span>Email Address</span>
                        <a href="mailto:info@sitename.com">shopwise@gmail.com </a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
            	<div className="contact_wrap contact_style3">
                    <div className="contact_icon">
                        <i className="linearicons-tablet2"></i>
                    </div>
                    <div className="contact_text">
                        <span>Phone</span>
                        <p>+65 6407 1734</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="section pt-0">
	<div className="container">
    	<div className="row">
        	<div className="col-lg-6">
            	<div className="heading_s1">
                	<h2>Get In touch</h2>
                </div>
                <p className="leads">Our motto is to put customer satisfaction first. Therefore, we always try to provide the best jewelry to customers </p>
                <div className="field_form">
                    <form method="post" name="enq">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <input required placeholder="Enter Name *" id="first-name" className="form-control" name="name" type="text"/>
                             </div>
                            <div className="form-group col-md-6 mb-3">
                                <input required placeholder="Enter Email *" id="email" className="form-control" name="email" type="email"/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <input required placeholder="Enter Phone No. *" id="phone" className="form-control" name="phone"/>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <input placeholder="Enter Subject" id="subject" className="form-control" name="subject"/>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <textarea required placeholder="Message *" id="description" className="form-control" name="message" rows="4"></textarea>
                            </div>
                            <div className="col-md-12 mb-3">
                                <button type="submit" title="Submit Your Message!" className="btn btn-fill-out" id="submitButton" name="submit" value="Submit">Send Message</button>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div id="alert-msg" className="alert-msg text-center"></div>
                            </div>
                        </div>
                    </form>		
                </div>
            </div>
            <div className="col-lg-6 pt-2 pt-lg-0 mt-4 mt-lg-0">
            	<div ><iframe  
            title="Google Map" 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817677925698!2d103.84944677436592!3d1.2832450617875781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190ec0e87f83%3A0xaaa7dbb76fe429da!2sOcean%20Financial%20Centre!5e0!3m2!1svi!2s!4v1701054411143!5m2!1svi!2s"
            width="600" 
            height="450" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onClick={handleMapClick} ></iframe></div>
            </div>
        </div>
    </div>
</div>

<div className="section bg_default small_pt small_pb">
	<div className="container">	
    	<div className="row align-items-center">	
            <div className="col-md-6">
                <div className="heading_s1 mb-md-0 heading_light">
                    <h3>Subscribe Our Newsletter</h3>
                </div>
            </div>
            <div classNameName="col-md-6">
                <div classNameName="newsletter_form">
                    <form>
                        <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address"/>
                        <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
    </div>
  )
}

export default ContactUs