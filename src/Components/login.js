import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login'
import './login.css'
import { ToastContainer } from 'react-toastify'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        account : {
            email : "",
            name:"",
            password:""
        }
    }

    

    componentDidMount() {
      const token = localStorage.getItem('token')
      axios.post('http://localhost:3500/art/verifyUser', {
          token
      })
      .then ( res => {
          if( res.data !== 'failure'){
              window.location.assign('/welcome')
          }
      })

      .catch( err => {
          console.log(err)
      })
    }

    handleChange = (e) => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : this.state.account.email,
            password : this.state.account.password,
        }
        axios.post('http://localhost:3500/art/loginUser', data)
        .then((res) => {
            if( res.data !== 'failure'){
                localStorage.setItem('token' , res.data)
                window.location.assign('/welcome')
            }
            else{
                toast('Please Check Your Credentials')
                let account = {...this.state.account};
                account.email = ""
                account.password = ""
                this.setState({account})
            }
         
        })
        .catch((err) => {
            let account = {...this.state.account};
            account.email = ""
            account.password = ""
            this.setState({account})
            toast(`Login Failed`)
        });
    }

    googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj;  // optional chaingin operator

        try{
            const account = {...this.state.account};
            this.setState({account})
            const data = {
                email : result.email,
                name: result.familyName
            }
            const res = await axios.post('http://localhost:3500/art/createUser', data);
            if(res.data[0].message === 'success'){
                localStorage.setItem('token' , res.data[0].token)
                toast(`Signup successfull`)
                window.location.assign('/welcome')
            }
            if(res.data[0].message === 'User Already Exists'){
                toast(`Signup successfull`)
                window.location.assign('/welcome')
            }
            
            if(res.data === 'failure'){
                toast('Login Failed')
            }
      
            if(res.data === 'failed'){
                toast('Login Failed')
            }
        }   
        catch(error){
            toast(`Login Failed`)
        }
    }

    googleFailure = (error) => {
        console.log(error);
        console.log('google signup failed')
    }

    render() { 
        return ( 
            <>
                 <ToastContainer></ToastContainer>
            <div className="login-whole">

                <div className="left-img-login">
                    <img src="./login.png" className="login"></img>
                </div>
            <form className="login-form">
                <div className="login-title">Artista </div>
                <div className="email-login" >Email</div>
                <input name="email" type="mail" className="input-email-login" value={this.state.account.email} onChange={this.handleChange}></input>
                <div className="password-login">Password</div>
                <input name="password" className="input-password-login" type="password" value={this.state.account.password} onChange={this.handleChange}></input>
                <div className="btns-login-flex">
                <div type="submit" onClick={this.handleSubmit} className="login-btn">Login</div>
                {/* <img src={this.state.account.imageUrl} alt="img" style={{borderRadius:'50%'}}/> */}
                {/* <button type="submit" onClick={this.handleSubmit}>Login</button> */}
                {/*  */}
                <GoogleLogin
                    clientId="695016441089-rrvns23b8bu4e37cttalfjutgfc4n74p.apps.googleusercontent.com"
                    render={renderProps => (
                    <div onClick={renderProps.onClick} color='primary' className="login-google">Signin With Google</div>
                    )}
                    onSuccess={this.googleSuccess}
                    onFailure={this.googleFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{cursor:'pointer'}}
                />

                </div>

          <Link to="/signup" style={{textDecoration:'none'}} >      <div className="dont-account">
                    Don't Have An Acoount ?
                </div>

                </Link>
            </form>
            </div>
            </>
         );
    }
}
 
export default Login;
