import './app.scss';
import * as React from 'react';
import Assets from '../assets/Assets';
import Navbar from '../navbar/Navbar';
import Video from '../video/Video';
import Timeline from '../timeline/Timeline';

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className='app-container'>
        <Navbar></Navbar>
        <Assets></Assets>
        <Video></Video>
        <Timeline></Timeline>
      </div>
    );
  }
}
