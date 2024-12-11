import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeventhElementClicked: false,
      isEighthElementClicked: false,
    };

    this.seventhElementRef = React.createRef();
    this.eighthElementRef = React.createRef();
  }

  swapColors = (element1, element2) => {
    const tempBgColor = element1.style.backgroundColor;
    const tempColor = element1.style.color;

    element1.style.backgroundColor = element2.style.backgroundColor;
    element1.style.color = element2.style.color;

    element2.style.backgroundColor = tempBgColor;
    element2.style.color = tempColor;
  };

  setInitialColors = (element, bgColor, textColor) => {
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
  };

  handleSeventhElementClick = () => {
    const seventhElement = this.seventhElementRef.current;
    const eighthElement = this.eighthElementRef.current;

    if (this.state.isSeventhElementClicked) {
      this.swapColors(seventhElement, eighthElement);
    } else {
      this.setInitialColors(seventhElement, "#C9E9D2", "#133E87");
      this.setState({ isSeventhElementClicked: true });
    }
  };

  handleEighthElementClick = () => {
    const seventhElement = this.seventhElementRef.current;
    const eighthElement = this.eighthElementRef.current;

    if (this.state.isEighthElementClicked) {
      this.swapColors(eighthElement, seventhElement);
    } else {
      this.setInitialColors(eighthElement, "#FFE3E3", "#121481");
      this.setState({ isEighthElementClicked: true });
    }
  };

  render() {
    return (
      <div>
        <p>Хобі:</p>
        <ul>
          <li>Карате</li>
          <li>Танці</li>
          <li
            id="seventhElement"
            ref={this.seventhElementRef}
            onClick={this.handleSeventhElementClick}
          >
            Музика
          </li>
          <li
            id="eighthElement"
            ref={this.eighthElementRef}
            onClick={this.handleEighthElementClick}
          >
            Малювання
          </li>
        </ul>

        <p>Улюблені книжки:</p>
        <ol>
          <li>"1984" - Джордж Орвелл</li>
          <li>"451 за Фаренгейтом" - Рей Бредбері</li>
          <li>"Портрет Доріана Грея" - Оскар Уайльд</li>
          <li>"Місто" - Валер'ян Підмогильний</li>
        </ol>

        <p>Чернівці́ — місто в Україні, адміністративний, політичний і релігійний центр Чернівецької області, 
       важливий культурний та науково-освітній осередок України.
       Місто розміщене на південному заході України за 40 км від румунського кордону.</p>

    <p><b>Давньоруський період (X-XIII ст.) — </b>
        Заснування міста в межах Київської Русі як фортеці на р. Прут для охорони торгових шляхів. 
        Зруйноване монголами у XIII ст.</p>
    <p><b>Молдавсько-турецький період (XIV ст. – 1774 рр.) — </b>
        У XIV ст. місто входить до складу Молдовського князівства, 
        а з 1538 р. потрапляє під контроль Османської імперії.</p>
    <p><b>Австрійський період (1775 – 1918 рр.) — </b>
        Місто стає частиною Австрійської імперії, перетворюючись на важливий економічний та культурний центр Буковини. 
        У цей час Чернівці отримують свій "європейський" вигляд, 
        будуються нові вулиці, відкривається університет.</p>

    <p><b>Румунський період (1918 – 1940 рр.) — </b>
        Чернівці стають частиною Румунії, зберігаючи свій культурний і економічний розвиток.</p>
    <p><b>Радянський період (1940 – 1991 рр.) — </b>
        Чернівці переходять до складу Радянської України, місто зростає, 
        але втрачає частину своєї поліетнічної культурної спадщини.</p>
    <p><b>Незалежність України (з 1991 р.) — </b>
        Місто поступово відновлює свій історичний колорит і архітектурну спадщину.</p>
      </div>
    );
  }
}

export default Content;
