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
    ],
    syntax: false, 
  }
});

const articleFormPost = document.getElementById('article-form');

articleFormPost.onsubmit = function (event) {
  const contentInput = document.getElementById('content-input');
  contentInput.value = quill.getContents();
  console.log(quill.getContents());
  return false;
  event.preventDefault();

}