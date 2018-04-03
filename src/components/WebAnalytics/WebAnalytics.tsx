import * as React from 'react';
import { Row, Col } from 'antd';
import RectCard from '../RectCard';
import Charts from './Charts';

class Funnel extends React.Component<React.HTMLProps<HTMLElement>> {
  render() {
    return (
      <div>
        <RectCard data="1702.946" description="VISITS" icon='user' opacity={2/7} />
        <RectCard data="92 sec" description="AVG. VISIT DURATION" icon='clock-circle-o' opacity={3/7} />
        <RectCard data="3,018,398" description="PAGE VIEWS" icon='eye-o' opacity={4/7} />
        <RectCard data="58.57%" description="BOUNCE RATE" icon='warning' opacity={5/7} />
        <RectCard data="1.81" description="PAGES PER VISIT" icon='copy' opacity={6/7} />
        <RectCard data="11.04%" description="GOAL CONVERSION" icon='flag' opacity={7/7} />
      </div>
    );
  }
}

export default
class WenAnalytics extends React.Component {
  render () {
    return (
      <Row>
        <Col span={4}>
          <Funnel />
        </Col>
        <Col span={20}>
          <Charts />
        </Col>
      </Row>
    );
  }
}
