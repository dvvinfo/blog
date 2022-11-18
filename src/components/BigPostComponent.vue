<template>
  <template v-for="item of items" :key="item.id">
    <div class="col-12" v-if="item.bigPost">
      <div class="featured-post-area mb-50">
        <!-- Thumbnail -->
        <div class="post-thumbnail mb-30">
          <router-link :to="`/${item.alias}`"
            ><img :src="item.img" :alt="title"
          /></router-link>
        </div>
        <!-- Featured Post Content -->
        <div class="featured-post-content">
          <p class="post-date">{{ item.date }} / {{ item.category }}</p>
          <router-link :to="`/${item.alias}`" class="post-title">
            <h2>{{ item.title }}</h2>
          </router-link>
          <p class="post-excerpt">
            {{ item.descr }}
          </p>
        </div>
        <!-- Post Meta -->
        <div
          class="post-meta d-flex align-items-center justify-content-between"
        >
          <!-- Author Comments -->
          <div class="author-comments">
            <a href="#"><span>by</span> {{ item.author }}</a>
            <a href="#">{{ item.commentNumber }} <span>Comments</span></a>
          </div>
          <!-- Social Info -->
          <div class="social-info">
            <template v-for="socialIcon in socialIcons" :key="socialIcon.title">
              <social-info-component
                v-if="socialIcon.post"
                :title="socialIcon.title"
                :url="socialIcon.url"
                :dataToggle="socialIcon.dataToggle"
                :dataPlacement="socialIcon.dataPlacement"
                :iconClass="socialIcon.iconClass"
                :ariaHidden="socialIcon.ariaHidden"
                :post="socialIcon.post"
                :subscribe="socialIcon.subscribe"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { socialIcons } from '@/_config'
import items from '@/seeders/items.js'
import SocialInfoComponent from './SocialInfoComponent.vue'
export default {
  name: 'BigPostComponent',
  components: {
    SocialInfoComponent
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      socialIcons: socialIcons
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
