import React from 'react';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function CustomSkeleton({ width, height, dark }) {
  return (
    <SkeletonTheme color={dark ? '#2a4365' : ''} highlightColor={dark ? '#2c5282' : ''}>
      <Skeleton width={width} height={height} />
    </SkeletonTheme>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(CustomSkeleton);

