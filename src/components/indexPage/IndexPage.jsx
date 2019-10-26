import React from 'react';
import { Button } from "antd-mobile";
import './IndexPage.scss';

export default class IndexPage extends React.Component {
   render() {
        return (
            <div>
                <Button type='primary' className="App-Button">{document.documentElement.clientWidth}</Button>
            </div>
        )
    }
}