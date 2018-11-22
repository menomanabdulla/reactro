import React from 'react';
import {Row, Col, Icon, Avatar, Card } from 'antd';
const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  
class CardUI extends React.Component{
    render(){
        return(
            <div className="gutter-example">
                <Row gutter={28}>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block card-widgets">
                            <Card
                                className="das-card"
                                title="Card title"
                                extra={<a href="#">More</a>}
                                style={{ width: 300 }}
                            >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                            <Card 
                                title="Card title" 
                                bordered={false} 
                                style={{ width: 300 }}
                                className="das-card"
                            >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block card-widgets">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                className="das-card"
                           >
                                <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                className="das-card"
                            >
                                <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                                />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <div className="widgets-block card-widgets widgets-full">
                        <Card title="Card Title">
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                            <Card.Grid style={gridStyle}>Content</Card.Grid>
                        </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        <div className="widgets-block card-widgets widgets-full">
                            <Card title="Card title">
                                <p
                                style={{
                                    fontSize: 14,
                                    color: 'rgba(0, 0, 0, 0.85)',
                                    marginBottom: 16,
                                    fontWeight: 500,
                                }}
                                >
                                Group title
                                </p>
                                <Card
                                type="inner"
                                title="Inner Card title"
                                extra={<a href="#">More</a>}
                                >
                                Inner Card content
                                </Card>
                                <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="Inner Card title"
                                extra={<a href="#">More</a>}
                                >
                                Inner Card content
                                </Card>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CardUI;

