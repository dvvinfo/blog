<template>
  <header class="header-area">
    <!-- Navbar Area -->
    <div class="nikki-main-menu">
      <div class="classy-nav-container breakpoint-off">
        <div class="container-fluid">
          <!-- Menu -->
          <nav class="classy-navbar justify-content-between" id="nikkiNav">
            <!-- Nav brand -->
            <router-link to="/" class="nav-brand"
              ><img src="../assets/img/core-img/logo.png" alt="{{title}}"
            /></router-link>

            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
              <span class="navbarToggler"
                ><span></span><span></span><span></span
              ></span>
            </div>

            <!-- Menu -->
            <div class="classy-menu">
              <!-- close btn -->
              <div class="classycloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span><span class="bottom"></span>
                </div>
              </div>

              <!-- Nav Start -->
              <div class="classynav">
                <ul>
                  <li v-for="link in links" :key="link.alias">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                  </li>
                </ul>

                <!-- Search Form -->
                <div class="search-form">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      class="form-control"
                      placeholder="Search and hit enter..."
                    />
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </div>

                <!-- Social Button -->
                <div class="top-social-info">
                  <template
                    v-for="socialIcon in socialIcons"
                    :key="socialIcon.title"
                  >
                    <social-info-component
                      v-if="socialIcon.subscribe"
                      :url="socialIcon.url"
                      :iconClass="socialIcon.iconClass"
                      :post="socialIcon.post"
                      :subscribe="socialIcon.subscribe"
                    />
                  </template>
                </div>
              </div>
              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links, socialIcons } from '@/_config'
import SocialInfoComponent from './SocialInfoComponent.vue'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: app.title,
      logoImg: app.logoImg,
      links: links,
      socialIcons: socialIcons
    }
  },
  components: {
    SocialInfoComponent
  }
}
</script>
