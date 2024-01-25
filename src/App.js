import React, { useState, useEffect } from "react";
import "./index.css";

const nelsonQuotes = [
  {
    text: "“The joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2016/10/joy-and-spiritual-survival?lang=eng">
        President Nelson, Joy and Spiritual Survival
      </a>
    ),
  },
  {
    text: "“True repentance is not an event. It is a never-ending privilege. It is fundamental to progression and having peace of mind, comfort, and joy.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/broadcasts/article/christmas-devotional/2018/12/four-gifts-that-jesus-christ-offers-to-you?lang=eng#:~:text=True%20repentance%20is%20not%20an,a%20promise%20of%20life%20everlasting.">
        President Nelson, Four Gifts That Jesus Christ Offers To You
      </a>
    ),
  },
  {
    text: "“The only way to take sorrow out of death is to take love out of life.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/1992/04/doors-of-death?lang=eng">
        President Nelson, Doors of Death
      </a>
    ),
  },
  {
    text: "“You are never too young to learn, never too old to change.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2013/10/decisions-for-eternity?lang=eng">
        President Nelson, Decisions for Eternity
      </a>
    ),
  },
  {
    text: "“The day is gone when you can be a quiet and comfortable Christian. Your religion is not just about showing up for church on Sunday. It is about showing up as a true disciple from Sunday morning through Saturday night. ... There is no such thing as a 'part-time' disciple of the Lord Jesus Christ.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/church/news/be-a-disciple-24-7-says-elder-nelson-at-byus-commencement-exercises?lang=eng">
        President Nelson, BYU Commencement Speech, 2014
      </a>
    ),
  },
  {
    text: "“God's laws are motivated entirely by His infinite love for us and His desire for us to become all we can become.”",
    reference: (
      <a href="https://speeches.byu.edu/talks/russell-m-nelson/love-laws-god/">
        President Nelson, The Love and Laws of God
      </a>
    ),
  },
];

const oaksQuotes = [
  {
    text: "“The intensity of our desire to share the gospel is a great indicator of the extent of our personal conversation.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2001/10/sharing-the-gospel?lang=eng">
        President Oaks, Sharing the Gospel
      </a>
    ),
  },
  {
    text: "“Because it is broken and torn, each piece of bread is unique, just as the individuals who partake of it are unique. We all have different sins to repent of. We all have different needs to be strengthened through the Atonement of the Lord Jesus Christ, whom we remember in this ordinance. Strive to think of His sacrifice as specific and unique to you.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2017/10/the-living-bread-which-came-down-from-heaven?lang=eng">
        President Oaks, Introductory Message for Mission Presidents, 2017
      </a>
    ),
  },
  {
    text: "“Our priorities are most visible in how we use our time. Someone has said, “Three things never come back—the spent arrow, the spoken word, and the lost opportunity.” We cannot recycle or save the time allotted to us each day. With time, we have only one opportunity for choice, and then it is gone forever.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2001/04/focus-and-priorities?lang=eng">
        President Oaks, Focus and Priorities
      </a>
    ),
  },
  {
    text: "“The majority of the revelations which are given to the children of God come when they are acting, not when they are relaxing in their habitations waiting for the Lord to tell them the first step they should make.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/ensign/2013/08/in-his-own-time-in-his-own-way?lang=eng">
        President Oaks, In His Own Time, in His Own Way
      </a>
    ),
  },
  {
    text: "“We must never persecute those who do not share our beliefs and commitments. Regretfully, some persons facing these issues continue to feel marginalized and rejected by some members and leaders in our families, wards, and stakes. We must all strive to be kinder and more civil.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2019/10/35oaks?lang=eng">
        President Oaks, Two Great Commandments
      </a>
    ),
  },
  {
    text: "“The final judgment is not just an evaluation of a sum total of good and evil acts – what we have done. It is an acknowledgement of the final effect or our acts and thoughts – what we have become.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2000/10/the-challenge-to-become?lang=eng">
        President Oaks, The Challenge to Become
      </a>
    ),
  },
];

const eyringQuotes = [
  {
    text: "“We need strength beyond ourselves to keep the commandments in whatever circumstance life brings to us. … The combination of trials and their duration are as varied as are the children of our Heavenly Father. No two are alike. But what is being tested is the same, at all times in our lives and for every person: will we do whatsoever the Lord our God will command us?”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2004/04/in-the-strength-of-the-lord?lang=eng">
        President Eyring, In the Strength of the Lord
      </a>
    ),
  },
  {
    text: "“Angels, shepherds, and Wise Men sought and found peace from their faith in Jesus Christ. So will you. The Savior’s birth is the gift that makes it possible for the Father to give us ‘peace in this world, and eternal life in the world to come.'”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/broadcasts/article/christmas-devotional/2016/12/gifts-of-peace?lang=eng">
        President Eyring, Gifts of Peace
      </a>
    ),
  },
  {
    text: "“Because none of us is perfect and feelings are easily hurt, families can become sacred sanctuaries only as we repent early and sincerely.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2019/10/51eyring?lang=eng">
        President Eyring, Holiness and the Plan of Happiness
      </a>
    ),
  },
  {
    text: "“Every person is different and has a different contribution to make. No one is destined to fail. As you seek revelation to see gifts God sees in those you lead in the priesthood—particularly the young—you will be blessed to lift their sights to the service they can perform.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2012/10/help-them-aim-high?lang=eng">
        President Eyring, Help Them Aim High
      </a>
    ),
  },
  {
    text: "“However much faith to obey God we now have, we will need to strengthen it continually and keep it refreshed constantly. We can do that by deciding now to be more quick to obey and more determined to endure. Learning to start early and to be steady are the keys to spiritual preparation. Procrastination and inconsistency are its mortal enemies.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/general-conference/2005/10/spiritual-preparedness-start-early-and-be-steady?lang=eng">
        President Eyring, Spiritual Preparedness: Start Early and Be Steady
      </a>
    ),
  },
  {
    text: "“God offers us counsel not just for our own safety but for the safety of His other children, whom we should love. There are few comforts so sweet as to know that we have been an instrument in the hands of God in leading someone else to safety. That blessing generally requires the faith to follow counsel when it is hard to do.”",
    reference: (
      <a href="https://www.churchofjesuschrist.org/study/liahona/2008/06/safety-in-counsel?lang=eng">
        President Eyring, Safety in Counsel
      </a>
    ),
  },
];

const QuoteCard = ({ quote }) => (
  <div className="quotes">
    <div className="quote-card">
      <p className="quote">{quote.text}</p>
      <p className="quote-reference">- {quote.reference}</p>
    </div>
  </div>
);

const Tabs = ({ activeTab, onTabChange }) => (
  <div className="tabs">
    <button
      className={activeTab === "nelson" ? "active-tab" : "tab"}
      onClick={() => onTabChange("nelson")}
      // style={{ marginRight: "10px" }}
      disabled={activeTab === "nelson"}
    >
      Russell M. Nelson
    </button>
    <button
      className={activeTab === "oaks" ? "active-tab" : "tab"}
      onClick={() => onTabChange("oaks")}
      // style={{ marginRight: "10px" }}
      disabled={activeTab === "oaks"}
    >
      Dallin H. Oaks
    </button>
    <button
      className={activeTab === "eyring" ? "active-tab" : "tab"}
      onClick={() => onTabChange("eyring")}
      disabled={activeTab === "eyring"}
    >
      Henry B. Eyring
    </button>
  </div>
);

const organizeQuotes = (activeTab) => {
  switch (activeTab) {
    case "nelson":
      return nelsonQuotes;
    case "oaks":
      return oaksQuotes;
    case "eyring":
      return eyringQuotes;
    default:
      return [];
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState("nelson");
  const organizedQuotes = organizeQuotes(activeTab);

  const renderQuotes = () =>
    organizedQuotes.map((quote, index) => (
      <QuoteCard key={index} quote={quote} />
    ));

  return (
    <div className="fullApp">
      <h1>Words of the Prophets</h1>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderQuotes()}
    </div>
  );
};

export default App;
