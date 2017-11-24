<template>
  <div class="inside information">
    <div class="breeze_user_statusbox">
      <form @submit.prevent="validateForm('add_status')"  data-vv-scope="add_status" id="add_status">
        <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
        <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
      </form>
    </div>
    <div v-for="(single, index) in data.status">
      <div class="windowbg stripes breezeStatus" :id="'status_id_' + single.id">
        <div class="user_avatar">
          {{data.users[single.user_id].avatar}}<br />
        </div>
        <div class="status">
          <div class="post">
            {{single.body}}
          </div>
          <div class="options">
            <!--Likes-->
            <!--Time-->
            <!--Delete-->
          </div>
          <hr />
          <Comment :comments="single.comments"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breeze',
  props: ['status', 'users', 'smf_url', 'lang', 'statusOwner', 'session_var', 'session_id'],
  data () {
    return {
      status: this.status,
      users: this.users,
    }
  },
    methods:{
      confirm_obliterate: function(scope, id) {
        var self = this;

        swal({
          title: self.lang[scope + '_confirm_title'],
          text: self.lang[scope + '_confirm_text'],
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
