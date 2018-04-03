import * as React from 'react';
import { Icon } from 'antd';
import './RectCard.css';


interface RectProps {
  data: string;
  description: string;
  icon: string;  // <Icon type=name>
  opacity: number;
}


class RectCard extends React.Component<RectProps, any> {
  render () {
    return (
      <div className="rect-card" style={{ opacity: this.props.opacity }}>
        <div className="text-area">
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{this.props.data}</span>
          <span>{this.props.description}</span>
        </div>
        <div style={{ marginLeft: 'auto', padingRight: '10px' }}>
          <Icon type={this.props.icon} style={{ fontSize: 54, color: '#beebff'}} />
        </div>
      </div>
    );
  }
}

export default RectCard;
