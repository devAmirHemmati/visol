import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { TbBrandTelegram } from 'react-icons/tb';
import { useI18Context } from '../../gsm';
import ContainerLayout from '../container';
import classes from './styles.module.scss';

const SocialNetworksLayout = () => {
  const { activeLocaleWords } = useI18Context();

  return (
    <div className={classes.wrapper}>
      <ContainerLayout className={classes.container}>
        <a
          href={activeLocaleWords.socialNetworks.instagramURL}
          target="_blank"
          style={{ backgroundColor: '#8f8ebb' }}>
          <AiOutlineInstagram color="#ffffff" size={25} />
        </a>

        <a
          href={activeLocaleWords.socialNetworks.youtubeURL}
          target="_blank"
          style={{ backgroundColor: '#8f8ebb' }}>
          <AiFillYoutube color="#ffffff" size={25} />
        </a>

        <a
          href={activeLocaleWords.socialNetworks.linkedinURL}
          target="_blank"
          style={{ backgroundColor: '#8f8ebb' }}>
          <RiLinkedinFill color="#ffffff" size={25} />
        </a>

        <a
          href={activeLocaleWords.socialNetworks.telegramURL}
          target="_blank"
          style={{ backgroundColor: '#8f8ebb' }}>
          <TbBrandTelegram color="#ffffff" size={25} />
        </a>
      </ContainerLayout>
    </div>
  );
};

export default SocialNetworksLayout;
