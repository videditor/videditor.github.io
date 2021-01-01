import './assets.scss';
import * as React from 'react';

export interface IAssetsProps {}

export interface IAssetsState {}

export default class Assets extends React.Component<IAssetsProps, IAssetsState> {
  constructor(props: IAssetsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className='assets-container'></div>;
  }
}
