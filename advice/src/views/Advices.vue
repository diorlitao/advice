<template>
  <layout name="LayoutDefault">
    <div class="advices">
      <a-icon
        type="message"
        class="message-icon" /><span
          class="message-title"
        >大家的优质声音</span
        >
      <span v-show="advicestag">
        <a-icon
          type="right-circle"
          class="rightcircle"/>
        <a-tag
          closable
          color="#108ee9"
          @close="reset"
        >{{ advicestag }}</a-tag>
      </span>
      <a-row :gutter="10">
        <a-col
          :xs="24"
          :sm="24"
          :md="18"
          :lg="18"
          :xl="18">
          <div class="left">
            <a-skeleton :loading="loading">
              <!--            <a-card @tabChange="selectedone(index)">-->
              <!--              <a-card-grid-->
              <!--                v-for="(item, index) in advicetype"-->
              <!--                :key="index"-->
              <!--                style="width:25%;textAlign:'center'"-->

              <!--              ><a-icon-->
              <!--                :type="item.icon"-->
              <!--                style="margin-right:10px"/>{{ item.name }}</a-card-grid>-->
              <!--            </a-card>-->
              <a-row :gutter="2">
                <a-col
                  v-for="(item, index) in advicetype"
                  :span="4"
                  :key="index"
                  class="type-col">
                  <div
                    class="typecontent"
                    @click="selectedone"><a-icon
                      :type="item.icon"
                      style="margin-right:4px"
                    />{{ item.name }}
                  </a-icon>
                  </div>
                </a-col>
              </a-row>
            </a-skeleton>
            <div>
              <a-skeleton :loading="loading">
                <a-list
                  :pagination="pagination"
                  :data-source="selectedAdvices"
                  item-layout="vertical"
                  size="large"
                  class="advice-list"
                >
                  <a-list-item
                    slot="renderItem"
                    slot-scope="item, index"
                    key="item.title"
                  >
                    <template
                      v-for="{ type, text } in actions"
                      slot="actions">
                      <span :key="type">
                        <a-icon
                          :type="type"
                          style="margin-right: 8px"
                          @click="like()"/>
                        {{ text }}
                      </span>
                    </template>
                    <a-list-item-meta :description="item.description">
                      <a
                        slot="title"
                        :href="item.href">{{ item.title }}</a>
                      <a-avatar
                        slot="avatar"
                        :src="item.avatar" />
                    </a-list-item-meta>
                    {{ item.content }}
                  </a-list-item>
                </a-list>
              </a-skeleton>
            </div>
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
              block
              @click="add()"
            >我要提建议</a-button
            >
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
                  <a :href="item.url" target="_blank">{{ item.title }}</a>
                </a-list-item>
                <div
                  slot="header"
                  class="advice-example-title">
                  以下咨询可能对你有帮助！
                </div>
              </a-list>
            </a-skeleton>
          </div>
        </a-col>
      </a-row>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";

export default {
  name: `advices`,
  components: {
    Layout,
  },
  data() {
    return {
      loading: true,
      large: `large`,
      advicestag: ``,
      examples: [],
      advicetype: [],
      advices: [],
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
      actions: [
        { type: `like`, text: `156` },
        { type: `dislike`, text: `156` },
      ],
    };
  },
  computed: {
    selectedAdvices() {
      console.log(this.advicestag);

      if (this.advicestag === `` ||this.advicestag === `全部分类`) {
        return this.advices;
      }
      return this.advices.filter((item) => {
        console.log(item.type);
        return item.type === this.advicestag;
      });
    },
  },
  created() {
    this.getAdviceTypes();
    this.getExamples();
    this.getAdvices();
  },
  methods: {
    selectedone(e) {
      this.advicestag = e.target.innerText;
    },
    reset(e) {
      e.preventDefault();
      this.advicestag = `全部分类`;
    },
    add() {
      this.$router.push(`/add`);
    },
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = `liked`;
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = `disliked`;
    },
    // 获取建议类型
    getAdviceTypes() {
      const _this = this;
      this.axios(`http://localhost/api/advicetypes`).then((res) => {
        if (res.data.length) {
          this.loading = false;
          _this.$store.commit(`SAVE_ADVICE_TYPE`, res.data);
          this.advicetype = JSON.parse(localStorage.getItem(`advicetypes`)) || this.$store.state.advicetype;
        } else {
          this.$message.error(`数据获取失败`);
        }
      });
    },
    // 获取帮助列表
    getExamples() {
      const _this = this;
      this.axios(`http://localhost/api/examples`).then((res) => {
        if (res.data.length) {
          this.loading = false;
          _this.$store.commit(`SAVE_EXAMPLES`, res.data);
          this.examples = JSON.parse(localStorage.getItem(`examples`)) ||
            this.$store.state.examples;
        } else {
          this.$message.error(`数据获取失败`);
        }
      });
    },
    //  获取建议列表
    getAdvices() {
      const _this = this;
      this.axios(`http://localhost/api/advices`).then((res) => {
        if (res.data.length) {
          this.loading = false;
          _this.$store.commit(`SAVE_ADVICES`, res.data);
          this.advices = JSON.parse(localStorage.getItem(`advices`)) || this.$store.state.advices;
        }
      });
    },
  },
};
</script>
<style>
.adices {
}
.type-col{
  height:100px;line-height:100px;text-align:center;margin-bottom:2px;
}
.typecontent{
  background: #eee;
  color: #000;
  font-size: 16px;
}
.typecontent:hover{
  cursor:pointer;
  color: #fff;
  background: #5c6971;
}
.rightcircle{
  margin-left:10px;
  margin-right:10px;
}
.advice-list{
  margin-top:10px;
}
.advice-notice {
  color: #000;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 13px;
  text-align: center;
  background-color: #fff;
  padding-top:1em;
  padding-bottom:1em;
}
.advice-example-list {
  background-color: #f1f1f1 !important;
}
.message-icon,
.message-title {
  font-size: 24px;
  color: #5d6971;
  padding-bottom: 15px;
}
.message-icon {
  margin-right: 16px;
  font-size: 24px;
  color: #5d6971;
}
.left {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.add-advice {
  margin-bottom: 16px;
}
.ant-list-bordered {
  border: none;
}
.letter-bd{
  font-weight: 700;
}
</style>
