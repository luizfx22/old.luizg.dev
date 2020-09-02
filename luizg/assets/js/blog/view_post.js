const createQuill = (selector, options) => {
  var quill = new Quill(selector, options);
  return quill;
}

// ------------------------
// Post visualization stuff
// ------------------------

const viewOptions = {
  theme: 'bubble',
  placeholder: 'Uhh Oh, something went wrong!',
  modules: {
    toolbar: null,
    syntax: false,
  },
  readOnly: true
};

const quillVisualization = createQuill('#editor-view', viewOptions);

const content = document.getElementById('content-input').value;

quillVisualization.setContents(JSON.parse(content))
