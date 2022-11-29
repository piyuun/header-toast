import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { HeaderFixed } from '../components/HeaderFixed'
import { TextInput } from '../components/TextInput'
import { ToastContainer } from 'react-toastify';
import useAutosizeTextArea from '../functions/useAutosizeTextArea'
import styles from '../styles/Home.module.css'
import {
  example01,
  example02,
  example03,
  example04,
} from '../functions/examples';
import { handleWordLimitToast } from '../components/WordLimitToast'
import styled from 'styled-components';
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import useWindowSize from '../functions/useWindowSize';
import useVisualViewPort from '../functions/useVisualViewPort';
import useAvailSize from '../functions/useScreenSize';
import useScreenSize from '../functions/useScreenSize';

const TestDiv = styled.div`
  float: left;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width : 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orange;
`

const TextInputContianer = styled.div`
`
export default function Home() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [exampleDataList, setExampleDataList] = useState<string[]>([]);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [windowHeight, setWindowHeight] = useState(0); 
  const [screenHeight, setScreenHeight] = useState(0);
  const [viewPortHeight, setViewPortHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [enter, setEnter] = useState(false);
  const size = useWindowSize(); // for responsive web
  const viewPort = useVisualViewPort();
  const screenSize = useScreenSize();

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
    if (val.length > 5) {
      handleWordLimitToast();
    }
  };

  useEffect(() => {
    const ex1 = example01();
    const ex2 = example02();
    const ex3 = example03();
    const ex4 = example04();
    const list = [ex1, ex2, ex3, ex4];
    if (list[0] === 'mobile') {
      setIsMobile(true);
    }
    setExampleDataList(list);

    const el = document.querySelector('#header')
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log('ENTER')
        setEnter(true);
        return
      }
      console.log('LEAVE')
      setEnter(false);
    }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    })
    if (el) {
      observer.observe(el);  
    }
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [size])

  useEffect(() => {
    setScreenHeight(window.screen.height);
  }, [screenSize])
  
  useEffect(() => {
    if (window.visualViewport) {      
      setViewPortHeight(window.visualViewport.height);
    }
  }, [viewPort]);
  
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderFixed id='header'>This is Fixed Header</HeaderFixed>
      {/* <HeaderSticky /> */}
      <TextInputContianer>
        <TestDiv>WINDOW INNER HEIGHT: {windowHeight}</TestDiv>
        <TestDiv>WINDOW SCREEN HEIGHT: {screenHeight}</TestDiv>
        <TestDiv>VIEWPORT HEIGHT: {Math.floor(viewPortHeight)}</TestDiv>
        {isKeyboardOpen
          ? <TestDiv>KEYBOARD VISIBLE</TestDiv>
          : <TestDiv>KEYBOARD NONVISIBLE</TestDiv>
        }
        <TextInput textAreaRef={textAreaRef} handleChange={handleChange} />
        <TestDiv>HEADER: {enter ? 'ENTER' : 'LEAVE'}</TestDiv>
      </TextInputContianer>
      {/* ===== 3. ToastContainer for rendering word limit toast ===== */}
      <ToastContainer
        className={isMobile? 'toast-position': ''}
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        closeButton={false}
        toastStyle={{ backgroundColor: '#f8dbd5' }}
        containerId="words"
      />
      <h1 className={styles.title}>Device Check</h1>

        <div className={styles.description}>
          <table className={styles.table}>
            <tbody>
              {exampleDataList.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <strong>EX{id + 1}</strong>
                    </td>
                    <td>You are using: </td>
                    <td>
                      <code className={styles.code}>{item}</code>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </>
  )
}
