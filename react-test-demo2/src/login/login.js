import React , { Component } from 'react';
import { Button , Form , Input } from 'element-react';
import 'element-theme-default';
import Welcome from './welcome'
import './login.css'

class Login extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      hide:{display:"none"},
      show:{display:"block"},
      flag:true,
      timeout:true,//欢迎页
      form: {
        user: '' ,
        pass: '' ,
        code:''
      } ,
      rules: {
        user: [
          { required: true , message: '请输入手机号' , trigger: 'blur' } ,
          {
            validator: ( rule , value , callback ) => {
              if ( value === '' ) {
                callback( new Error( '请输入手机号' ) );
              } else {
                callback();
              }
            }
          }
        ] ,
        pass: [
          { required: true , message: '请输入密码' , trigger: 'blur' } ,
          {
            validator: ( rule , value , callback ) => {
              if ( value === '' ) {
                callback( new Error( '请输入密码' ) );
              } else {
                callback();
              }
            }
          }
        ],
        code: [
          { required: true , message: '请输入验证码' , trigger: 'blur' } ,
          {
            validator: ( rule , value , callback ) => {
              if ( value === '' ) {
                callback( new Error( '请输入验证码' ) );
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  }
  componentDidMount(){
    //欢迎页
    setTimeout(()=>{
      this.setState({timeout:false});
      console.log(this.state.timeout);
    },2000);
    
    
    //密码  验证码   切换
    const rules = this.state.urles ;
    this.state.flag ? this.setState({rules:{...rules,pass:[]}}) :  this.setState({rules:{...rules,code:[]}})
  }
  
  handleSubmit ( e ) {
    e.preventDefault();
    this.refs.form.validate( ( valid ) => {
      console.log(valid);
      if ( valid ) {
        this.props.history.push( '/index/first' );
        const obj = JSON.stringify( this.state.form );
        window.localStorage.setItem( "userInfo" , obj );
      } else {
        console.log( 'error submit!!' );
        return false;
      }
    } );
  }
  
  onChange ( key , value ) {
    this.setState( {
                     form: Object.assign( {} , this.state.form , { [ key ]: value } )
                   } );
  }
  
  yzmClick () {
  
  }
  
  render () {
    return (
      <div className="login_page">
        <Welcome  style={this.state.timeout ? this.state.show : this.state.hide }/>
        
        <div className='show_page'  style={this.state.timeout ? this.state.hide : this.state.show }>
          <Form ref="form"
                model={ this.state.form }
                rules={ this.state.rules }
                className="demo-ruleForm"
               
          >
            {/*用户名*/}
            <Form.Item prop="user" className='demo-user'>
              <Input type="text" value={ this.state.form.user } placeholder="请输入手机号"
                     onChange={ this.onChange.bind( this , 'user' ) } autoComplete="off"/>
            </Form.Item>
            {/*密码*/}
            <Form.Item prop="pass" className='demo-pass' style={this.state.flag ? this.state.show : this.state.hide }>
              <Input type="password" value={ this.state.form.pass } placeholder="请输入密码"
                     onChange={ this.onChange.bind( this , 'pass' ) } autoComplete="off"/>
              <Button type="text" className='yzm' onClick={()=>{this.setState({flag:false})} }>验证码登录</Button>
            </Form.Item>
            {/*验证码*/}
            <Form.Item prop="code" className='demo-pass' style={this.state.flag ? this.state.hide : this.state.show }>
              <Input type="number" value={ this.state.form.code } placeholder="请输入验证码"
                     onChange={ this.onChange.bind( this , 'code' ) } autoComplete="off"/>
              <Button type="text" className='yzm' onClick={ this.yzmClick.bind( this ) }>获取验证码</Button>
            </Form.Item>
            {/*密码登陆*/}
            <Form.Item className='demo-submit'  style={this.state.flag ? this.state.show : this.state.hide }>
              <Button type="primary" onClick={ this.handleSubmit.bind( this ) } className="flex flex-hc flex-vc">登录</Button>
              <div className='text-center zhline'><span className='assine'>注册账号</span></div>
            </Form.Item>
            {/*验证码登陆*/}
            <Form.Item className='demo-submit' style={this.state.flag ? this.state.hide : this.state.show }>
              <Button type="primary" onClick={ this.handleSubmit.bind( this ) } className="flex flex-hc flex-vc">进入</Button>
              <div className='text-center zhline'>
                <span className='assine' onClick={()=>{this.setState({flag:true})}}>切换密码登录</span>
              </div>
            </Form.Item>
          </Form>
          <div className="agreement text-center"
          >登录或注册表示同意好嘞 <span className='blue'>《用户协议》</span>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Login;