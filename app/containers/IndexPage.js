import React, {Component, PropTypes} from 'react';
import MainLayout from '../components/MainLayout'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
function IndexPage (props) {
  const {children, location, dispatch, indexPage,routes, params} = props;
  const indexPageProps = {
    props
  }
  console.log(props)
  return (
    <div>
        <MainLayout { ...indexPageProps }>
          {children}
        </MainLayout>
    </div>
  )
}

const mapStateToProps = indexPage => {
  // console.log('state:',state)
  return {indexPage}
}
export default connect(mapStateToProps)(IndexPage);
