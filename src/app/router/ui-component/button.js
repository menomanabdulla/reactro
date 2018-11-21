import React from 'react';
import { Row, Col, Icon, Button, Radio } from 'antd';
const ButtonGroup = Button.Group;
class ButtonUI extends React.Component{
    state = {
        size: 'large',
        loading: false,
        iconLoading: false,
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }
    
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    
    render(){
        const size = this.state.size;
        return(
            <div className="gutter-example">
                <Row gutter={28}>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block button-widgets">
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="danger">Danger</Button>
                            <h4>Basic</h4>
                            <ButtonGroup>
                                <Button>Cancel</Button>
                                <Button>OK</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button disabled>L</Button>
                                <Button disabled>M</Button>
                                <Button disabled>R</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>L</Button>
                                <Button>M</Button>
                                <Button>R</Button>
                            </ButtonGroup>

                            <h4>With Icon</h4>
                            <ButtonGroup>
                                <Button type="primary">
                                    <Icon type="left" />Go back
                                </Button>
                                <Button type="primary">
                                    Go forward<Icon type="right" />
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary" icon="cloud" />
                                <Button type="primary" icon="cloud-download" />
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block button-widgets">
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">Search</Button>
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <br />
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <Button type="dashed" shape="circle" icon="search" />
                            <Button type="dashed" icon="search">Search</Button>
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <br /><br />
                            <Button type="primary" size={size}>Primary</Button>
                            <Button size={size}>Normal</Button>
                            <Button type="dashed" size={size}>Dashed</Button>
                            <Button type="danger" size={size}>Danger</Button>
                            <br />
                            <Button type="primary" shape="circle" icon="download" size={size} />
                            <Button type="primary" icon="download" size={size}>Download</Button>
                            <br />
                            <Button.Group size={size}>
                            <Button type="primary">
                                <Icon type="left" />Backward
                            </Button>
                            <Button type="primary">
                                Forward<Icon type="right" />
                            </Button>
                            </Button.Group>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block button-widgets">
                            <Button type="primary" loading>
                            Loading
                            </Button>
                            <Button type="primary" size="small" loading>
                            Loading
                            </Button>
                            <br />
                            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                            Click me!
                            </Button>
                            <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                            Click me!
                            </Button>
                            <br />
                            <Button shape="circle" loading />
                            <Button type="primary" shape="circle" loading />
                            <h4>Basic</h4>
                            <ButtonGroup>
                                <Button>Cancel</Button>
                                <Button>OK</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button disabled>L</Button>
                                <Button disabled>M</Button>
                                <Button disabled>R</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>L</Button>
                                <Button>M</Button>
                                <Button>R</Button>
                            </ButtonGroup>

                            <h4>With Icon</h4>
                            <ButtonGroup>
                                <Button type="primary">
                                    <Icon type="left" />Go back
                                </Button>
                                <Button type="primary">
                                    Go forward<Icon type="right" />
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary" icon="cloud" />
                                <Button type="primary" icon="cloud-download" />
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block button-widgets">
                            <Button type="primary" size={size}>Primary</Button>
                            <Button size={size}>Normal</Button>
                            <Button type="dashed" size={size}>Dashed</Button>
                            <Button type="danger" size={size}>Danger</Button>
                            <br />
                            <Button type="primary" shape="circle" icon="download" size={size} />
                            <Button type="primary" icon="download" size={size}>Download</Button>
                            <br />
                            <Button.Group size={size}>
                                <Button type="primary">
                                    <Icon type="left" />Backward
                                </Button>
                                <Button type="primary">
                                    Forward<Icon type="right" />
                                </Button>
                            </Button.Group>
                            <Button type="primary" block>Primary</Button>
                            <Button type="danger" block>danger</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ButtonUI;

