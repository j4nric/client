import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { useParams } from 'react-router-dom';

export function withRouter(){

  return(props)=>{

    console.log(props);
     const match  = {params: useParams()};
     return <StreamEdit {...props}  match = {match}/>
 }
};

const StreamEdit = (props) => {

  console.log("props inside stream edit", props);

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);


    //console.log(props.stream);
    if (!props.streams || !Object.keys(props.streams).includes(props.match.params.id)) {
      return <div>Loading...</div>;
    }

    return <div>{props.streams[props.match.params.id].title}</div>;
  
}

const mapStateToProps = (state, ownProps) => {

  console.log(ownProps);
  // console.log(state.streams[1]);
  // state.streams[ownProps.match.params.id]
  return { streams: state.streams }


  return { stream: null };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(withRouter(StreamEdit));
