<template>
  <layout name="LayoutDefault">
    <div class="advices">
      <a-row :gutter="10">
        <a-col
          :xs="24"
          :sm="24"
          :md="18"
          :lg="18"
          :xl="18">
          <div class="left advices-none">
            <p>您还没有提交建议。</p>
            <p>
              您可以
              <router-link to="/add">写一条建议</router-link>，也可以查看
              <router-link to="/">常见建议</router-link>。
            </p>
          </div>
        </a-col>
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="6"
          :xl="6">
          <div class="advice-example right">
            <a-button
              :size="large"
              type="primary"
              icon="edit"
              @click="add"
              block>我要提建议</a-button>
            <div class="advice-notice">
              <p class="letter-bd">请详细描述您的问题以及建议</p>
              <p>我们会细心聆听，解决问题！</p>
            </div>
            <a-skeleton :loading="loading">
            <a-list
              :data-source="examples"
              bordered
              class="advice-example-list">
              <a-list-item
                slot="renderItem"
                slot-scope="item, index">
                <a href="#">{{ item.title }}</a>
              </a-list-item>
              <div
                slot="header"
                class="advice-example-title">以下咨询可能对你有帮助！</div>
            </a-list>
            </a-skeleton>
          </div>
        </a-col>
      </a-row>

    </div>
  </layout>
</template>

<script>
import Layout from '../layouts/Layout';

export default {
  name: `my`,
  components: {
    Layout,
  },
  data() {
    return {
      loading:true,
      examples: [],
    };
  },
  created(){
    this.getExamples()
  },
  methods:{
    add(){
      this.$router.push('/add')
    },
    // 获取帮助列表
    getExamples() {
      const _this = this;
      this.axios(`http://localhost/api/examples`).then((res) => {
        if (res.data.length) {
          this.loading = false
          _this.$store.commit(`SAVE_EXAMPLES`, res.data);
          this.examples = JSON.parse(localStorage.getItem(`examples`)) ||
            this.$store.state.examples;
        } else {
          this.$message.error(`数据获取失败`);
        }
      });
    },
  }
};
</script>
<style>
.advices-none{
text-align: center;
}
.advice-example-list{
      background-color: #f1f1f1 !important;
}
<style>
