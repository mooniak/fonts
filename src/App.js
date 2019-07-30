import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import UpArrow from './images/up-arrow.png';

import FontBlock from './FontBlock';

class App extends Component {

  constructor(props) {
    super(props);

    let showDescription = true;

    if (window.innerWidth < 1024) {
      showDescription = false;
    }

    const fonts = [
      {
        name: 'Abhaya Libre',
        fontStatus: '',
        displayTextString: 'Abhaya Libre සීගිරි පර්‍වත මස්තකාරූඪ',
        moreInfoLink: 'https://github.com/mooniak/abhaya-libre-font',
        downloadLink: 'http://mooniak.com/downloads/abhaya-libre-fonts',
        googleFontsLink : 'https://fonts.google.com/specimen/Abhaya+Libre',
        fontFamily: 'Abhaya Libre',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['extra-bold', 'bold', 'semi-bold', 'medium', 'regular']
      },
      {
        name: 'Presedential',
        fontStatus: 'ALPHA-development',
        displayTextString: 'In 1926, L. C. Smith & Bros. merged with the Corona Typewriter Company. ',
        moreInfoLink: '',
        downloadLink: 'http://mooniak.com/subscribe',
        googleFontsLink : '',
        fontFamily: 'Presedential',
        availableLanguages: ['A','அ'],
        availableWeights: ['regular']
      },
      {
        name: 'Gemunu Libre',
        fontStatus: '',
        displayTextString: 'Marjoram nectarine රතු තැඹිලි සහ ක්‍රෝධය වෛරය ',
        moreInfoLink: 'https://github.com/mooniak/gemunu-libre-font',
        downloadLink: 'http://mooniak.com/downloads/gemunu-libre-fonts',
        googleFontsLink : '',
        fontFamily: 'GemunuLibre',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['extra-bold', 'bold', 'semi-bold', 'medium', 'regular',
          'light', 'extra-light']
      },
      {
        name: 'Post No Bills',
        fontStatus: '',
        displayTextString: 'යුක්ති අයුක්ති Stop right now',
        moreInfoLink: 'https://github.com/mooniak/post-no-bills-font/',
        downloadLink: 'http://mooniak.com/downloads/stick-no-bills-fonts',
        googleFontsLink : '',
        fontFamily: 'PostNoBillsColombo',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['extra-bold', 'bold', 'semi-bold', 'medium', 'regular', 'light']
      },
      {
        name: 'Yaldevi',
        fontStatus: '',
        displayTextString: 'Endive flaxseed garbanzo ප්‍රීතිය, දක්‍ෂතා සහ කරුණාව',
        moreInfoLink: 'https://github.com/mooniak/yaldevi-fonts',
        downloadLink: 'http://mooniak.com/downloads/yaldevi-fonts',
        googleFontsLink : '',
        fontFamily: 'YaldeviColombo',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['bold', 'semi-bold', 'medium', 'regular', 'light', 'extra-light']
      },
      {
        name: 'Maname Informal',
        fontStatus: 'BETA-development',
        displayTextString: 'For loud and clear message අහසේ දඟකරන වලාපෙළ',
        moreInfoLink: 'https://github.com/mooniak/maname-fonts',
        downloadLink: 'http://mooniak.com/subscribe',
        googleFontsLink : '',
        fontFamily: 'ManameInformal',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['regular']
      },
      {
        name: 'Kaputa',
        fontStatus: 'ALPHA-development',
        displayTextString: 'අහසේ දඟකරන වලාපෙළ',
        moreInfoLink: 'https://github.com/mooniak/kaputa-font',
        downloadLink: 'http://mooniak.com/subscribe',
        googleFontsLink : '',
        fontFamily: 'Kaputa',
        availableLanguages: ['A', 'අ'],
        availableWeights: ['regular']
      },
      {
        name: 'Galle',
        fontStatus: 'ALPHA-development',
        displayTextString: 'රතු තැඹිලි කඩන අෂාන්',
        moreInfoLink: 'https://github.com/mooniak/galle-fonts',
        downloadLink: 'http://mooniak.com/subscribe',
        googleFontsLink : '',
        fontFamily: 'Galle',
        availableLanguages: ['අ'],
        availableWeights: ['regular']
      },
      {
        name: 'Vineetha',
        fontStatus: 'ALPHA-development',
        displayTextString: 'ஆனால், அளவுக்கதிகமாய், அழிவைத்தான் கொண்டு வரும். ',
        moreInfoLink: '',
        downloadLink: 'http://mooniak.com/subscribe',
        googleFontsLink : '',
        fontFamily: 'Vineetha',
        availableLanguages: ['A','அ'],
        availableWeights: ['regular']
      },
    ];

    this.state = {
      showDescription,
      fonts
    };
  }

  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth < 1024) {
        this.setState({
          showDescription: true
        });
      }
    };
  }

  render() {
    const { showDescription, fonts } = this.state;

    return (
      <div className="App">
        <div className="content">
          <div className="header-container">
            <div className="row header">
              <div className="col-xs-3 col-sm-3 col-md-2 title-container">
                <h1 className="title">mooniak</h1>

                <MediaQuery maxWidth={1024}>
                  <div className="description-expand">

                    <button
                      onClick={() => {
                        this.setState({
                          showDescription: !showDescription
                        });
                      }}
                    >
                      <img
                        src={UpArrow}
                        alt="Up Arrow"
                        style={{
                          transform: showDescription ? 'rotate(0deg)' : 'rotate(180deg)'
                        }}
                      />
                    </button>
                  </div>
                </MediaQuery>
              </div>


              <MediaQuery maxWidth={1024}>
                <div className="col-sm-6 share-container">
                  <div className="share">
                    <i className="fa fa-share-alt" aria-hidden="true" />
                  </div>
                </div>
              </MediaQuery>
              <div className="col-sm-12 col-md-10 site-description-container">
                <div className="row">
                  <div
                    id="site-description"
                    className="col-xs-12 col-sm-12 col-md-10 site-description"
                    style={{
                      maxHeight: showDescription ? 400 : 0,
                      opacity: showDescription ? 1 : 0
                    }}
                  >
                  <h1>
                  </h1>
                  </div>
                  <MediaQuery minWidth={1025}>
                    <div className="col xs-2 share-container">

                    </div>
                  </MediaQuery>
                </div>
              </div>
            </div>
          </div>
          <div className="font-blocks">
            {fonts.map((font, index) =>
              <FontBlock
                key={index}
                name={font.name}
                fontStatus={font.fontStatus}
                displayTextString={font.displayTextString}
                moreInfoLink={font.moreInfoLink}
                downloadLink={font.downloadLink}
                googleFontsLink={font.googleFontsLink}
                fontFamily={font.fontFamily}
                availableLanguages={font.availableLanguages}
                availableWeights={font.availableWeights}
                last={index === (fonts.length - 1)}
              />)}
          </div>

        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="content">
              <h2>UPDATES</h2>
              <h3> We release new and improved versions of the fonts regularly. If you would like to know when a new version is available please subscribe <i><a href="http://eepurl.com/df6CR1">font project updates</a></i>  </h3>
<h3> Support us! Contribute today and help us keep these free and open source fonts fresh and updated.
</h3>
            <p>All font projects listed here are free and open source fonts. You can contribute by testing, reporting bugs and donations.</p>
            <p>
               <a href= "https://en.liberapay.com/Mooniak">Donate on Liberapay</a>
            </p>
          </div>
            <div className="contact-details">


            </div>
            <div className="social-profiles">
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
