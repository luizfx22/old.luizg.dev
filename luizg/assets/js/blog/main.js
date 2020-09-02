// Main stuff
const createQuill = (selector, options) => {
  var quill = new Quill(selector, options);
  return quill;
}

// Quill editor for new posting
const editOptions = {
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
};

const quillNew = createQuill('#editor', editOptions);

const articleFormPost = document.getElementById('article-form');

articleFormPost.onsubmit = function () {
  const published = document.getElementById('published').value
  document.getElementById('published').value = (published === 'on') ? true : false;
  
  const contentInput = document.getElementById('content-input');
  contentInput.value = `${JSON.stringify(quill.getContents())}`;
  return true;
}

const generateSlug = (uid) => {
  // Function by Marcelo Ribeiro
  // @ github: https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77
  function slugify(str) {
    var map = {
      '-': ' ',
      '-': '_',
      'a': 'á|à|ã|â|À|Á|Ã|Â',
      'e': 'é|è|ê|É|È|Ê',
      'i': 'í|ì|î|Í|Ì|Î',
      'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c': 'ç|Ç',
      'n': 'ñ|Ñ',
      '`': '\`',
      '´': '\´',
      '~': '\~',
    };

    for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
  };

  const titleInput = document.getElementById('title-input').value;
  const text = titleInput.toString().replace(/\s/g, '-');
  
  const slugInput = document.getElementById('slug-field');

  slugInput.value = `${uid}-${slugify(text)}`.trim();
}