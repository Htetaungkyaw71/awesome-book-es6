export default (library) => {
  if (localStorage.getItem('bokLibrarie')) {
    library.books = JSON.parse(localStorage.getItem('bokLibrarie'));
  } else {
    localStorage.setItem('bokLibrarie', JSON.stringify([]));
  }
};
