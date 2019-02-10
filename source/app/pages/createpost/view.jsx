import React from 'react';
import Form from  './form.jsx';
import Preview from  './preview.jsx';
import Loading from  './components/loading/index.jsx';

function View (props){
  if (props.view === 'form') return (<Form {...props}/>)
  if (props.view === 'preview') return (<Preview {...props} />);
  if (props.view === 'loading' || props.view === 'success') return (<Loading view={props.view} url={props.url}/>)
  return null;
}

export default View;
