import React from "react";
import "../App.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="firstTab">
                <ul>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017267191315447808/Visual_Studio_Code_1.35_icon.svg.png"
                            alt="VS"
                        />{" "}
                    </li>
                    <li>File</li>
                    <li>Edit</li>
                    <li>Selection</li>
                    <li>View</li>
                    <li>Go</li>
                    <li>Run</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className="proyectName">
                <h1> TomasVallejos.js - vs_portfolio - Visual Studio Code</h1>
            </div>
            <div className="secondTab">
                <ul>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017176923547381790/logoOne.png"
                            alt="a"
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017178175580688435/logoTwo.png"
                            alt="a"
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017178198745817188/logothree.png"
                            alt="a"
                        />
                    </li>
                    {/* <li>|</li> */}
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017178216382865469/logoFour.png"
                            alt="a"
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017182197582659676/menos.png"
                            alt="a"
                            className="iconos"
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017181570337079377/cuadrado.png"
                            alt="a"
                            className="iconos"
                        />
                    </li>
                    <li>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/840217064978907170/1017182221582487634/x.png"
                            alt="a"
                            className="iconos"
                        />
                    </li>
                </ul>
            </div>

            <div className="content">
                <div className="sidebar">
                    <aside>
                        <ul>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017204319344414822/logo1.png"
                                    alt=""
                                />
                            </li>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017201897981083658/logo2.png"
                                    alt=""
                                />
                            </li>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017201903022657567/logo3.png"
                                    alt=""
                                />
                            </li>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017201918793220177/logo4.png"
                                    alt=""
                                />
                            </li>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017201934060503071/logo5.png"
                                    alt=""
                                />
                            </li>
                            <li>
                                {" "}
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017201949331951616/logo6.png"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </aside>
                </div>
                <div className="asideFolder">
                    <div className="explorer">
                        <p>EXPLORER</p>
                        <h1>. . .</h1>
                    </div>
                    <div className="proyectFolderName">
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/840217064978907170/1017610089223430154/icons8-flecha-ampliar-30-removebg-preview.png" />
                        </div>
                        <p>VS_PORTFOLIO</p>
                    </div>

                    <div className="folders">
                            <ul>
                            <li>
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017610538974457906/icons8-flecha-ampliar-30-removebg-preview.png"
                                    alt=""
                                    />{" "}
                                Folder
                            </li>
                                    </ul>
                       
                                    <ul>
                            <li>
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017610538974457906/icons8-flecha-ampliar-30-removebg-preview.png"
                                    alt=""
                                    />{" "}
                                Folder
                            </li>
                                    </ul>

                                    <ul>
                            <li>
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017610538974457906/icons8-flecha-ampliar-30-removebg-preview.png"
                                    alt=""
                                    />{" "}
                                Folder
                            </li>
                                    </ul>

                                    <ul>
                            <li>
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017610538974457906/icons8-flecha-ampliar-30-removebg-preview.png"
                                    alt=""
                                    />{" "}
                                Folder
                            </li>
                                    </ul>

                                    <ul>
                            <li>
                                <img
                                    src="https://cdn.discordapp.com/attachments/840217064978907170/1017610538974457906/icons8-flecha-ampliar-30-removebg-preview.png"
                                    alt=""
                                    />{" "}
                                Folder
                            </li>
                                    </ul>

                    </div>
                </div>

                <div className="principalContent"></div>
            </div>
        </div>
    );
};
