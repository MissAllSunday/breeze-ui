<template>
  <form @submit.prevent="validateForm()"  data-vv-scope="scope">
    <textarea name="message" rel="atwhoMention" v-model="form.message"></textarea>
    <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
  </form>
</template>

<script>
export default {
  name: 'Post',
  props: ['scope','lang'],
  data () {
    return {
      form: []
    }
  },
  methods: {
    validateForm: function () {
        var self = this;

      this.$validator.validateAll(self.scope).then(() => {
          if(funcion == 'confirm_save_cuenta') {
              this.confirm_save_cuenta();
          } else if (funcion == 'confirm_update_cuenta') {
              this.confirm_update_cuenta();
          }
      }).catch(() => {
          self.$swal({
              type: 'warning',
              title: 'Advertencia',
              text: 'Por favor corrija los errores del formulario'
          });
      });
    }
  }
}
</script>
