import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'element-react';
import 'element-theme-default';
import Swiper from 'swiper/dist/js/swiper.min'
import 'swiper/dist/css/swiper.min.css'
import { addCount , delCount , addCountAsync } from "./../../store/store";
import './App.css';

@connect( state => ( { num: state.counter } ) , { addCount , delCount , addCountAsync } )
class First extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      items: [
        {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci1.jpg' ,
          title: '图片1' ,
          link: 'http://jd.com'
        } , {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci2.jpg' ,
          title: '图片2' ,
        } , {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci3.jpg' ,
          title: '图片3' ,
          link: 'http://jd.com'
        } , {
          image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci4.jpg' ,
          title: '图片4' ,
        }
      ] ,
      iconList: [
        {
          icon: require( "./../../static/img/icon1.png" ) ,
          iconText: '意义' ,
          path: '/one' ,
        } , {
          icon: require( './../../static/img/icon2.png' ) ,
          iconText: '尔尔' ,
          path: '/two' ,
        } , {
          icon: require( './../../static/img/icon3.png' ) ,
          iconText: '散散' ,
          path: '/three' ,
        } , {
          icon: require( './../../static/img/icon4.png' ) ,
          iconText: '思思' ,
          path: '/four' ,
        } , {
          icon: require( './../../static/img/icon5.png' ) ,
          iconText: '呜呜' ,
          path: '/five' ,
        } , {
          icon: require( './../../static/img/icon6.png' ) ,
          iconText: '溜溜' ,
          path: '/six' ,
        } , {
          icon: require( './../../static/img/icon7.png' ) ,
          iconText: '琪琪' ,
          path: '/seven' ,
        } , {
          icon: require( './../../static/img/icon8.png' ) ,
          iconText: '叭叭' ,
          path: '/eight' ,
        }
      ]
    }
  }
  
  componentDidMount () {
    new Swiper( ".swiper-container" , {
      autoplay: {
        timeout: 1000 ,
      } ,
      pagination: {
        el: ".swiper-pagination" ,
        clickable: true ,
      } ,
      on: {
        click: ( e ) => {
          alert( "你点击了我，我该怎么做  " )
        }
      }
    } );
  }
  
  render () {
    return (
      <div className="App">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            { this.state.items.map( ( item , index ) => {
              return <div key={ index } className="swiper-slide"><img src={ item.image } alt=""/></div>
            } ) }
          </div>
          <div className="swiper-pagination"> </div>
        </div>
        { console.log( this.props.match ) }
        <div className="iconlist flex flex-vc flex-hsb flex-hw">
          { this.state.iconList.map( ( item , index ) => {
            return (
              <Link to={ item.path } key={ index }
                    className='iconitem flex flex-v flex-hsa flex-vc'>
                <img src={ item.icon } alt=""/>
                <span>{ item.iconText }</span>
              </Link>
            )
          } ) }
        </div>
        
        <div>
          <Button>{ this.props.num }</Button>
          <Button onClick={ this.props.addCount }>增加</Button>
          <Button onClick={ this.props.delCount }>减少</Button>
          <Button onClick={ this.props.addCountAsync }>过一秒增加</Button>
        </div>
      </div>
    );
  }
}


export default First;
