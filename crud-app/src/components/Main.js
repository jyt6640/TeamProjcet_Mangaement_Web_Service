import React, { Component } from "react";
import './css/Main.css';
import './css/TextAnimation.css'; // 새로운 CSS 파일을 추가합니다.
import Introduce from './Introduce';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideArrow: false,
    };
    this.koTexts = [
      '안녕하세요! 프로젝트 관리 서비스입니다.',
      '빠르고 쉽게 당신의 프로젝트를 관리해보세요.',
      '당신의 팀과 효율적으로 협업하세요.',
      '모든 프로젝트를 한 곳에서 관리하세요.',
      '프로젝트 진행 상황을 실시간으로 확인하세요.',
      '효율적인 일정 관리로 더 나은 결과를!',
      '간편한 프로젝트 관리를 시작해보세요.'
    ];
    
    this.enTexts = [
      'Hello! Project Management Service.',
      'Manage your projects quickly and easily.',
      'Collaborate efficiently with your team.',
      'Manage all your projects in one place.',
      'Track project progress in real-time.',
      'Achieve better results with efficient scheduling!',
      'Start managing your projects effortlessly.'
    ];    
    this.currentIndex = 0;
    this.intervalId = null;
    this.timeoutId = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadTextAnimations();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.intervalId); // 애니메이션 인터벌 정리
    clearTimeout(this.timeoutId); // 타임아웃 정리
  }

  handleScroll = () => {
    const introductionElement = document.getElementById("introduction");
    if (window.scrollY >= introductionElement.offsetTop - window.innerHeight / 2) {
      this.setState({ hideArrow: true });
    } else {
      this.setState({ hideArrow: false });
    }
  };

  handleArrowClick = (event) => {
    event.preventDefault();
    const introductionElement = document.getElementById("introduction");
    const elementPosition = introductionElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - (window.innerHeight / 2) + (introductionElement.clientHeight / 2);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  loadTextAnimations = () => {
    this.animateText();
    // 무한 반복을 위한 타이머 설정
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.koTexts.length;
      this.animateText();
    }, 5000); // 각 텍스트를 5초 동안 보여줍니다.
  };

  animateText = () => {
    const ko = this.koTexts[this.currentIndex];
    const en = this.enTexts[this.currentIndex];
    const appKo = document.getElementById('animated-text-ko');
    const appEn = document.getElementById('animated-text-en');
    appKo.innerHTML = ''; // 기존 텍스트 초기화
    appEn.innerHTML = ''; // 기존 텍스트 초기화

    const textArrayKo = ko.split('');
    const textArrayEn = en.split('');
    const tagName = 'span';
    let timer = 50;
    let index = 0;

    const createNode = (tagname) => {
      const tag = document.createElement(tagname);
      return tag;
    };

    const insertLetters = (textArray, app) => {
      textArray.forEach(letter => {
        const textNode = createNode(tagName);
        if (letter === ' ') {
          textNode.textContent = '\xa0';
        } else {
          textNode.textContent = letter;
        }
        app.appendChild(textNode);
      });
    };

    const addClass = () => {
      const lettersKo = Array.from(appKo.querySelectorAll(tagName));
      const lettersEn = Array.from(appEn.querySelectorAll(tagName));
      if (lettersKo[index]) {
        lettersKo[index].classList.add('text-animated');
      }
      if (lettersEn[index]) {
        lettersEn[index].classList.add('text-animated');
      }
      index++;
      if (lettersKo.length === index && lettersEn.length === index) {
        clearInterval(interval);
      }
    };

    insertLetters(textArrayKo, appKo);
    insertLetters(textArrayEn, appEn);
    const interval = setInterval(addClass, timer);
  };

  render() {
    const { hideArrow } = this.state;
    return (
      <div className="mainpage">
        <div>
          <h1 id="animated-text-ko"></h1>
          <h2 id="animated-text-en"></h2>
        </div>
        <div className="mainPageSub">
          <button className="btn-try">사용해보기</button>
        </div>
        <a
          href="#"
          className={`arrow-container ${hideArrow ? 'hide' : ''}`}
          onClick={this.handleArrowClick}>
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </a>
        <div id="introduction" className="introduction-container">
          <Introduce />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
