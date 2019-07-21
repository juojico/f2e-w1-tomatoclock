import React from 'react';
import { ThemeProvider } from 'styled-components';
import MainContainer from './containers/MainContainer';

const DarkTheme = {
  name: 'DarkTheme',
  backgroundColor: '#282c34',
  fontColor: 'white',
  borderColor: 'rgba(255,255,255,0.5)',
  primaryColor: '#f95550',
  primaryColorLight: '#ec6763',
  primaryColorDark: '#dc4641',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad',
  startSay: '嗨!我是番茄',
  says: [
    '加油！離目標不遠了',
    '你喜歡蕃茄醬嗎？',
    '你覺得我的紅色好看嗎？',
    '你喜歡番茄雞蛋麵嗎？',
    '番茄牛肉鍋食譜：牛肋條 500g, 牛番茄 3大顆, 醬油 50cc, 豆瓣醬 20ml, 月桂葉 數片, 八角 2.3顆, 蔥段 2根, 糖 10g',
    '要吃番茄義大利麵嗎？',
    '瑪格麗特披薩好吃哦',
    '晚餐吃義式蕃茄燉牛肉吧～',
    '我喜歡漢堡裡加番茄',
    '鮪魚蛋番茄盅：中小型牛番茄 6個, 罐頭鮪魚肉 50g, 蛋 1個, 鹽/白胡椒粉 適量'
  ]
};
const LightTheme = {
  name: 'LightTheme',
  backgroundColor: '#f3f1ee',
  fontColor: '#1d1f23',
  borderColor: 'rgba(200,129,0,0.1)',
  primaryColor: '#FFA20F',
  primaryColorLight: '#fbb941',
  primaryColorDark: '#fb910d',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad',
  startSay: '你好~我是橘子',
  says: [
    '加油！努力工作!',
    '你喜歡吃橘子嗎？',
    '我是橘子還是椪柑?',
    '你喜歡橘子汁嗎？',
    '只換個顏色就當另一種水果會很混嗎?',
    '不要一直看我好嗎？',
    '其實我是柳丁',
    '橘子的白絲很營養哦',
    '吃過橘子磅蛋糕嗎?',
    '橙汁蜜蘿蔔：胡蘿蔔 2 條, 橘子 1 顆, 奶油/橄欖油 1 大匙, 鹽巴/磨碎胡椒 少許'
  ]
};
const GrassBag = {
  name: 'GrassBag',
  backgroundColor: '#33261c',
  fontColor: '#ffe76c',
  borderColor: '#0e132b',
  primaryColor: '#eae5db',
  primaryColorLight: '#fbb941',
  primaryColorDark: '#dad2c3',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad',
  startSay: '我是草包',
  says: [
    '高雄發大財!',
    '經濟0分!政治100分!',
    '發財!發財!發大財!',
    '貨出的去!人進的來!',
    '塞子還是棋子?',
    '喔~~氣氣氣氣氣氣',
    '放眼世界 征服宇宙',
    '棋子，塞子，塞子必須有水，要泡澡，必須要有浴缸，水很重要，量大，浴缸要很大',
    'ZZZ',
    '都是中央卡我',
    '都是前朝政府沒做好',
    '高雄又老又窮，各行各業蕭條的不得了',
    '擁有了一碗滷肉飯與一瓶礦泉水的信心',
    '禿子跟著月亮走',
    '為中華民國不惜粉身碎骨'
  ]
};

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      theme: DarkTheme
    };
  }
  onChangeTheme = item => {
    switch (item) {
      case 'DarkTheme':
        return this.setState({ theme: DarkTheme });
      case 'LightTheme':
        return this.setState({ theme: LightTheme });
      case 'GrassBag':
        return this.setState({ theme: GrassBag });
      default:
        return this.setState({ theme: DarkTheme });
    }
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <MainContainer onChangeTheme={this.onChangeTheme} theme={this.state.theme}/>
      </ThemeProvider>
    );
  }
}

export default App;
