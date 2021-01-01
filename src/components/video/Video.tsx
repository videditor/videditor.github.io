import './video.scss';
import * as React from 'react';

export interface IVideoProps {}

export interface IVideoState {}

export default class Video extends React.Component<IVideoProps, IVideoState> {
  constructor(props: IVideoProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className='video-container'></div>;
  }
}
