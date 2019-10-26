import React,{ Component } from 'react';
import { SearchBar, ListView, Flex, Button } from 'antd-mobile';
import './LiarList.scss';
import imgs1 from '../../../public/image/banner.png';
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '7865765112',
    name: '五百块他大哥大',
    des: '带小号抓鬼骗钱',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '7865765',
    name: '五百块他大哥大',
    des: '骗大闹boss',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '7865765',
    name: '五百块他大哥大',
    des: '骗熟人钱',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}
export default class LiarList extends Component {
    constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
        this.rData = genData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
        }, 600);
    }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
        return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
        this.rData = { ...this.rData, ...genData(++pageIndex) };
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
        }, 1000);
    }

    render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 10px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              borderBottom: '1px solid #F6F6F6',
            }}
          >
          <Flex>
            <Flex.Item style={{ fontSize: 18}}>ID：{obj.title}</Flex.Item>
            <Flex.Item style={{ fontSize: 13}}>名称：{obj.name}</Flex.Item>
         </Flex>
         </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
            </div>
          </div>
        </div>
      );
    };
        return (
            <div className="LiarList">
                <div className="header">
                   <div className="top">
                       <div className="right">
                           <SearchBar placeholder="请输入您要搜索的游戏ID" maxLength={8} />
                       </div>
                       <div className="left">
                           <Button type="primary" size="small" inline>一键举报</Button>
                       </div>
                   </div>
                    <div className='banner'>
                        <img src={imgs1} />
                    </div>
                </div>

                <div className="list">
                    <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? 'Loading...' : 'Loaded'}
                            </div>)}
                            renderRow={row}
                            renderSeparator={separator}
                            className="am-list"
                            pageSize={10}
                            useBodyScroll
                            onScroll={() => { console.log('scroll'); }}
                            scrollRenderAheadDistance={500}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                        />
                </div>
            </div>
        )
    }
}