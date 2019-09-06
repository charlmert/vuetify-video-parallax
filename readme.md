# Vuetify Video Parallax

## Howto Install

```bash
npm install vuetify-video-parallax --save
```

## Howto use

Grab some videos for free from:
- https://pixabay.com/videos/search/
- https://www.videvo.net/free-stock-footage/
- https://www.pexels.com/videos/

Use in your main App.vue component like so:

Import the component

```javascript
import VideoParallax from 'vuetify-video-parallax';

export default {
  components: {
    VideoParallax,
  },
  // rest of the component
}
```

Copy the video to your assets folder

Create a video parallax tag in your <template></template>

```html
<VideoParallax height="600" src="/assets/thunda.mp4">
          <img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="Vuetify" height="38">
          <h1>Vuetify Video Parallax</h1>
          <div class="subheading mb-4 text-center">Powered by Vuetify</div>
          <v-btn
            class="mt-12"
            color="blue lighten-2"
            dark
            large
            href="https://github.com/charlmert/vuetify-video-parallax"
            style="margin-top: 30px"
          >
            Get Started
          </v-btn>
</VideoParallax>
```
