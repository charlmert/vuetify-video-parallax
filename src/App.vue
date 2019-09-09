<template>
  <v-app light>
   <v-toolbar color="white">
     <v-toolbar-title v-text="title"></v-toolbar-title>
   </v-toolbar>
   <v-content>
     <section>
       <v-video-parallax src="assets/ocean.mp4" img="assets/ocean.png" height="600">
         <v-layout
           column
           align-center
           justify-center
           class="white--text"
         >
           <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
           <h1 class="white--text mb-2 display-1 text-center">Parallax Template</h1>
           <div class="subheading mb-4 text-center">Powered by Vuetify</div>
           <v-btn
             class="mt-12"
             color="blue lighten-2"
             dark
             large
             href="/pre-made-themes"
           >
             Get Started
           </v-btn>
         </v-layout>
       </v-video-parallax>
     </section>

     <section>
       <v-layout
         column
         wrap
         class="my-12"
         align-center
       >
         <v-flex xs12 sm4 class="my-4">
           <div class="text-center">
             <h2 class="headline">The best way to start developing</h2>
             <span class="subheading">
               Cras facilisis mi vitae nunc
             </span>
           </div>
         </v-flex>
         <v-flex xs12>
           <v-container grid-list-xl>
             <v-layout row wrap align-center>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-center">Material Design</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline">Fast development</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-center">Completely Open Sourced</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-flex>
       </v-layout>
     </section>

     <section>
       <v-video-parallax src="assets/engine.mp4" img="assets/engine.png" height="380">
         <v-layout column align-center justify-center>
           <div class="headline white--text mb-4 text-center">Web development has never been easier</div>
           <em>Kick-start your application today</em>
           <v-btn
             class="mt-12"
             color="blue lighten-2"
             dark
             large
             href="/pre-made-themes"
           >
             Get Started
           </v-btn>
         </v-layout>
       </v-video-parallax>
     </section>

     <section>
       <v-layout
         column
         wrap
         class="my-12"
         align-center
       >
         <v-flex xs12 sm4 class="my-4">
           <div class="text-center">
             <h2 class="headline">The best way to start developing</h2>
             <span class="subheading">
               Cras facilisis mi vitae nunc
             </span>
           </div>
         </v-flex>
         <v-flex xs12>
           <v-container grid-list-xl>
             <v-layout row wrap align-center>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-center">Material Design</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline">Fast development</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 md4>
                 <v-card flat class="transparent">
                   <v-card-text class="text-center">
                     <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                   </v-card-text>
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline text-center">Completely Open Sourced</div>
                   </v-card-title>
                   <v-card-text>
                     Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                     Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                   </v-card-text>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-flex>
       </v-layout>
     </section>

     <section>
       <v-video-parallax src="assets/meeting.mp4" img="assets/meeting.png" height="380">
         <v-layout column align-center justify-center>
           <div class="headline black--text mb-4 text-center">Web development has never been easier</div>
           <em>Kick-start your application today</em>
           <v-btn
             class="mt-12"
             color="blue lighten-2"
             dark
             large
             href="/pre-made-themes"
           >
             Get Started
           </v-btn>
         </v-layout>
       </v-video-parallax>
     </section>

     <section>
       <v-container grid-list-xl>
         <v-layout row wrap justify-center class="my-12">
           <v-flex xs12 sm4>
             <v-card flat class="transparent">
               <v-card-title primary-title class="layout justify-center">
                 <div class="headline">Company info</div>
               </v-card-title>
               <v-card-text>
                 Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                 Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
               </v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs12 sm4 offset-sm1>
             <v-card flat class="transparent">
               <v-card-title primary-title class="layout justify-center">
                 <div class="headline">Contact us</div>
               </v-card-title>
               <v-card-text>
                 Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
               </v-card-text>
               <v-list class="transparent">
                 <v-list-item>
                   <v-list-item-action>
                     <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                   </v-list-item-action>
                   <v-list-item-content>
                     <v-list-item-title>777-867-5309</v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
                 <v-list-item>
                   <v-list-item-action>
                     <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                   </v-list-item-action>
                   <v-list-item-content>
                     <v-list-item-title>Chicago, US</v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
                 <v-list-item>
                   <v-list-item-action>
                     <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                   </v-list-item-action>
                   <v-list-item-content>
                     <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
               </v-list>
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>
     </section>

     <v-footer color="blue darken-2">
       <v-layout row wrap align-center>
         <v-flex xs12>
           <div class="white--text ml-4">
             Made with
             <v-icon class="red--text">mdi-heart</v-icon>
             by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
             and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
           </div>
         </v-flex>
       </v-layout>
     </v-footer>
   </v-content>
 </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  }
})

import VuetifyVideoParallax from './VuetifyVideoParallax.vue'
Vue.component('v-video-parallax', VuetifyVideoParallax)

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading);
Vue.component('loading', VueLoading)

export default {
  name: 'App',
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      title: '',
      loader: null,
    }
  },
  mounted: function() {

  },
  created: function() {
    let loader = Vue.$loading.show({
      container: this.$refs.loadingContainer,
      canCancel: true, // default false
      //onCancel: this.yourMethodName,
      color: '#ffffff',
      loader: 'spinner',
      width: 64,
      height: 64,
      backgroundColor: '#ffffff',
      opacity: 0.5,
      zIndex: 999,
    })

    let self = Object.assign(this, {})
    window.addEventListener("load", function(event) {
      console.log('document ready')
      loader.hide();
    });
  }
}
</script>
