import React from 'react';

import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

function Index() {
   return <Typography variant="h6" color="inherit" noWrap>
      { 'Index' }
   </Typography>;
}

Index.propTypes = {};

const mapStateToProps = () => {};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Index);
