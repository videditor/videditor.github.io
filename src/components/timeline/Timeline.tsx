import './timeline.scss';
import * as React from 'react';

export interface ITimelineProps {}

export interface ITimelineState {}

export default class Timeline extends React.Component<ITimelineProps, ITimelineState> {
  constructor(props: ITimelineProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className='timeline-container'></div>;
  }
}
