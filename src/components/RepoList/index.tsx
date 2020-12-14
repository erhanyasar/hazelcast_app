import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import RepoList from './RepoList';

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <div>ERROR</div>;
};

export default LaunchListContainer;