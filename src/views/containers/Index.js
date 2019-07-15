import React from 'react';

import { connect } from 'react-redux';

import BaseLayout from 'views/containers/BaseLayout';

import Typography from '@material-ui/core/Typography';

function Index() {
   return <BaseLayout>
      <Typography variant="h6" color="inherit" noWrap>
         { 'Index' }
      </Typography>
   </BaseLayout>;
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
