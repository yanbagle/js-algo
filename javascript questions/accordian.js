import "./styles.css";
import { useState } from "react";

export default function App() {
  const panels = [
    {
      title: "HTML",
      info: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      info: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      info: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const [expandedSet, setExpandedSet] = useState({});

  function Accordion({ title, info }) {
    return (
      <div className="accordian-container">
        <div
          className="accordian-title"
          onClick={() => {
            setExpandedSet({ ...expandedSet, [title]: !expandedSet[title] });
          }}
        >
          {title}{" "}
          <span
            aria-hidden={true}
            className={`accordion-icon ${
              expandedSet[title] ? "accordion-icon--rotated" : ""
            }`}
          />
        </div>
        <div hidden={!expandedSet[title]}>{info}</div>
      </div>
    );
  }

  return (
    <div>
      {panels.map((panel, index) => (
        <Accordion key={index} title={panel.title} info={panel.info} />
      ))}
    </div>
  );
}
