import React,{useContext} from 'react';
import PageHeader from '../../components/PageHeader';
// import AuthContext from '../../utils/UserProviderContext';

const Home = () => {
  // let {name} = useContext(AuthContext)
  return (
    <div class="content">
            <PageHeader white="Welcome" gradient="username"/>
            {/* <div class="head">Welcome <span class ="hn"><span class ="as">Username !</span></span> !</div> */}
              <img src='https://readyplayerme-photobooth.s3.amazonaws.com/644100ece0dd9597a1ebeee6/pTbXYF.jpeg' alt="avatar" className='avatar'/>
            
    </div>
  )
}

export default Home
