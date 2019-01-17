const initState = {
  projects: [
    {id: '1', title: 'help me find solution', content: 'blah blah blah'},
    {id: '2', title: 'search right way', content: 'blah blah blah'},
    {id: '3', title: 'johny hunt with time', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
    console.log('created project', action.project)
  }
  return state
}

export default projectReducer;
