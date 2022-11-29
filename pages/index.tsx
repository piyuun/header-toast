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


const TextInputContianer = styled.div`
  scroll-padding-top: 50px;
`
export default function Home() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [exampleDataList, setExampleDataList] = useState<string[]>([]);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
    if (val.length > 5) {
      console.log('is it work?');
      handleWordLimitToast();
    }
  };

  useEffect(() => {
    const ex1 = example01();
    const ex2 = example02();
    const ex3 = example03();
    const ex4 = example04();
    const list = [ex1, ex2, ex3, ex4];
    setExampleDataList(list);

    const text = document.querySelector("#text");
    // resize event listener to detect change in screen height
    if (text) {
      window.addEventListener("resize", (e) => {
        text.innerHTML = "Virtual keyboard detected!!!";
      });
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderFixed/>
      {/* <HeaderSticky /> */}
      <TextInputContianer>
        <TextInput textAreaRef={textAreaRef} handleChange={handleChange} />
        <h1 id="text">Change orientation/screen height</h1>
      </TextInputContianer>
      {/* ===== 3. ToastContainer for rendering word limit toast ===== */}
      <ToastContainer
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
