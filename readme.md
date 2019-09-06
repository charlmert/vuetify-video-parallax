# Vuetify Video Parallax

This vue component is based on https://vuetifyjs.com/ v-parallax component with
support for displaying looped stock videos in the background.

While the stock video is loading an alternate image can be specified that will
behave like the vuetify image parallax does until the video has been downloaded.

It does not need vuetify to run so it will work in your non vuetify environment.

## Howto Install

```bash
npm install vuetify-video-parallax --save
```

## First get some videos

Grab some videos for free from:
- https://pixabay.com/videos/search/
- https://www.videvo.net/free-stock-footage/
- https://www.pexels.com/videos/

Copy the video to your assets folder

## Howto use (vue plain html)

The videos should be accessible if you create a public/assets folder in your
project root (Vue will serve assets if you put them in a public/ folder).

Add the cdn script import
```html
<script src="https://unpkg.com/vuetify-video-parallax"></script>
```

Use in the template section of your app as follows

```html
<v-video-parallax src="assets/city.mp4" img="assets/city.png" height="600">
  Some Html Here
</v-video-parallax>
```

## Howto use (vue development env)
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

Create a video parallax tag in your <template></template>

```html
<VideoParallax height="600" img="assets/city.png" src="/assets/thunda.mp4">
  Some Html Here
</VideoParallax>
```
