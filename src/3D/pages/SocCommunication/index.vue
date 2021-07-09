<template>
  <q-page class="tw-flex tw-flex-col tw-justify-center tw-items-center">
    <div>
      <a href="https://im.gosuslugi.ru/#/login" class="link1">
        <img :src="require('./link1.svg')" alt="" />
      </a>
      <a href="https://pos.gosuslugi.ru/backoffice/login">
        <img :src="require('./link2.svg')" alt="" />
      </a>
      <q-dialog v-model="d1">
        <q-card style="max-width: 80%; width: 100%">
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn
              color="black"
              size="50px"
              icon="close"
              flat
              round
              dense
              v-close-popup
            />
          </q-card-section>
          <img src="images/d1.png" alt="" />
        </q-card>
      </q-dialog>
      <q-dialog v-model="d2">
        <q-card style="max-width: 80%; width: 100%">
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn
              color="black"
              size="50px"
              icon="close"
              flat
              round
              dense
              v-close-popup
            />
          </q-card-section>
          <img src="images/d2.png" alt="" />
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      d1: false,
      d2: false,
    };
  },
};
</script>

<style scoped>
.link1 {
  display: block;
  margin-bottom: 78px;
}
</style>
