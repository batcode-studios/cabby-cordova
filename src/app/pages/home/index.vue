<template lang="html">
  <div>
    <v-toolbar dense flat color="primary" class="pl-2 pr-2">
      <v-select
        label="Pickup Address"
        autocomplete
        single-line
        hide-details
        :async-loading="loading"
        cache-items
        :items="fromAddresses"
        :search-input.sync="fromSearch"
        v-model="fromAddressInput"
      />
      <v-btn
        flat
        icon
        small
        v-if="isGeolocation"
        @click="getCurrentLocation"
      >
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar dense flat color="primary" class="pl-2 pr-2">
      <v-select
        label="Dropoff Address"
        autocomplete
        single-line
        hide-details
        :async-loading="loading"
        cache-items
        :items="toAddresses"
        :search-input.sync="toSearch"
        v-model="toAddressInput"
      />
      <v-btn
        flat
        icon
        small
        v-if="isGeolocation"
      >
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-toolbar>

    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../../../static/img/v.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'

import { places, geocode, reverseGeocode } from '@/app/pages/home/service'

export default {
  name: 'home-page',
  computed: {
    ...mapGetters({
      isGeolocation: 'isGeolocation'
    })
  },
  data: () => ({
    loading: false,
    fromAddressInput: null,
    fromAddresses: [],
    fromSearch: null,
    toAddressInput: null,
    toAddresses: [],
    toSearch: null
  }),
  methods: {
    fromAddressSearch (v) {
      this.loading = true
      this.fromAddresses = this.placesSearch(v)
    },
    toAddressSearch (v) {
      this.loading = true
      this.toAddresses = this.placesSearch(v)
    },
    placesSearch (searchTerm) {
      let newArr = []
      places(searchTerm)
        .asPromise()
        .then((res) => {
          let resArr = res.json.predictions
          resArr.forEach((v) => {
            let resObj = {
              text: v.description,
              value: v.place_id
            }
            newArr.push(resObj)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      return newArr
    },
    geocodeSearch (placeID) {
      geocode(placeID)
        .asPromise()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    reverseGeocodeSearch (value) {
      reverseGeocode(value)
        .asPromise()
        .then((res) => {
          console.log(res)
          const result = res.json.results[0]
          console.log(result)
          console.log(typeof result.place_id)
          this.fromAddressInput = {
            text: result.formatted_address,
            value: result.place_id
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCurrentLocation () {
      navigator.geolocation.getCurrentPosition((result) => {
        this.reverseGeocodeSearch([result.coords.latitude, result.coords.longitude])
      }, (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.$store.dispatch('triggerGlobalAlert', { condition: true, color: 'error', message: 'User denied the request for Geolocation.' })
            break
          case error.POSITION_UNAVAILABLE:
            this.$store.dispatch('triggerGlobalAlert', { condition: true, color: 'error', message: 'Location information is unavailable.' })
            break
          case error.TIMEOUT:
            this.$store.dispatch('triggerGlobalAlert', { condition: true, color: 'error', message: 'The request to get user location timed out.' })
            break
          case error.UNKNOWN_ERROR:
            this.$store.dispatch('triggerGlobalAlert', { condition: true, color: 'error', message: 'An unknown error occurred.' })
            break
        }
      })
    }
  },
  watch: {
    fromSearch (val) {
      val && this.fromAddressSearch(val)
    },
    fromAddressInput (v) {
      this.geocodeSearch(v)
    },
    toSearch (val) {
      val && this.toAddressSearch(val)
    },
    toAddressInput (v) {
      this.geocodeSearch(v)
    }
  }
}
</script>
