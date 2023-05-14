import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  let blogpreviewsnz = ref([])
    let blogpreviewstech = ref([])
    const loadingBlogsTech = ref(true)
    const loadingBlogsNZ = ref(true)

  function setNZBlogPreviewsFromPrismic(payload) {
    loadingBlogsNZ.value = false
        if (blogpreviewsnz.value.length === 0) {
          blogpreviewsnz.value = payload
        } else {
          var addedResultsNZ = blogpreviewsnz.value.concat(payload)
          blogpreviewsnz.value = addedResultsNZ
        }
  }

  function setTechBlogPreviewsFromPrismic(payload) {
    loadingBlogsTech.value = false
        if (blogpreviewsnz.value.length === 0) {
          blogpreviewstech.value = payload
        } else {
          var addedResultsTech = blogpreviewstech.value.concat(payload)
          blogpreviewstech.value = addedResultsTech
        }
  }

  return { blogpreviewsnz, blogpreviewstech, loadingBlogsNZ, loadingBlogsTech, setNZBlogPreviewsFromPrismic, setTechBlogPreviewsFromPrismic }
})
