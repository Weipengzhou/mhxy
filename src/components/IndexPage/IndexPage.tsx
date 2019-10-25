import * as React from 'react';
import { Props } from './IndexPage.lib';
import { Button } from "antd-mobile";
import './IndexPage.scss';

export default class IndexPage extends React.Component<Props, object> {
    public render() {
        return (
            <div>
                <h1>Yay! Welcome to dva!</h1>
                <Button type='primary' className="App-Button">{document.documentElement.clientWidth}</Button>
            </div>
        )
    }
}