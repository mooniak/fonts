import React from 'react';


const FontBlock = ({ name, displayTextString, fontStatus, moreInfoLink, downloadLink, googleFontsLink, fontFamily, availableLanguages,
  availableWeights, last }) => (
    <div className={`font-block row ${last ? 'last' : ''}`}>
      <div className="col-sm-12 col-md-8 flex-items-center">
        <p
          className="font-family-name"
        >{name}</p>
      </div>
      <div className="col-sm-12 col-md-8 flex-items-center">
        <h2
          className="font-title"
          style={{ fontFamily }}
        >{displayTextString}</h2>
      </div>
      <div className="col-sm-12 col-md-4 font-meta">
        <div
          className="font-styles"
          style={{ fontFamily }}
        >
          <div className="font-languages">
            {availableLanguages.map((language, index) =>
             `${language}${(index < (availableLanguages.length - 1)) ? ' / ' : ''}`)}
          </div>
          <div className="font-types">
            {availableWeights.map((weight, index) => <span key={index} className={weight}>a</span>)}
          </div>
        </div>
        <div className="font-links">
        <div className="font-status">
          {fontStatus}
        </div>
          {moreInfoLink &&
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={moreInfoLink}
              className="hover2"
            >more</a>
        }
          {downloadLink &&
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={downloadLink}
            className="hover2"
          >download</a>
        }
          {googleFontsLink &&
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={googleFontsLink}
            className="hover2"
          >on Google Fonts</a>
        }
        </div>
      </div>
    </div>
);

export default FontBlock;
