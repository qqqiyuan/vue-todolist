<template>
  <p class="title">TODOS</p>
  <input-text v-bind:session-list="sessionList"></input-text>
  <list v-bind:session-list="sessionList" v-bind:dialog-info="dialogInfo"></list>
  <dialog v-bind:dialog-info="dialogInfo"></dialog>
</template>

<script type="text/javascript">
  import session from './assets/util/session.js';
  import inputText from './components/inputText.vue';
  import list from './components/list.vue';
  import dialog from './components/dialog.vue';

  export default {
    data() {
      let data = session.fecth();
      return {
        sessionList: data.sessionList,
        dialogInfo: {
          show: false
        }
      }
    },
    components: {
      inputText, list, dialog
    },
    ready() {
      // console.log(this.sessionList);
    }
  };
</script>

<style lang="less">
  @import "./assets/mixins/reset.less";
  @import "./assets/mixins/color.less";
  @import "./assets/iconfont/icon.less";

  body {
    background-color: @grey-light;
    .page-content {
      width: 10.0rem;
      margin: 0 auto;
    }
    .title {
      position: relative;
      height: 1.333333rem;
      line-height: 1.333333rem;
      font-size: 0.373333rem;
      text-align: center;
      background-color: @white;
      color: @grey-dark;
      overflow: hidden;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>