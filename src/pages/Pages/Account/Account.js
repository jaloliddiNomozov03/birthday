import React, {Component, Suspense} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

import { Table, Tag, Space} from 'antd';
const { Content } = Layout;

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '8',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '9',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '10',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default class Account extends Component {
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav").classList.add("sticky-top");
        } else {
            document.getElementById("topnav").classList.remove("sticky-top");
        }
    };
    render() {
        return (
            <React.Fragment>
                {/*<Topbar />*/}
                <section className="section">
                    <Content style={{ padding: '0 50px', top: '50px' }}>
                    <Table dataSource={data}>
                        <ColumnGroup title="Name">
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                            <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        </ColumnGroup>
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={tags => (
                                <>
                                    {tags.map(tag => (
                                        <Tag color="blue" key={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <Space size="middle">
                                    <a>Invite {record.lastName}</a>
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>,
                    </Content>
                </section>
            </React.Fragment>
        );
    }
}

