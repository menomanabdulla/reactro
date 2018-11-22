import React from 'react';
import {Row, Col, Pagination } from 'antd';
function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}
function showTotal(total) {
    return `Total ${total} items`;
}
function itemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <a>Previous</a>;
    } if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
}
class PaginationUI extends React.Component{
    
    render(){
        return(
            <div className="gutter-example">
                <Row gutter={28}>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block pagination-widgets">
                            <Pagination defaultCurrent={1} total={50} />
                            <Pagination defaultCurrent={6} total={500} />
                            <Pagination
                                total={85}
                                showTotal={total => `Total ${total} items`}
                                pageSize={20}
                                defaultCurrent={1}
                            />
                            <br />
                            <Pagination
                                className="last-pagination"
                                total={85}
                                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                                pageSize={20}
                                defaultCurrent={1}
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block pagination-widgets">
                            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block pagination-widgets">
                            <Pagination size="small" total={50} />
                            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                            <Pagination size="small" total={50} showTotal={showTotal} />
                            <Pagination simple defaultCurrent={2} total={50} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="widgets-block pagination-widgets">
                            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
                            <Pagination total={500} itemRender={itemRender} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default PaginationUI;

