import React from 'react';
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import "./Tolkit.css";

const names = [
    "Gaby Thorn",
    "Alex Pratt",
    "Jazz Kim",
    "Harley Flynn",
    "Forest Hart",
    "Ellis Holt",
];

const jobs = [
    "IT Director",
    "Frontend developer",
    "Backend engineer",
    "QA Analyst",
    "Database architect",
    "Network administrator",
];

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

export default function Tolkit() {
    const [activeContent, setActiveContent] = React.useState("content1");

    const handleMouseOver = (id) => {
        setActiveContent(id);
    };
    return (
        <div className="position-absolute bottom-0 end-0">
            <div className="my-container">
                <div className="icon">
                    {Array.from({ length: 6 }, (_, index) => {
                        const style = { "--i": index + 1 };
                        const id = `content${index + 1}`;
                        const active = activeContent === id ? "active" : "";

                        return (
                            <div
                                key={index}
                                className={`imgBox ${active}`}
                                style={style}
                                data-id={id}
                                onMouseOver={() => handleMouseOver(id)}
                            >
                                <img src={icons[index]} alt="portrait" />
                            </div>
                        );
                    })}
                </div>

                <div className="content">
                    {Array.from({ length: 6 }, (_, index) => {
                        const id = `content${index + 1}`;
                        const active = activeContent === id ? "active" : "";

                        return (
                            <div key={index} className={`contentBox ${active}`} id={id}>
                                <div className="card">
                                    <div className="textBox">
                                        <h2>
                                            {names[index]} <br />
                                            <span>{jobs[index]}</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

