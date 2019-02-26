import React from 'react';
import Form from  './form.jsx';
import Preview from  './preview.jsx';
import Success from  './components/loading/index.jsx';
import SuccessPage from  '../../components/successpage/index.jsx';
import Loading from '../../components/loading/index.jsx';
import Error from '../../components/errorpage/index.jsx';

function View (props){
  if (props.view === 'form') return (<Form {...props}/>)
  if (props.view === 'preview') return (<Preview {...props} />);
  if (props.view === 'success') return (<Success view={props.view} url={props.url}/>)
  if (props.view === 'loading_post') return (<Loading title="Cargando post..."/>)
  if (props.view === 'updating') return (<Loading title="Actualizando post..."/>)
  if (props.view === 'posting') return (<Loading title="Publicando post..."/>)
  if (props.view === 'error_post') return (<Error title="Error al cargar el post"/>)
  if (props.view === 'update_error') return (<Error title="Error al actualizar"/>)
  if (props.view === 'updated') return (<SuccessPage title="Post actualizado!"/>)
  return null;
}

export default View;
