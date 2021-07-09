<template>
  <div style="max-width: 2801px">
    <BoardHead :text="center.nane" />
    <board-cover>
      <board-devider leftWidth="50%" rightWidth="50%">
        <template #left>
          <board-offsets
            :width="1152"
            :l="80"
            :t="130"
            :b="53"
            :r="99"
            :toPerc="['l']"
          >
            <section style="max-width: 801px">
              <div v-space-m:bottom="'71px'">
                <p class="caption">Руководитель</p>
                <p class="tt-lg">{{ center.rucovoditel }}</p>
              </div>

              <div v-space-m:bottom="'67px'">
                <p class="caption">Адрес</p>
                <p class="tt-base">{{ center.address }}</p>
              </div>

              <div v-space-m:bottom="'67px'">
                <p class="caption">Режим работы:</p>
                <p
                  class="tt-base"
                  v-html="center.worktime"
                  v-space-m:bottom="'16px'"
                ></p>
                <p class="tt-base tw-text-positive">
                  по предварительной записи
                </p>
              </div>
              <div style="max-width: 351px" v-space-m:bottom="'73px'">
                <p class="caption">Телефоны:</p>
                <p class="tt-base" v-html="center.phone1"></p>
              </div>

              <div v-space-m:bottom="'71px'">
                <p class="caption">E-mail</p>
                <p class="tt-base">
                  <a class="link" :href="`mailto:${center.email}`">{{
                    center.email
                  }}</a>
                </p>
              </div>
            </section>
          </board-offsets>
        </template>
        <template #right>
          <board-offsets
            :l="125"
            :t="172"
            :b="53"
            :r="100"
            style="
              background: #151b33;
              height: 100%;
              border-left: 1px solid rgba(255, 255, 255, 0.5);
            "
          >
            <UrHelpForm v-if="!success" @submit="showSuccess" />
            <UrHelpSubmited v-else />
          </board-offsets>
        </template>
      </board-devider>
    </board-cover>
  </div>
</template>

<script>
import BoardDevider from './Helpers/BoardDevider.vue';
import BoardHead from 'src/3D/components/Boards/Helpers/BoardHead';
import UrHelpForm from 'src/3D/components/Forms/UrHelpForm';
import UrHelpSubmited from 'src/3D/components/UrHelp/UrHelpSubmited';
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
  filters: {
    prettyDate(val) {
      if (val === '-') return '-';
      return moment(val).format('DD MMMM YYYY [г.]');
    },
  },
  data() {
    return {
      success: false,
    };
  },
  computed: {
    ...mapGetters('_3D/urHelp', ['cityIdCentersMap']),
    center() {
      return this.cityIdCentersMap[this.$route.params.center_id];
    },
  },
  methods: {
    showSuccess() {
      this.success = true;
    },
  },
  components: { BoardDevider, BoardHead, UrHelpForm, UrHelpSubmited },
};
</script>

<style scoped>
.s1 {
  flex-basis: 496px;
}

.s2 {
  flex-basis: 507px;
}

.sections {
  font-size: 40px;
}

.caption {
  font-size: 24px;
  margin-bottom: 16px;
}

.tt-lg {
  @apply tw-font-bold tw-text-md;
}

.tt-base {
  @apply tw-text-sm;
}

.link {
  text-decoration: underline;
}
</style>
