<template>
  <div class="modal">
    <div>
      <img width="80px" src="../../assets/volunteer/succes-icon.png" />
    </div>
    <p class="text wrapper">
      Terimakasih sudah mendaftar! Jika terdapat kendala dapat menghubungi CS
      kami atau social media kami melalui :
    </p>
    <div class="wrapper">
      <div class="cp">
        <img
          class="img"
          src="../../assets/volunteer/instagram.png"
        />sagarafoundation
      </div>
      <div class="cp">
        <img
          class="img"
          src="../../assets/volunteer/mail.png"
        />yayasan@sagaratech.com
      </div>
    </div>
    <div style="width: 100%">
      <button @click.prevent="backToDashboard" class="btn">Back to Dashoard</button>
    </div>
    <v-icon @click.prevent="prevStep" class="close">mdi-close</v-icon>
  </div>
</template>

<script>
export default {
  methods: {
    prevStep() {
      this.$emit("nextHandler", "3");
    },
    backToDashboard() {
        this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.modal {
  width: 420px;
  background-color: #000000;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1 !important;
  z-index: 100;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  border-radius: 0.3em;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
}

.wrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cp {
  background-color: #51b747;
  border-radius: 1em;
  padding: 5px 8px;
  color: black;
  width: fit-content;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  gap: 10px;
}

.text {
  text-align: center;
  margin: 0;
}

.btn {
  background-color: #1aa21e;
  border-radius: 0.3em;
  padding: 8px 15px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
}

.img {
  width: 20px;
}
</style>
