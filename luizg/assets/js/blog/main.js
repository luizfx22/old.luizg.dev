// Main stuff
var quill = new Quill('#editor', {
  theme: 'bubble',
  placeholder: 'My awesome content',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'header': [2, false] }],

      ['clean']                                         // remove formatting button
    ]
  }
});


// Vue instance
const vue = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    
  },
  methods: {
    
  },
  created() {
  }
});