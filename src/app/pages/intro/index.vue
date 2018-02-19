<template lang="html">
  <section
    class="full-page"
  >
    <div>
      <swiper
        :options="swiperOption"
        class="hero-container"
        @slideChange="slideChanged"
        ref="mySwiper"
      >
        <swiper-slide
          class="slide-content slide-one"
          data-swiper-parallax="-23%"
        >
          <p
            class="slide-title"
            data-swiper-parallax="-200"
            data-swiper-parallax-duration="900"
            data-swiper-parallax-opacity="0.5"
          >
            <v-icon
              class="slide-icon"
            >
              edit_location
            </v-icon>
          </p>
          <p
            class="slide-subtitle"
            data-swiper-parallax="-300"
            data-swiper-parallax-duration="900"
            data-swiper-parallax-opacity="0.5"
          >
            24x7 Service
          </p>
        </swiper-slide>
        <swiper-slide
          class="slide-content slide-two"
          data-swiper-parallax="-23%"
        >
        <p
          class="slide-title"
          data-swiper-parallax="-200"
          data-swiper-parallax-duration="900"
          data-swiper-parallax-opacity="0.5"
        >
          <v-icon
            class="slide-icon"
          >
            extension
          </v-icon>
        </p>
        <p
          class="slide-subtitle"
          data-swiper-parallax="-300"
          data-swiper-parallax-duration="900"
          data-swiper-parallax-opacity="0.5"
        >
          Reliable
        </p>
        </swiper-slide>
        <swiper-slide
          class="slide-content slide-three"
          data-swiper-parallax="-23%"
        >
          <p
            class="slide-title"
            data-swiper-parallax="-200"
            data-swiper-parallax-duration="900"
            data-swiper-parallax-opacity="0.5"
          >
            <v-icon
              class="slide-icon"
            >
              free_breakfast
            </v-icon>
          </p>
          <p
            class="slide-subtitle"
            data-swiper-parallax="-300"
            data-swiper-parallax-duration="900"
            data-swiper-parallax-opacity="0.5"
          >
            Safe
          </p>
        </swiper-slide>

        <div
          class="swiper-pagination"
          slot="pagination" />
        <div
          class="swiper-button-prev"
          slot="button-prev" />
        <div
          class="swiper-button-next"
          slot="button-next" />
      </swiper>
    </div>

    <div class="controls">
      <v-toolbar
        :color="currentColor"
      >
        <v-btn
          small
          flat
          :to="{ name: 'home' }"
        >
          Login
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          small
          flat
        >
          Register
        </v-btn>
      </v-toolbar>
    </div>
  </section>
</template>

<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'intro',
  components: {
    swiper,
    'swiper-slide': swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data: () => ({
    swiperOption: {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      parallax: true,
      effect: 'coverflow'
    },
    currentColor: 'green'
  }),
  methods: {
    slideChanged () {
      this.colorChange(this.swiper.realIndex)
    },
    colorChange (index) {
      if (index === 0) {
        this.currentColor = 'green'
      } else if (index === 1) {
        this.currentColor = 'blue'
      } else if (index === 2) {
        this.currentColor = 'pink'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.full-page {
  width: 100%;
  height: 100vh;
  position: fixed;
}

.hero-container {
  color: #fff;
  height: calc(100vh - 60px);
  .slide-content {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    .slide-title {
      top: 40%;
      position: relative;
      .slide-icon {
        font-size: 3.5em;
      }
    }
    .slide-subtitle {
      font-size: 2em;
      top: 40%;
      position: relative;
    }
    .slide-image {
      position: relative;
      width: 30%;
      height: auto;
      top: 40%;
      left: 60%;
    }
  }
  .slide-one {
    background: #4caf50;
  }
  .slide-two {
    background: #2196f3;
  }
  .slide-three {
    background: #e91e63;
  }
}

@keyframes content {
  0% {
    left: 8%;
    opacity: 0;
  }
  100% {
    left: 10%;
    opacity: 1;
  }
}
</style>
