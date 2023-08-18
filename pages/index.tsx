import Image from 'next/image';
import Link from 'next/link';
import kimmieface from 'public/img/kimmie_face.jpg';
import sunnyhillsimg from 'public/img/sunnyhills.png';
import Tag from '../components/shared/Tag';
import Work from '../components/work/Work';
import classes from '../styles/home/Home.module.css';

export default function Home() {
  const header = 'Sunny Hills';
  const img = 'https://source.unsplash.com/random/1920x1080/?design';
  const url = '/';
  const text =
    'Sunny hills was produced by me alone during one of the database and API courses where we made requests to an API to fetch and store data in a database. I made a fictional website which include a ordering system, modal and loading animation during payment.';
  const tagText = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.JS',
    'JQuery',
    'TypeScript',
  ];
  return (
    <>
      <div className={classes.home}>
        <div className={classes.home__header}>
          <div className={classes.home__img}>
            <div className={classes.home__imglandscape}>
              <Image
                priority
                src={kimmieface}
                fill
                alt=""
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className={classes.home__bio}>
          Kimmie is a full-stack developer based in Skövde with a passion for
          building IT solutions. He has a knack for all things IT, from setup
          and configuration of his own servers or designing to developing his
          own applications is where his defining problem solving skills shine
          through. Outside of IT, Kimmie has a long lasting and underlying
          interest for eastern philosophy and mysticism. Currently Kimmie is
          finishing his studies to become a web developer and is eager to face
          the world.
        </div>
        <Tag text={tagText} />
        <div className={classes.home__social}>
          <Link href="https://github.com/zeuph">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        </div>
      </div>
      <div className={classes.home__works}>
        <Work
          header={header}
          img={sunnyhillsimg}
          url={url}
          text={text}
          tags={['Native CSS', 'API', 'SQL']}
        />
        <Work
          header={header}
          img={sunnyhillsimg}
          url={url}
          text={text}
          tags={['Native CSS', 'API', 'SQL']}
        />
        <Work
          header={header}
          img={sunnyhillsimg}
          url={url}
          text={text}
          tags={['Native CSS', 'API', 'SQL']}
        />
      </div>
      <div className={classes.home__footer}>
        <p>©Kimmie Arvidsson</p>
        <p>+46725002358</p>
      </div>
    </>
  );
}
