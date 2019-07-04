
<template>
  <layout name="LayoutDefault">
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
          <a-form
            id="components-form-demo-validate-other"
            :form="form"
            :layout="horizontal"
            @submit="handleSubmit"
          >
            <a-form-item
              v-bind="formItemLayout"
              label="问题类别"
              has-feedback>
              <a-select
                v-decorator="[
                  'select',
                  {
                    rules: [{ required: true, message: '请选择您的问题类别!' }]
                  }
                ]"
                placeholder="请选择一个类别"
              >
                <a-select-option value="china">
                  车辆管理
                </a-select-option>
                <a-select-option value="usa">
                  人员在位
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              v-bind="formItemLayout"
              label="问题描述"
              has-feedback>
              <a-textarea
                :rows="8"
                autosize:true
                placeholder="请详细描述亲的建议，如能还原场景、提供解决方案，将便于我们更快优化亲的使用体验。"
              />
            </a-form-item>
            <a-form-item
              v-bind="formItemLayout"
              label="添加图片">
              <a-upload
                v-decorator="[
                  'upload',
                  { valuePropName: 'fileList', getValueFromEvent: normFile }
                ]"
                name="logo"
                action="/upload.do"
                list-type="picture"
              >
                <a-button> <a-icon type="upload" /> 点击选择图片上传 </a-button>
              </a-upload>
            </a-form-item>
            <a-form-item
              :wrapper-col="{ span: 4, offset: 16 }"
              class="submit">
              <a-button
                type="primary"
                block
                html-type="submit">
                提交
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="6"
        :xl="6">
        <div class="advice-example right">
          <a-list
            :data-source="data"
            bordered>
            <a-list-item
              slot="renderItem"
              slot-scope="item, index">
              <a href="#">{{ item }}</a>
            </a-list-item>
            <div
              slot="header"
              class="advice-example-title">以下咨询可能对你有帮助！</div>
          </a-list>
        </div>
      </a-col>
    </a-row>
    </div>


  </layout>
</template>

<script>
import Layout from '../layouts/Layout';

export default {
  name: `add`,
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
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(`Received values of form: `, values);
        }
      });
    },
    normFile(e) {
      console.log(`Upload event:`, e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style>
.left{
  padding:20px;
  background-color: #fff;
    border-radius: 5px;
}
.advice-title {
  font-size: 1.2em;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding: 40px 0;
  border-bottom: 1px dashed #dbdcdc;
}
.submit{
   border-top: 1px dashed #dbdcdc;
}
.right{
      background-color: #f1f1f1;
    border-radius: 5px;
}
.advice-example-title{
  font-size: 16px;
    color: #000;
}
.ant-list-split .ant-list-item {
    border-bottom: none
}
</style>
