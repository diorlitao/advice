
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
            layout="horizontal"
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
                <a-select-option
                  v-for="(item,index) in advicetypes" :value="item.value">
                  {{ item.name }}
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
                v-decorator="[
                  'textarea',
                  {
                    rules: [{ required: true, message: '请详细描述您的问题!' }]
                  }
                ]"
                placeholder="请详细描述亲的建议，如能还原场景、提供解决方案，将便于我们更快优化亲的使用体验。"
              />
            </a-form-item>
            <a-form-item
              v-bind="formItemLayout"
              label="添加图片">
<!--              <a-upload-->
<!--                v-decorator="[-->
<!--                  'upload',-->
<!--                  { valuePropName: 'fileList', getValueFromEvent: normFile }-->
<!--                ]"-->
<!--                name="logo"-->
<!--                action="/upload.do"-->
<!--                list-type="picture"-->
<!--              >-->
<!--                <a-button> <a-icon type="upload" /> 点击选择图片上传 </a-button>-->
<!--              </a-upload>-->
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div>
                  <a-icon type="plus" />
                  <div class="ant-upload-text">点击上传图片</div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
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
            :data-source="examples"
            bordered>
            <a-list-item
              slot="renderItem"
              slot-scope="item, index">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
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
      formItemLayout:{
        type:'',
        content:''
      },
      advicetypes: [],
      examples: [],
      previewVisible: false,
      previewImage: '',
      fileList: [{
        // uid: '-1',
        // name: 'xxx.png',
        // status: 'done',
        // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    this.getExamples(),
    this.getAdviceTypes();
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
    handleSubmit(e) {
      this.form.validateFields((err, values) => {
        debugger
        if (!err) {
          console.log(`Received values of form: `, values);
          this.$message({
            message:'问题提交成功',
            type:'success'
          })
        } else {

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
    getAdviceTypes() {
      const _this = this;
      this.axios(`http://localhost/api/advicetypes`)
        .then((res) => {
          if (res.data.length) {
            this.loading = false;
            _this.$store.commit(`SAVE_ADVICE_TYPE`, res.data);
            this.advicetypes = JSON.parse(localStorage.getItem(`advicetypes`)) || this.$store.state.advicetypes;
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
          _this.$store.commit(`SAVE_EXAMPLES`, res.data);
          this.examples = JSON.parse(localStorage.getItem(`examples`)) ||
            this.$store.state.examples;
        } else {
          this.$message.error(`数据获取失败`);
        }
      });
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
