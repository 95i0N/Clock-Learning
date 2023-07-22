import React from 'react'
import '../custom/Banner.css'
import {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowRightCircle } from 'react-bootstrap-icons' 
import HeaderImg from '../assets/icon2.png'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['じかんってなに？', 'とけいってなに？', 'とけいであそぼ！'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period  = 2000;


    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};

    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <h3><span className='tagline'>ようこそ</span></h3>
                    <p>「とけい」をしらないキミのために</p>
                    <h1><span className='wrap'>{text}</span></h1>
                    <Link to='/lecture' style={{ textDecoration: 'none' }}>
                        <button>さあ、はじめよう！<ArrowRightCircle size={25} /></button>
                    </Link>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={HeaderImg} alt='Header image' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner