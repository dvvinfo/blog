<template>
  <section class="blog-content-area section-padding-0-100">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Blog Posts Area -->
        <div class="col-12">
          <!-- Post Details Area -->
          <div class="single-post-details-area">
            <div class="post-content">
              <div class="text-center mb-50">
                <p class="post-date">{{item.date}} / {{item.category}}</p>
                <h2 class="post-title">
                  {{item.title}}
                </h2>
                <!-- Post Meta -->
                <div class="post-meta">
                  <a href="#"><span>by</span> {{item.author}}</a>
                  <a href="#">{{item.commentNumber}} <span>Comments</span></a>
                </div>
              </div>

              <!-- Post Thumbnail -->
              <div class="post-thumbnail mb-50">
                <img :src="item.img" :alt="item.title" />
              </div>

              <!-- Post Text -->
              <div class="post-text">
                <!-- Share -->
                <div class="post-share">
                  <span>Share</span>
                  <a href="#" class="facebook"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                  <a href="#" class="twitter"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                  <a href="#" class="google-plus"
                    ><i class="fa fa-google-plus" aria-hidden="true"></i
                  ></a>
                  <a href="#" class="instagram"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                  <a href="#" class="pin"
                    ><i class="fa fa-thumb-tack" aria-hidden="true"></i
                  ></a>
                </div>

                <p>
                {{item.text1}}
                </p>

                <p>
                  {{item.text2}}
                </p>

                <blockquote class="shortcodes">
                  <div class="blockquote-icon">
                    <img src="../assets/img/core-img/quote.png" alt="" />
                  </div>
                  <div class="blockquote-text">
                    <h5>
                     {{item.quote}}
                    </h5>
                    <h6>{{item.name }}- <span>{{item.position}} {{item.author}}</span></h6>
                  </div>
                </blockquote>

                <p>
                  {{item.text3}}
                </p>

                <div class="row">
                  <div class="col-12 col-md-6">
                    <img
                      class="mb-30"
                      :src="item.imgSinglePost1"
                      :alt="item.title"
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <img
                      class="mb-30"
                      :src="item.imgSinglePost2"
                      :alt="item.title"
                    />
                  </div>
                </div>

                <!-- List -->
                <div class="nikki-list-area mb-50">
                  <h4 class="mb-15">{{item.info}}</h4>
                  <ul class="nikki-list">
                    <li v-for="(info, index) in item.infoDetails"
                :key="index">
                      {{info.text}}
                    </li>
                  </ul>
                </div>

                <!-- Post Tags & Share -->
                <div class="post-tags-share">
                  <!-- Tags -->
                  <ol class="popular-tags d-flex flex-wrap">
                    <li v-for="(info, index) in item.tags"
                :key="index" ><a href="#">{{info}}</a></li>
                    
                  </ol>
                </div>

                <!-- Related Post Area -->
                <div class="related-posts clearfix">
                  <!-- Headline -->
                  <h4 class="headline">related posts</h4>

                  <div class="row">
                    <!-- Single Blog Post -->
                    <div class="col-12 col-lg-6">
                      <div class="single-blog-post mb-50">
                        <!-- Thumbnail -->
                        <div class="post-thumbnail">
                          <a href="#"
                            ><img src="../assets/img/blog-img/1.jpg" alt=""
                          /></a>
                        </div>
                        <!-- Content -->
                        <div class="post-content">
                          <p class="post-date">MAY 17, 2018 / lifestyle</p>
                          <a href="#" class="post-title">
                            <h4>
                              A Closer Look At Our Front Porch Items From Lowe???s
                            </h4>
                          </a>
                          <p class="post-excerpt">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit.
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Single Blog Post -->
                    <div class="col-12 col-lg-6">
                      <div class="single-blog-post mb-50">
                        <!-- Thumbnail -->
                        <div class="post-thumbnail">
                          <a href="#"
                            ><img src="../assets/img/blog-img/4.jpg" alt=""
                          /></a>
                        </div>
                        <!-- Content -->
                        <div class="post-content">
                          <p class="post-date">MAY 25, 2018 / Fashion</p>
                          <a href="#" class="post-title">
                            <h4>5 Things to Know About Dating a Bisexual</h4>
                          </a>
                          <p class="post-excerpt">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Comment Area Start -->
                <div class="comment_area clearfix">
                  <h4 class="headline">12 Comments</h4>
                  <ol>
                    <!-- Single Comment Area -->
                    <li class="single_comment_area">
                      <div class="comment-wrapper d-flex">
                        <!-- Comment Meta -->
                        <div class="comment-author">
                          <img src="../assets/img/blog-img/9.jpg" alt="" />
                        </div>
                        <!-- Comment Content -->
                        <div class="comment-content">
                          <span class="comment-date">MAY 10, 2018</span>
                          <h5>Calantha Flower</h5>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi
                          </p>
                          <a href="#">Like</a>
                          <a class="active" href="#">Reply</a>
                        </div>
                      </div>
                      <ol class="children">
                        <li class="single_comment_area">
                          <div class="comment-wrapper d-flex">
                            <!-- Comment Meta -->
                            <div class="comment-author">
                              <img src="../assets/img/blog-img/10.jpg" alt="" />
                            </div>
                            <!-- Comment Content -->
                            <div class="comment-content">
                              <span class="comment-date">MAY 18, 2018</span>
                              <h5>Dianna Agron</h5>
                              <p>
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi
                              </p>
                              <a href="#">Like</a>
                              <a class="active" href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li class="single_comment_area">
                      <div class="comment-wrapper d-flex">
                        <!-- Comment Meta -->
                        <div class="comment-author">
                          <img src="../assets/img/blog-img/11.jpg" alt="" />
                        </div>
                        <!-- Comment Content -->
                        <div class="comment-content">
                          <span class="comment-date">MAY 24, 2018</span>
                          <h5>Chris Hemsworth</h5>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi
                          </p>
                          <a href="#">Like</a>
                          <a class="active" href="#">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                <!-- Leave A Comment -->
                <div class="leave-comment-area clearfix">
                  <div class="comment-form">
                    <h4 class="headline">Leave A Comment</h4>

                    <!-- Comment Form -->
                    <form action="#" method="post">
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="contact-name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              id="contact-email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              name="message"
                              id="message"
                              cols="30"
                              rows="10"
                              placeholder="Comment"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn nikki-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <follow-us-instagram-component />
</template>

<script>
import items from '@/seeders/items'
import FollowUsInstagramComponent from '@/components/FollowUsInstagramComponent.vue'
export default {
  name: 'SinglePostPage',
  components: {
    FollowUsInstagramComponent
  },
  props: {
    imgUrl: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    
    title: {
      type: String,
      required: false
    },
    descr: {
      type: String,
      required: false
    },
    smallPost: {
      type: Boolean,
      required: false
    },
    link: {
      type: String,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)

    this.item = item
    console.log(item)
  }
  
}

</script>

<style></style>
