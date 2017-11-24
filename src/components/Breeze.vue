<template>
  <div class="inside information">
    <div class="breeze_user_statusbox">
      <form @submit.prevent="validateForm('add_status', 'confirm_add_status')"  data-vv-scope="add_status" id="add_status">
        <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
        <input type="submit" value="{{lang.post}}" name="statusSubmit" class="button_submit" id="statusSubmit"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breeze',
  props: ['status','comments', 'users', 'smf_url', 'lang', 'statusOwner', 'session_var', 'session_id'],
  data () {
    return {
      status: this.status,
      comments: this.comments,
      users: this.users,
      form: []

    }
  },
    methods:{
        validateForm: function(scope, funcion) {
            var self = this;

            this.$validator.validateAll(scope).then(() => {
                if(funcion == 'confirm_save_cuenta') {
                    this.confirm_save_cuenta();
                } else if (funcion == 'confirm_update_cuenta') {
                    this.confirm_update_cuenta();
                }
            }).catch(() => {
                swal({
                    type: 'warning',
                    title: self.lang.warning,
                    text: self.lang.check_errors
                });
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
