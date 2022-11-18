<template>
  <section class="blog-content-area section-padding-100">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Blog Posts Area -->
        <div class="col-12 col-lg-8">
          <div class="blog-posts-area">
            <div class="row">
              <!-- Featured Post Area -->
                <big-post-component
                  :items="items"
                />

              <!-- Single Blog Post -->
            
                <post-component
                  :items="items"
                />
              
            </div>
          </div>

          <!-- Pager -->
          <ol class="nikki-pager">
            <li>
              <a href="#"
                ><i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                Newer</a
              >
            </li>
            <li>
              <a href="#"
                >Older <i class="fa fa-long-arrow-right" aria-hidden="true"></i
              ></a>
            </li>
          </ol>
        </div>

        <!-- Blog Sidebar Area -->
        <div class="col-12 col-sm-9 col-md-6 col-lg-4">
          <div class="post-sidebar-area">
            <!-- ##### Single Widget Area ##### -->
            <div class="single-widget-area mb-30">
              <!-- Title -->
              <div class="widget-title">
                <h6>About Me</h6>
              </div>
              <!-- Thumbnail -->
              <div class="about-thumbnail">
                <img src="../assets/img/blog-img/about-me.jpg" alt="" />
              </div>
              <!-- Content -->
              <div class="widget-content text-center">
                <img src="../assets/img/core-img/signature.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ipsum adipisicing
                </p>
              </div>
            </div>

            <!-- ##### Single Widget Area ##### -->
            <div class="single-widget-area mb-30">
              <!-- Title -->
              <div class="widget-title">
                <h6>Subscribe &amp; Follow</h6>
              </div>
              <!-- Widget Social Info -->
              <div class="widget-social-info text-center">
                <template
                    v-for="socialIcon in socialIcons"
                    :key="socialIcon.title"
                  >
                    <social-info-component
                      :url="socialIcon.url"
                      :iconClass="socialIcon.iconClass"
                      :post="socialIcon.post"
                      :subscribe="socialIcon.subscribe"
                    />
                  </template>
              </div>
            </div>

            <!-- ##### Single Widget Area ##### -->
            <latest-posts-list-component :items="items"/>

            <!-- ##### Single Widget Area ##### -->
            <div class="single-widget-area mb-30">
              <!-- Adds -->
              <a href="#"
                ><img src="../assets/img/blog-img/add.png" alt=""
              /></a>
            </div>

            <!-- ##### Single Widget Area ##### -->
            <div class="single-widget-area mb-30">
              <!-- Title -->
              <div class="widget-title">
                <h6>Newsletter</h6>
              </div>
              <!-- Content -->
              <div class="newsletter-content">
                <p>
                  Subscribe our newsletter for get notification about new
                  updates, information discount, etc.
                </p>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Your email"
                  />
                  <button><i class="fa fa-send"></i></button>
                </form>
              </div>
            </div>

            <!-- ##### Single Widget Area ##### -->
            <div class="single-widget-area mb-30">
              <!-- Title -->
              <div class="widget-title">
                <h6>popular tags</h6>
              </div>
              <!-- Tags -->
              <ol class="popular-tags d-flex flex-wrap">
                <li><a href="#">LifeStyle</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Photography</a></li>
                <li><a href="#">Yoga</a></li>
                <li><a href="#">Health Food</a></li>
                <li><a href="#">Summer Holiday</a></li>
                <li><a href="#">Supper Food</a></li>
                <li><a href="#">Life</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <follow-us-instagram-component />
</template>
<script>
import items from '@/seeders/items.js'
import {  socialIcons } from '@/_config'
import FollowUsInstagramComponent from '@/components/FollowUsInstagramComponent.vue'
import BigPostComponent from '@/components/BigPostComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import LatestPostsListComponent from '@/components/LatestPostsListComponent.vue'
import SocialInfoComponent from '@/components/SocialInfoComponent.vue'
export default {
  name: 'HomePage',
  components: {
    FollowUsInstagramComponent,
    PostComponent,
    BigPostComponent,
    LatestPostsListComponent,
    SocialInfoComponent
  },
  data() {
    return {
      items: items,
      socialIcons:socialIcons
    }
  },
  
}
</script>
