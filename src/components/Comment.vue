<template>
    <div class="inside information">
        <div class="breeze_user_statusbox">
            <Post
              :scope="'add_comment'"
              :lang="lang"/>
        </div>
        <div v-for="(comment, index) in data.comments">
            <div class="windowbg stripes breezeStatus" :id="'status_id_' + comment.id">
                <div class="user_avatar">
                    {{data.users[comment.user_id].avatar}}<br />
                </div>
                <div class="status">
                    <div class="post">
                        {{comment.body}}
                    </div>
                    <div class="options">
                        <!--Likes-->
                        <!--Time-->
                        <!--Delete-->
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'Comment',
  components: {
    Post,
  },
  props: ['comments', 'lang'],
  data () {
    return {
      data: {
          comments: this.comments
      }
    }
  },
  methods: {
  }
}
</script>
