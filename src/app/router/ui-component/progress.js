import React from 'react';
import {Row, Col, Icon, Progress, Button  } from 'antd';
const ButtonGroup = Button.Group;
class ProgressUI extends React.Component{
    state = {
        percent: 0,
    }
    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }
    render(){
        return(
            <div className="gutter-example">
                <Row gutter={28}>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block progress-widgets">
                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block progress-widgets">
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block progress-widgets">
                            <Progress type="circle" percent={this.state.percent} />
                            <ButtonGroup>
                            <Button onClick={this.decline} icon="minus" />
                            <Button onClick={this.increase} icon="plus" />
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block progress-widgets">
                            <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                            <Progress type="circle" percent={100} format={() => 'Done'} />
                            <Progress strokeLinecap="square" percent={75} />
                            <Progress strokeLinecap="square" type="circle" percent={75} />
                            <Progress strokeLinecap="square" type="dashboard" percent={75} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ProgressUI;

