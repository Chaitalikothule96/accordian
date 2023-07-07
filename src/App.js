import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const toggleAccordion1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleAccordion2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleAccordion3 = () => {
    setExpanded3(!expanded3);
  };

  const toggleAccordion4 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <div className="container">
      <div className="accordion-menu">
        <header>Questions</header>
        <div className="menu">
          <div className="menu1 question">
            <div>Do I Have To Allow The Use Of Cookies?</div>
            <div>
              <button className="accordion-button" onClick={toggleAccordion1}>
                {expanded1 ? '-' : '+'}
              </button>
            </div>
          </div>
          {expanded1 && (
            <div className="accordion-answer">
              Unicorn vinyl poutine brooklyn, next level direct trade iceland.
              Shaman copper mug church-key coloring book, whatever poutine
              normcore fixie cred kickstarter post-ironic street art.
            </div>
          )}
        </div>
        <div className="menu">
          <div className="menu1 question">
            <div>What Is BankID?</div>
            <div>
              <button className="accordion-button" onClick={toggleAccordion2}>
                {expanded2 ? '-' : '+'}
              </button>
            </div>
          </div>
          {expanded2 && (
            <div className="accordion-answer">
              Enamel pin fam sustainable woke whatever venmo. Authentic
              asymmetrical put a bird on it, lumbersexual activated charcoal
              kinfolk banjo cred pickled sartorial.
            </div>
          )}
        </div>
        <div className="menu">
          <div className="menu1 question">
            <div>
              Whose Birth Number Can I Use?
            </div>
            <div>
              <button className="accordion-button" onClick={toggleAccordion3}>
                {expanded3 ? '-' : '+'}
              </button>
            </div>
          </div>
          {expanded3 && (
            <div className="accordion-answer">
              Enamel pin fam sustainable woke whatever venmo. Authentic
              asymmetrical put a bird on it, lumbersexual activated charcoal
              kinfolk banjo cred pickled sartorial.
            </div>
          )}
        </div>
        <div className="menu">
          <div className="menu1 question">
            <div>
              When Do I Recieve A Password Ordered By Letter?
            </div>
            <div>
              <button className="accordion-button" onClick={toggleAccordion4}>
                {expanded4 ? '-' : '+'}
              </button>
            </div>
          </div>
          {expanded4 && (
            <div className="accordion-answer">
              Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
