import React, {Component} from 'react';
import Navbar from "../layout/Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h2 className="text-primary text-center">Hoşgeldiniz Lütfen Giriş Yapınız</h2><br/>
                <h2 className="text-primary text-center">Hesabınız Yoksa Kayıt Olabilirsiniz</h2>
            </div>
        );
    }
}

export default Home;