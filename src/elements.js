const elements = {
  addElementId: () => {
    document.querySelectorAll('form')[0].id = 'car-names-form';
    document.querySelectorAll('input')[0].id = 'car-names-input';
    document.querySelectorAll('button')[0].id = 'car-names-submit';
    document.querySelectorAll('h4')[0].id = 'racing-count-title';
    document.querySelectorAll('form')[1].id = 'racing-count-form';
    document.querySelectorAll('input')[1].id = 'racing-count-input';
    document.querySelectorAll('button')[1].id = 'racing-count-submit';
    document.querySelectorAll('h4')[1].id = 'racing-result';
  },
};

export default elements;
