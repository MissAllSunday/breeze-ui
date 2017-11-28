<template>
  <div class="inside information">
    <div class="breeze_user_statusbox">
      <Post
      :scope="'add_status'"
      :lang="lang"/>
    </div>
    <div v-for="(single, index) in data.status">
      <div class="windowbg stripes breezeStatus" :id="'status_id_' + single.id">
        <div class="user_avatar">
          something<br />
        </div>
        <div class="status">
          <div class="post">
            {{single.body}}
          </div>
          <div class="options">
            <!--Likes-->
            <!--Time-->
            <a href="#" v-on:click="confirm_obliterate(single.id)">delete</a>
          </div>
          <hr />
          <Comment
            :comments="single.comments"
            :lang="lang" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'
import Post from './Post'

export default {
  name: 'Breeze',
  components: {
    Comment,
    Post,
  },
  props: ['status', 'users', 'lang'],
  data: function() {
    return {
      data: {
        status: this.status,
        users: this.users
      }
    }
  },
  methods:{
    confirm_obliterate: function(id) {
      var self = this;

      swal({
        title: self.lang.delete_confirm_title,
        text: self.lang.delete_confirm_text,
        type: "warning",
        showCancelButton: true,
        confirmButtonText: self.lang.confirm_yes,
        cancelButtonText: self.lang.confirm_no,
      }).then(function () {
          self.obliterate(scope, id);
      }).catch(swal.noop);
    },
    obliterate: function (scope, id) {
      // Lots and lots of ajax here
    }
  }
}
</script>
