import React, {Component} from 'react'
import Breadcrumb from '../../../components/Breadcrumb/index'
import {Card, Table, Divider, Tag,Button} from 'antd'

const columns1 = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class TableDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedRowKeys: [],
            loading: false,
        };
    }

    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        // console.log(selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        /****基本表格***/
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
            {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (<span>{tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}</span>),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (<span><a href="javascript:;">Invite {record.name}</a><Divider type="vertical"/><a
                href="javascript:;">Delete</a></span>),
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {},
            getCheckboxProps: record => ({
                disabled: record.name === 'Joe Black', /****判断为Joe名字时，禁用状态****/
                name: record.name,
            }),
        };

        /****选择操作表格***/
        const rowSelection1 = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        /***固定表头表格***/
        const columns3 = [
            { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
            { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
            { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
            { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
            { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
            { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
            { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
            { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
            { title: 'Column 8', dataIndex: 'address', key: '8' },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <a href="javascript:;">action</a>,
            },
        ];

        const data3 = [];
        for (let i = 0; i < 100; i++) {
            data3.push({
                key: i,
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`,
            });
        }

        return (
            <div>
                <Breadcrumb arr={['显示', '表格']}></Breadcrumb>
                <Card bordered={false} title='何时使用'>
                    <ol>
                        <li>当有大量结构化的数据需要展现时；</li>

                        <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
                    </ol>
                </Card>

                <Card bordered={false} style={{marginTop: 14}} title='基本用法'>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>,
                </Card>

                <Card bordered={false} title='全选反选-完成后清空选择' style={{marginTop: 14}}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                        style={{marginBottom:14}}
                    >
                        重置
                    </Button>
                    <span style={{marginLeft: 8}}>
                        {hasSelected ? `选中 ${selectedRowKeys.length} 条数据` : ''}
                    </span>
                    <Table rowSelection={rowSelection1} columns={columns1} dataSource={data1}/>
                </Card>

                <Card title='展开-查看地址' bordered={false} style={{marginTop:14}}>
                    <Table
                        columns={columns}
                        expandedRowRender={record => <p style={{ margin: 0 }}>{record.address}</p>}
                        dataSource={data}
                    />
                </Card>

                <Card title='固定头和列' bordered={false} style={{marginTop:14}}>
                <Table columns={columns3} dataSource={data3} scroll={{ x: 1500, y: 300 }} />
                </Card>

            </div>
        )
    }
}

export default TableDemo