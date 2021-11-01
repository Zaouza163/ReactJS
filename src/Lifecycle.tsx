import React from 'react';

interface ILifecycleProps {
  someProp: number;
}

export class Lifecycle extends React.Component<ILifecycleProps> {
  constructor(props: ILifecycleProps) {
    super();
  }
}