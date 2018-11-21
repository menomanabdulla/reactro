import React from 'react';
import { Row, Col, Icon } from 'antd';
import './dashboard.scss'
import BarChart from '../dashboard-widget/chart/BarChart';
import LineChart from '../dashboard-widget/chart/LineChart';
import VectorMap from '../vector-map/VectorMap';
class dashboard extends React.Component {
render(){
    return(
        <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
                <div className="card-block statistics">
                    <div className="statistics-icon">
                        <Icon type="block" />
                    </div>
                    <div className="statistics-content">
                        <h2>Total Order</h2>
                        <p>There are many variations</p>
                    </div>
                </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
                <div className="card-block statistics">
                    <div className="statistics-icon">
                        <Icon type="experiment" />
                    </div>
                    <div className="statistics-content">
                        <h2>Pending Order</h2>
                        <p>There are many variations</p>
                    </div>
                </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
                <div className="card-block statistics">
                    <div className="statistics-icon">
                        <Icon type="shopping-cart" />
                    </div>
                    <div className="statistics-content">
                        <h2>Shiping Order</h2>
                        <p>There are many variations</p>
                    </div>
                </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
                <div className="card-block statistics">
                    <div className="statistics-icon">
                        <Icon type="dollar" />
                    </div>
                    <div className="statistics-content">
                        <h2>Total Revenue</h2>
                        <p>There are many variations</p>
                    </div>
                </div>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="chart-block">
                <BarChart/>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="chart-block">
                <LineChart/>
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <VectorMap/>
          </Col>
        </Row>
      </div>
    );
    } 
}
export default dashboard;
