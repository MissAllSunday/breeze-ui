<template>
    <div class="inside information">
        <div class="breeze_user_statusbox">
            <form @submit.prevent="validateForm(scope)"  data-vv-scope="add_status" id="add_status">
                <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
                <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
            </form>
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
export default {
  name: 'Comment',
  props: ['comments', 'users', 'smf_url', 'lang', 'statusOwner', 'session_var', 'session_id'],
  data () {
    return {
      comments: this.comments
    }
  },
  methods: {
  }
}
</script>
