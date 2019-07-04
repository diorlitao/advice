<template>
  <layout name="LayoutDefault">
    <div class="adices">
      <a-icon
        type="message"
        class="message-icon" /><span
          class="message-title"
        >大家的优质声音</span
        >
      <a-row :gutter="10">
        <a-col
          :xs="24"
          :sm="24"
          :md="18"
          :lg="18"
          :xl="18">
          <div class="left">
            <p class="advice-title">
              您的建议我们将全力处理，如有咨询或疑问需要解决，请进入
              <router-link to="/">常见建议</router-link>
            </p>
            <a-card>
              <a-card-grid
                v-for="(item, index) in typeData"
                :key="index"
                style="width:25%;textAlign:'center'"
              >{{ item.name }}</a-card-grid
              >
            </a-card>
            <a-list
              :pagination="pagination"
              :data-source="listData"
              item-layout="vertical"
              size="large"
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
                      style="margin-right: 8px" />
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
            >我要提建议</a-button
            >
            <div class="advice-notice">
              <p class="letter-bd">请详细描述您的问题以及建议</p>
              <p>我们会细心聆听，解决问题！</p>
            </div>
            <a-list
              :data-source="data"
              bordered
              class="advice-example-list">
              <a-list-item
                slot="renderItem"
                slot-scope="item, index">
                <a href="#">{{ item }}</a>
              </a-list-item>
              <div
                slot="header"
                class="advice-example-title">
                以下咨询可能对你有帮助！
              </div>
            </a-list>
          </div>
        </a-col>
      </a-row>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";

const typeData = [
  { id: 1, name: `值班管理` },
  { id: 1, name: `角色管理` },
  { id: 1, name: `用户管理` },
  { id: 1, name: `请销假管理` },
  { id: 1, name: `日程安排` },
  { id: 1, name: `人员在位` },
  { id: 1, name: `督办` },
  { id: 1, name: `用印管理` },
  { id: 1, name: `车辆管理` },
];
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: `https://vue.ant.design/`,
    title: `协同办公系统问题 ${i}`,
    avatar: `https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`,
    description: `用户： na***@163.com 2019/07/01 09:32:45.`,
    content:
      `We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.`,
  });
}

export default {
  name: `advices`,
  components: {
    Layout,
  },
  data() {
    return {
      data: [
        `系统运行缓慢1`,
        `系统运行缓慢1`,
        `系统运行缓慢1`,
        `系统运行缓慢1`,
        `系统运行缓慢1`,
      ],
      typeData,
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
      actions: [
        { type: `dislike-o`, text: `156` },
        { type: `like-o`, text: `156` },
      ],
    };
  },
};
</script>
<style>
.adices {
}
.advice-notice {
  color: #000;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 13px;
  text-align: center;
  background-color: #fff;
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
</style>
