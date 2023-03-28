import React, { useEffect } from 'react';
import BannerHero from '../components/bannerHero/BannerHero';
import Reinsurance from '../components/reinsurance/Reinsurance';
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

function Home() {
  const token = useSelector(state => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if(token.length > 0) {
      navigate('/profile');
    }
  }, [token]);

  return (
    <main>
        <BannerHero />

        <Reinsurance />
    </main>
  );
}

export default Home;