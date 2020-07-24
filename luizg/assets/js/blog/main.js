Vue.use(VueQuillEditor)

const vue = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: 'Hi from Vue.',
    content: '<h2>Django with Vue, what could go wrong!?</h2>',
    editorOption: {
      theme: 'bubble',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': ['serif'] }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ]
      }
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    }
  },
  created() {
  }
});