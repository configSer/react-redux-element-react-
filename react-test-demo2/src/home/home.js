import React , { Component } from 'react';
import { Link , Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { firstCount , secondCount ,thirdCount , fourthCount } from "../store/navlist";
import './home.css';
import './../static/iconfont/iconfont.css'

import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';

@connect(state=>({...state.headding}), { firstCount , secondCount ,thirdCount , fourthCount })
class Home extends Component {
  componentDidMount(){
    this.props.firstCount();
  }
  
  render () {
    const footnav = { padding:"0 2rem" };
    return (
      <div className="home_page height-100 flex flex-v">
        <header className='flex flex-hsb flex-vc navheight'>
          <div className="topleft">{ this.props.left}</div>
          <div className="topcenter">{ this.props.name}</div>
          <div className="topright">{ this.props.right}</div>
        </header>
        <main className="flex1">
          <Switch>
            <Route path={ `${this.props.match.url}/first`} component={ First }/>
            <Route path={ `${this.props.match.url}/second`} component={ Second }/>
            <Route path={ `${this.props.match.url}/third`} component={ Third }/>
            <Route path={ `${this.props.match.url}/fourth`} component={ Fourth }/>
          </Switch>
        </main>
        <footer className='flex flex-vc flex-hsb navheight' style={footnav}>
          <Link to={ `${this.props.match.url}/first`} onClick={this.props.firstCount} style={{color:this.props.color1}} >
            <p className={'iconfont '+this.props.icon1}> </p>首页
          </Link>
          <Link to={ `${this.props.match.url}/second`}  onClick={this.props.secondCount} style={{color:this.props.color2}} >
            <p className={'iconfont '+this.props.icon2}> </p>绑卡
          </Link>
          <Link to={ `${this.props.match.url}/third`}  onClick={this.props.thirdCount} style={{color:this.props.color3}} >
            <p className={'iconfont '+this.props.icon3}> </p>回收
          </Link>
          <Link to={ `${this.props.match.url}/fourth`}  onClick={this.props.fourthCount} style={{color:this.props.color4}} >
            <p className={'iconfont '+this.props.icon4}> </p>我的
          </Link>
        </footer>
      </div>
    )
  }
}
export default  Home ;