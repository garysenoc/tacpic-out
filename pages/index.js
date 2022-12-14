import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('login'));
    if (window.localStorage.length === 0) {
      router.push('/signin');
    }
    console.log(localStorage.getItem('login'));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <iframe
        src='https://tacpic-garysenoc.vercel.app/'
        // style={{ width: '1vw', height: '1vh' }}
        frameborder='0'
        style={{
          overflow: 'hidden',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
        }}
        height={'100%'}
        width={'100%'}
        // width={'100%'}
        // height={'100%'}
      ></iframe>
    </div>
  );
}

