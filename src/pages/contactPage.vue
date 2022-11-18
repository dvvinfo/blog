<template>
  <section class="contact-area section-padding-100-0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="contact-content mb-100">
            <h4>Get In Touch</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia dese mollit anim id est laborum, consectetur adipisicing
              elit.
            </p>
            <!-- Single Contact Info -->
            <div class="single-contact-info">
              <h6>Location:</h6>
              <h4>40 Baria Sreet 133/2 NewYork, US</h4>
            </div>

            <!-- Single Contact Info -->
            <div class="single-contact-info">
              <h6>Email:</h6>
              <h4>info.deercreative@gmail.com</h4>
            </div>

            <!-- Single Contact Info -->
            <div class="single-contact-info">
              <h6>Phone:</h6>
              <h4>(+123) 456-789-1120</h4>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="contact-content mb-100">
            <h4>Contact Form</h4>

            <!-- Contact Form Area -->
            <div class="contact-form-area">
              <form action="#" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="contact-name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="contact-email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="contact-phone"
                    placeholder="Phone"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" class="btn nikki-btn mt-15">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <follow-us-instagram-component/>
</template>

<script>
import FollowUsInstagramComponent from '@/components/FollowUsInstagramComponent.vue'
export default {
  name: 'contactPage',
  components: {
    FollowUsInstagramComponent
    
  }
}
</script>

<style></style>
