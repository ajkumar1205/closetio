import React,{useContext} from 'react';
import PageHeader from '../../components/PageHeader';
import AuthContext from '../../utils/UserProviderContext';

const Home = () => {
  let {name} = useContext(AuthContext)
  return (
    <div class="content">
            <PageHeader white="Welcome" gradient={name}/>
            {/* <div class="head">Welcome <span class ="hn"><span class ="as">Username !</span></span> !</div> */}
            <div class="avatar"></div>
    </div>
  )
}

export default Home
