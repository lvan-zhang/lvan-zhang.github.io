---
home: true
bgImage: '/assets/about-bg.jpg'
bgImageStyle: {
  height: '350px'
}
faceImage: '/assets/avatar.jpg'
isShowTitleInHome: true
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 努力
- title: Today
  details: 努力
- title: Tomorrow
  details: 继续努力
---

<script>
export default ({
  methods: {
    loop () {
      setTimeout(() => {
        let node = document.getElementsByClassName('footer')[0]
        if (!node) {
          this.loop()
          return false
        }
        document.getElementsByClassName('footer')[0].firstElementChild.style.display = 'none'
      }, 200)
    }
  },
  created () {
    this.loop()
  }
})
</script>

<style>
/* 首页图片样式 */
.personal-img {
  height: 12rem !important;
}
</style>