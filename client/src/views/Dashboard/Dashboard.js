/* eslint-disable react/react-in-jsx-scope */
// 9import { Button } from "@mui/material"
import React, { useContext } from 'react';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import { TransactionContext } from '../../contexts/TransactionContext';

const Dashboard = () => {
  const currentEpoch = useCurrentEpoch();
  const { withdraw } = useContext(TransactionContext);
  const { deposit } = useContext(TransactionContext);
  const { claimall } = useContext(TransactionContext);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#0c1125",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "100%",
        height: "1360px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "14px", 
        color: "#fff",
        fontFamily: "Nunito"
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1669.35px",
          height: "1630.36px"
        }}
        alt=""
        src="./assets/
        topology1.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "182.6px",
          left: "195.92px",
          width: "970.92px",
          height: "987.91px"
        }}
        alt=""
        src="./assets/group-3055.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "-178px",
          left: "684px",
          width: "878px",
          height: "857.49px",
          display: "none",
          opacity: "0.75"
        }}
        alt=""
        src="./assets/topology11.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "1832.49px",
          left: "527px",
          width: "878px",
          height: "857.49px",
          display: "none",
          opacity: "0.75"
        }}
        alt=""
        src="./assets/topology12.svg"
      />
      <img
        style={{
          position: "absolute",
          height: "201.9%",
          width: "145.26%",
          top: "-74.34%",
          right: "1.04%",
          bottom: "-27.55%",
          left: "-46.3%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          display: "none",
          opacity: "0.4"
        }}
        alt=""
        src="./assets/group-241.svg"
      />
      <img
        style={{
          position: "absolute",
          height: "201.9%",
          width: "145.26%",
          top: "-74.34%",
          right: "1.04%",
          bottom: "-27.55%",
          left: "-46.3%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          display: "none",
          opacity: "0.4"
        }}
        alt=""
        src="./assets/group-375.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "463px",
          left: "196px",
          borderRadius: "10px",
          width: "646px",
          height: "202px"
        }}
        alt=""
        src="./assets/rectangle-22665.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "531.75px",
          left: "268px",
          width: "542px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-82.svg"
      />
      <b
        style={{
          position: "absolute",
          top: "475px",
          left: "268.29px",
          fontSize: "22px"
        }}
      >
        Boardroom
      </b>
      <img
        style={{
          position: "absolute",
          top: "477px",
          left: "212px",
          width: "48px",
          height: "48px",
          objectFit: "cover"
        }}
        alt=""
        src="./assets/bshares@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "582.43px",
          left: "348px",
          width: "78px",
          height: "60px"
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "20.57px",
            left: "0px",
            width: "18px",
            height: "18px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bshares1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "4px",
            whiteSpace: "pre-wrap"
          }}
        >
          <p style={{ margin: "0" }}>{`Your Stake: `}</p>
          <p style={{ margin: "0" }}>
            <span>{`    `}</span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Nunito"
              }}
            >
              6.0000
            </span>
          </p>
          <p style={{ margin: "0" }}>≈ $1171.62</p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "582.43px",
          left: "457px",
          width: "104px",
          height: "60px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "4px",
            whiteSpace: "pre-wrap"
          }}
        >
          <p style={{ margin: "0" }}>{`Earned: `}</p>
          <p style={{ margin: "0" }}>
            <span>{`    `}</span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Nunito"
              }}
            >{`1660.4413 `}</span>
          </p>
          <p style={{ margin: "0" }}>≈ $298.88</p>
        </div>
        <img
          style={{
            position: "absolute",
            top: "22.57px",
            left: "0px",
            width: "18px",
            height: "18px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bomb@2x.png"
        />
      </div>
      <div style={{ position: "absolute", top: "507px", left: "268.29px" }}>
        Stake BSHARE and earn BOMB every epoch
      </div>
      
      {/* <button  type="button" style={{ position: "relative"  }}>Withdraw</button> */}
      <div
        style={{
          position: "absolute",
          top: "579.43px",
          left: "606px",
          borderRadius: "50px",
          border: "1px solid #fff",
          boxSizing: "border-box",
          width: "107px",
          height: "28px",
          display: "flex",
          flexDirection: "row",
          padding: "4px 10px 4px 15px",
          alignItems: "center",
          justifyContent: "center",
          gap: "21px",
          fontSize: "15px"
        }}
      >
        <button  type="button" style={{ position: "relative"  }} onClick={deposit}>Deposit</button>
        
        <img
          style={{
            position: "relative",
            width: "21px",
            height: "21px",
            flexShrink: "0",
            overflow: "hidden"
          }}
          alt=""
          src="./assets/icon--arrowdowncircle.svg"
        />
      </div>
      <div style={{ position: "absolute", top: "582.43px", left: "228px" }}>
        <p style={{ margin: "0" }}>Daily Returns:</p>
        <p style={{ margin: "0", fontSize: "22px" }}>
          <span style={{ fontWeight: "600" }}>
            <span>2%</span>
            <span style={{ fontSize: "16px" }}></span>
          </span>
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "191px",
          width: "1048px",
          height: "289px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1048px",
            height: "289px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "5px",
              backgroundColor: "rgba(32, 37, 67, 0.5)",
              backdropFilter: "blur(10px)",
              width: "1048px",
              height: "289px"
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "222px",
              left: "33px",
              width: "25px",
              height: "25px"
            }}
            alt=""
            src="./assets/ellipse-287.svg"
          />
          <div
            style={{
              position: "absolute",
              top: "224px",
              left: "35px",
              width: "20px",
              height: "20px"
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "20px",
                height: "20px",
                objectFit: "cover"
              }}
              alt=""
              src="./assets/bbond@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "68.59px",
          left: "1086px",
          textAlign: "center",
          fontSize: "18px"
        }}
      >
        <p style={{ margin: "0", lineHeight: "25px", fontWeight: "600" }}>
          Current Epoch
        </p>
        <p style={{ margin: "0", fontSize: "34px" }}>
          <b style={{ lineHeight: "37px" }}>{Number(currentEpoch)}</b>
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "141.59px",
          left: "1075px",
          textAlign: "center",
          fontSize: "34px"
        }}
      >
        <p style={{ margin: "0" }}>
          <b style={{ lineHeight: "40px" }}>03:38:36</b>
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "18px",
            lineHeight: "25px",
            fontWeight: "600"
          }}
        >
          Next Epoch in
        </p>
      </div>
      <img
        style={{
          position: "absolute",
          top: "136.34px",
          left: "1049px",
          width: "185.01px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-75.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "54.34px",
          left: "237px",
          width: "970px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-81.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "164.34px",
          left: "248px",
          width: "352px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-85.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "221.34px",
          left: "248px",
          width: "352px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-85.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "281.75px",
          left: "253px",
          width: "299px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-87.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "107.34px",
          left: "301px",
          width: "299px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-88.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "209.34px",
          left: "1078px",
          width: "128px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-76.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "119.59px",
          left: "257px",
          fontSize: "12px",
          textAlign: "center"
        }}
      >
        $BOMB
      </div>
      <div
        style={{
          position: "absolute",
          top: "175.59px",
          left: "226px",
          width: "25px",
          height: "25px"
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "25px",
            height: "25px"
          }}
          alt=""
          src="./assets/ellipse-2871.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "1px",
            left: "2px",
            width: "20px",
            height: "20px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bshares2@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "179.59px",
          left: "257px",
          fontSize: "12px",
          textAlign: "center"
        }}
      >
        $BSHARE
      </div>
      <div
        style={{
          position: "absolute",
          top: "174.59px",
          left: "326px",
          width: "267px",
          height: "41px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: "0px",
            fontWeight: "600"
          }}
        >
          11.43K
        </div>
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: "83px",
            fontWeight: "600"
          }}
        >
          8.49m
        </div>
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: "137px",
            fontWeight: "600"
          }}
        >
          <p style={{ margin: "0" }}>$300</p>
          <p style={{ margin: "0" }}>13000 BTCB</p>
        </div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "232px",
            width: "35px",
            height: "31.41px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/wmetamask@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "237.59px",
          left: "258px",
          fontSize: "12px",
          textAlign: "center"
        }}
      >
        $BBOND
      </div>
      <div
        style={{
          position: "absolute",
          top: "231.59px",
          left: "326px",
          width: "267px",
          height: "42px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "0px",
            fontWeight: "600"
          }}
        >
          20.00K
        </div>
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "87px",
            fontWeight: "600"
          }}
        >
          175k
        </div>
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "144px",
            fontWeight: "600"
          }}
        >
          <p style={{ margin: "0" }}>$0.28</p>
          <p style={{ margin: "0" }}>1.15 BTCB</p>
        </div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "232px",
            width: "35px",
            height: "31.41px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/wmetamask@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "262.59px",
          left: "1070px",
          textAlign: "center"
        }}
      >
        <span>
          <span style={{ fontWeight: "300" }}>Last Epoch TWAP:</span>
          <span style={{ fontFamily: "Nunito" }}>{` `}</span>
        </span>
        <span style={{ fontWeight: "600", color: "#00e8a2" }}>1.22</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "218.59px",
          left: "1092px",
          textAlign: "center"
        }}
      >
        <span>
          <span style={{ fontWeight: "300" }}>Live TWAP:</span>
          <span style={{ fontFamily: "Nunito" }}>{` `}</span>
        </span>
        <span style={{ fontWeight: "600", color: "#00e8a2" }}>1.17</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "240.59px",
          left: "1091px",
          textAlign: "center"
        }}
      >
        <span>
          <span style={{ fontWeight: "300" }}>TVL:</span>
          <span style={{ fontFamily: "Nunito" }}>{` `}</span>
        </span>
        <b style={{ color: "#00e8a2" }}>$5,002,412</b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "117.59px",
          left: "329px",
          width: "264px",
          height: "38px",
          textAlign: "center"
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "229px",
            width: "35px",
            height: "31.41px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/wmetamask@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "141px",
            fontWeight: "600"
          }}
        >
          <p style={{ margin: "0" }}>{`$0.24 `}</p>
          <p style={{ margin: "0" }}>1.05 BTCB</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            fontWeight: "600"
          }}
        >
          8.66M
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "81px",
            fontWeight: "600"
          }}
        >
          {" "}
          60.9k
        </div>
      </div>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "20px",
          left: "623.98px",
          fontSize: "22px",
          fontWeight: "400",
          fontFamily: "inherit"
        }}
      >
        Bomb Finance Summary
      </h1>
      <div
        style={{
          position: "absolute",
          top: "482px",
          left: "393px",
          borderRadius: "3px",
          backgroundColor: "rgba(0, 232, 162, 0.25)",
          filter: "blur(5px)",
          border: "1px solid #00e8a2",
          boxSizing: "border-box",
          width: "101px",
          height: "16px"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "482px",
          left: "393px",
          borderRadius: "3px",
          backgroundColor: "rgba(0, 232, 162, 0.5)",
          width: "101px",
          height: "16px",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "12px"
        }}
      >
        <div style={{ position: "relative", fontWeight: "600" }}>
          Recommended
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "538px",
          left: "669px",
          width: "142px",
          height: "22px"
        }}
      >
        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          <span>{`Total Staked:      `}</span>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>7232</span>
        </div>
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "86px",
            width: "16px",
            height: "16px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bshares3@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "329.43px",
          left: "642px",
          width: "199.03px",
          height: "22px",
          fontSize: "16px",
          color: "#9ee6ff"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "199.03px",
            height: "22px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}
          >
            <div
              style={{
                position: "relative",
                textDecoration: "underline",
                fontWeight: "600"
              }}
            >
              Read Investment Strategy
            </div>
            <img
              style={{
                position: "relative",
                width: "6.03px",
                height: "10.62px",
                flexShrink: "0"
              }}
              alt=""
              src="./assets/vector.svg"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "685px",
          left: "196px",
          width: "1046px",
          height: "377.25px",
          fontSize: "15px"
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "10px",
            width: "1046px",
            height: "377.25px"
          }}
          alt=""
          src="./assets/rectangle-22664.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "121.75px",
            left: "66px",
            width: "950px",
            height: "0.5px"
          }}
          alt=""
          src="./assets/line-73.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "221.75px",
            left: "1px",
            width: "1045px",
            height: "0.5px"
          }}
          alt=""
          src="./assets/line-78.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "270.75px",
            left: "66px",
            width: "950px",
            height: "0.5px"
          }}
          alt=""
          src="./assets/line-73.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "47px",
            left: "15px",
            fontSize: "14px"
          }}
        >
          Stake your LP tokens in our farms to start earning $BSHARE
        </div>
        <b
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            fontSize: "22px"
          }}
        >
          Bomb Farms
        </b>
        <b
          style={{
            position: "absolute",
            top: "92.11px",
            left: "64px",
            fontSize: "22px"
          }}
        >{`BOMB-BTCB `}</b>
        <img
          style={{
            position: "absolute",
            top: "92px",
            left: "24px",
            width: "33px",
            height: "33px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bombbitcoinlp@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "137px",
            left: "307px",
            width: "76px",
            height: "64px",
            fontSize: "16px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "25px",
              left: "0px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bshares4@2x.png"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              whiteSpace: "pre-wrap"
            }}
          >
            <p style={{ margin: "0", fontSize: "14px" }}>{`Earned: `}</p>
            <p style={{ margin: "0" }}>
              <span
                style={{ fontSize: "14px", fontFamily: "Nunito" }}
              >{`    `}</span>
              <span style={{ fontWeight: "600" }}>{`6.4413 `}</span>
            </p>
            <p style={{ margin: "0", fontWeight: "600" }}>≈ $298.88</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "137px",
            left: "172px",
            width: "85px",
            height: "64px",
            fontSize: "16px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "24px",
              left: "1px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src= "bombbitcoinlp1@2x.png"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              whiteSpace: "pre-wrap"
            }}
          >
            <p style={{ margin: "0", fontSize: "14px" }}>Your Stake</p>
            <p style={{ margin: "0" }}>
              <span
                style={{ fontSize: "14px", fontFamily: "Nunito" }}
              >{`    `}</span>
              <span style={{ fontWeight: "600" }}>{`124.21 `}</span>
            </p>
            <p style={{ margin: "0", fontWeight: "600" }}>≈ $1171.62</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "137px",
            left: "30px",
            fontSize: "14px"
          }}
        >
          <p style={{ margin: "0" }}>{`Daily Returns: `}</p>
          <p style={{ margin: "0", fontSize: "22px" }}>
            <span style={{ fontWeight: "600" }}>
              <span>2%</span>
              <span style={{ fontSize: "16px" }}></span>
            </span>
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "97px",
            left: "900px",
            fontSize: "14px"
          }}
        >
          <span>{`TVL: `}</span>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            $1,008,430
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "178px",
            left: "872px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "148px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 0px 4px 8px",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13px"
          }}
        >
          
          <button  type="button" style={{ position: "relative",fontWeight: "600" }}>Claim Rewards</button>
          <img
            style={{
              position: "relative",
              width: "18px",
              height: "18px",
              flexShrink: "0",
              display: "none"
            }}
            alt=""
            src="./assets/group-535.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "29.43px",
            left: "872px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "148px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 26px 4px 8px",
            alignItems: "center",
            justifyContent: "center",
            gap: "13px"
          }}
        >
          <button  type="button" style={{ position: "relative",fontWeight: "600" }} onClick={claimall}>Claim All</button>
          <img
            style={{
              position: "relative",
              width: "18px",
              height: "18px",
              flexShrink: "0",
              display: "none"
            }}
            alt=""
            src="./assets/group-5351.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "178px",
            left: "750px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "106px",
            height: "28px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 10px 4px 15px",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}
        >
          <button type="button" style={{ position: "relative" }} onClick={withdraw}>Withdraw</button>

          <img
            style={{
              position: "relative",
              width: "21px",
              height: "21px",
              flexShrink: "0",
              overflow: "hidden"
            }}
            alt=""
            src="./assets/icon--arrowdowncircle1.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "178px",
            left: "627px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "107px",
            height: "28px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 10px 4px 15px",
            alignItems: "center",
            justifyContent: "center",
            gap: "21px"
          }}
        >
          <button  type="button" style={{ position: "relative"  }} onClick={deposit}>Deposit</button>
          <img
            style={{
              position: "relative",
              width: "21px",
              height: "21px",
              flexShrink: "0",
              overflow: "hidden"
            }}
            alt=""
            src="./assets/icon--arrowdowncircle2.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "286px",
            left: "307px",
            width: "76px",
            height: "64px",
            fontSize: "16px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "25px",
              left: "0px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bshares4@2x.png"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              whiteSpace: "pre-wrap"
            }}
          >
            <p style={{ margin: "0", fontSize: "14px" }}>{`Earned: `}</p>
            <p style={{ margin: "0" }}>
              <span
                style={{ fontSize: "14px", fontFamily: "Nunito" }}
              >{`    `}</span>
              <span style={{ fontWeight: "600" }}>{`6.4413 `}</span>
            </p>
            <p style={{ margin: "0", fontWeight: "600" }}>≈ $298.88</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "286px",
            left: "172px",
            width: "85px",
            height: "64px",
            fontSize: "16px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bsharebnblp@2x.png"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              whiteSpace: "pre-wrap"
            }}
          >
            <p style={{ margin: "0", fontSize: "14px" }}>Your Stake</p>
            <p style={{ margin: "0" }}>
              <span
                style={{ fontSize: "14px", fontFamily: "Nunito" }}
              >{`    `}</span>
              <span style={{ fontWeight: "600" }}>{`124.21 `}</span>
            </p>
            <p style={{ margin: "0", fontWeight: "600" }}>≈ $1171.62</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "286px",
            left: "30px",
            fontSize: "14px"
          }}
        >
          <p style={{ margin: "0" }}>{`Daily Returns: `}</p>
          <p style={{ margin: "0", fontSize: "22px", fontWeight: "600" }}>2%</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "246px",
            left: "900px",
            fontSize: "14px"
          }}
        >
          <span>{`TVL: `}</span>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            $1,008,430
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "326px",
            left: "872px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "148px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 0px 4px 8px",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13px"
          }}
        >
          <button  type="button" style={{ position: "relative",fontWeight: "600" }}>Claim Rewards</button>
          <img
            style={{
              position: "relative",
              width: "18px",
              height: "18px",
              flexShrink: "0",
              display: "none"
            }}
            alt=""
            src="./assets/group-535.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "326px",
            left: "750px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "106px",
            height: "28px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 10px 4px 15px",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}
        >
          
          <button  type="button" style={{ position: "relative"  }} onClick={withdraw}>Withdraw</button>
          <img
            style={{
              position: "relative",
              width: "21px",
              height: "21px",
              flexShrink: "0",
              overflow: "hidden"
            }}
            alt=""
            src="./assets/icon--arrowdowncircle1.svg"
          />
        </div>
        <b
          style={{
            position: "absolute",
            top: "240.57px",
            left: "64px",
            fontSize: "22px"
          }}
        >
          BSHARE-BNB
        </b>
        <img
          style={{
            position: "absolute",
            top: "242px",
            left: "24px",
            width: "33px",
            height: "33px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bsharebnblp1@2x.png"
        />
        <img
          style={{
            position: "absolute",
            top: "94.5px",
            left: "205px",
            borderRadius: "3px",
            width: "111px",
            height: "26px"
          }}
          alt=""
          src="./assets/rectangle-22704.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "247.57px",
            left: "219.46px",
            borderRadius: "3px",
            backgroundColor: "rgba(0, 232, 162, 0.25)",
            filter: "blur(5px)",
            border: "1px solid #00e8a2",
            boxSizing: "border-box",
            width: "101px",
            height: "16px"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "99px",
            left: "210px",
            borderRadius: "3px",
            backgroundColor: "rgba(0, 232, 162, 0.5)",
            width: "101px",
            height: "16px",
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "12px"
          }}
        >
          <div style={{ position: "relative", fontWeight: "600" }}>
            Recommended
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "247.57px",
            left: "219.46px",
            borderRadius: "3px",
            backgroundColor: "rgba(0, 232, 162, 0.5)",
            width: "101px",
            height: "16px",
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "12px"
          }}
        >
          <div style={{ position: "relative", fontWeight: "600" }}>
            Recommended
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "326px",
            left: "627px",
            borderRadius: "50px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "107px",
            height: "28px",
            display: "flex",
            flexDirection: "row",
            padding: "4px 10px 4px 15px",
            alignItems: "center",
            justifyContent: "center",
            gap: "21px"
          }}
        >
          <button  type="button" style={{ position: "relative"  }} onClick={deposit}>Deposit</button>
          <img
            style={{
              position: "relative",
              width: "21px",
              height: "21px",
              flexShrink: "0",
              overflow: "hidden"
            }}
            alt=""
            src="./assets/icon--arrowdowncircle3.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "183px",
            left: "992px",
            width: "18px",
            height: "18px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "18px",
              height: "18px"
            }}
            alt=""
            src="./assets/ellipse-2872.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "2px",
              left: "3px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bshares4@2x.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "331px",
            left: "992px",
            width: "18px",
            height: "18px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "18px",
              height: "18px"
            }}
            alt=""
            src="./assets/ellipse-2872.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "2px",
              left: "3px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bshares4@2x.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "34px",
            left: "980px",
            width: "18px",
            height: "18px"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "18px",
              height: "18px"
            }}
            alt=""
            src="./assets/ellipse-2872.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "2px",
              left: "3px",
              width: "12px",
              height: "12px",
              objectFit: "cover"
            }}
            alt=""
            src="./assets/bshares4@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1082px",
          left: "197px",
          borderRadius: "10px",
          backgroundColor: "rgba(35, 40, 75, 0.75)",
          backdropFilter: "blur(10px)",
          border: "1px solid #728cdf",
          boxSizing: "border-box",
          width: "1045px",
          height: "186px"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "1125.9px",
          left: "274px",
          display: "inline-block",
          width: "638px",
          height: "18px"
        }}
      >
        BBOND can be purchased only on contraction periods, when TWAP of BOMB is
        below 1
      </div>
      <img
        style={{
          position: "absolute",
          top: "1203.75px",
          left: "799px",
          width: "417px",
          height: "0.5px"
        }}
        alt=""
        src="./assets/line-80.svg"
      />
      <b
        style={{
          position: "absolute",
          top: "1095.9px",
          left: "274px",
          fontSize: "22px"
        }}
      >{`Bonds `}</b>
      <div
        style={{
          position: "absolute",
          top: "1176.9px",
          left: "820px",
          fontSize: "16px",
          fontWeight: "300",
          textAlign: "center"
        }}
      >
        Bomb is over peg
      </div>
      <div
        style={{
          position: "absolute",
          top: "1482.6px",
          left: "823px",
          fontSize: "16px",
          fontWeight: "300",
          display: "none"
        }}
      >
        0.0000 UBond available in wallet
      </div>
      <b
        style={{
          position: "absolute",
          top: "1204px",
          left: "232px",
          fontSize: "22px",
          textAlign: "center"
        }}
      >
        BBond = 6.2872 BTCB
      </b>
      <div
        style={{
          position: "absolute",
          top: "1168px",
          left: "232px",
          fontSize: "16px",
          lineHeight: "25px",
          fontWeight: "300",
          textAlign: "center",
          display: "inline-block",
          width: "172px"
        }}
      >
        Current Price: (Bomb)^2
      </div>
      <div
        style={{
          position: "absolute",
          top: "1157px",
          left: "821px",
          fontSize: "16px",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        Purchase BBond
      </div>
      <div
        style={{
          position: "absolute",
          top: "1210.6px",
          left: "823px",
          fontSize: "16px",
          fontWeight: "600"
        }}
      >
        Redeem Bomb
      </div>
      <div
        style={{
          position: "absolute",
          top: "1163.3px",
          left: "1108.83px",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxSizing: "border-box",
          width: "107px",
          height: "28px",
          display: "flex",
          flexDirection: "row",
          padding: "4px 10px 4px 15px",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          fontSize: "15px",
          color: "rgba(255, 255, 255, 0.5)"
        }}
      >
        <div style={{ position: "relative" }}>Purchase</div>
        <img
          style={{
            position: "relative",
            width: "18.59px",
            height: "18.59px",
            flexShrink: "0",
            opacity: "0.5"
          }}
          alt=""
          src="./assets/group-2945.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1216.3px",
          left: "1108.62px",
          borderRadius: "50px",
          border: "1px solid #fff",
          boxSizing: "border-box",
          width: "106px",
          height: "28px",
          display: "flex",
          flexDirection: "row",
          padding: "4px 10px 4px 15px",
          alignItems: "center",
          justifyContent: "center",
          gap: "19px",
          fontSize: "15px"
        }}
      >
        <div style={{ position: "relative" }}>Redeem</div>
        <img
          style={{
            position: "relative",
            width: "21px",
            height: "21px",
            flexShrink: "0",
            overflow: "hidden"
          }}
          alt=""
          src="./assets/icon--arrowdowncircle4.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1173px",
          left: "544px",
          width: "148px",
          height: "71px",
          fontSize: "16px"
        }}
      >
        <div
          style={{ position: "absolute", top: "0px", left: "0px" }}
        >{`Available to redeem: `}</div>
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "55px",
            fontSize: "36px",
            fontWeight: "600"
          }}
        >
          456
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "1096px",
          left: "219px",
          width: "48px",
          height: "48px",
          objectFit: "cover"
        }}
        alt=""
        src="./assets/bbond1@2x.png"
      />
      <img
        style={{
          position: "absolute",
          top: "1200px",
          left: "560px",
          width: "39px",
          height: "39px",
          objectFit: "cover"
        }}
        alt=""
        src="./assets/bbond2@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "329.43px",
          left: "861px",
          borderRadius: "10px",
          width: "382px",
          height: "336px",
          overflow: "hidden",
          fontSize: "22px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "10px",
            backgroundColor: "rgba(35, 40, 75, 0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid #728cdf",
            boxSizing: "border-box",
            width: "382px",
            height: "336px"
          }}
        />
        <b style={{ position: "absolute", top: "8px", left: "19px" }}>
          Latest News
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "87.59px",
          left: "493px",
          fontSize: "10px",
          textAlign: "center"
        }}
      >
        Price
      </div>
      <div
        style={{
          position: "absolute",
          top: "87.59px",
          left: "322px",
          fontSize: "10px"
        }}
      >
        Current Supply
      </div>
      <div
        style={{
          position: "absolute",
          top: "87.59px",
          left: "402px",
          fontSize: "10px",
          textAlign: "center"
        }}
      >
        Total Supply
      </div>
      <div
        style={{
          position: "absolute",
          top: "415.5px",
          left: "196px",
          width: "317px",
          height: "40px",
          fontSize: "18px",
          color: "#000"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "317px",
            height: "40px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(25px)",
              border: "1px solid #728cdf",
              boxSizing: "border-box",
              width: "317px",
              height: "40px"
            }}
          />
          <b style={{ position: "absolute", top: "7.5px", left: "122.68px" }}>
            Chat on Discord
          </b>
        </div>
        <img
          style={{
            position: "absolute",
            top: "4.36px",
            left: "84.89px",
            width: "30.91px",
            height: "30.91px"
          }}
          alt=""
          src="./assets/ellipse-303.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "6px",
            left: "86.53px",
            width: "27.63px",
            height: "27.63px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/pw4945914-1@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "415.5px",
          left: "532px",
          width: "310px",
          height: "40px",
          fontSize: "18px",
          color: "#000"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "310px",
            height: "40px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "310px",
              height: "40px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(25px)",
                border: "1px solid #728cdf",
                boxSizing: "border-box",
                width: "310px",
                height: "40px"
              }}
            />
            <b
              style={{
                position: "absolute",
                top: "7.5px",
                left: "123.63px",
                display: "flex",
                alignItems: "center",
                width: "92.87px"
              }}
            >
              Read Docs
            </b>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "4.54px",
            left: "87.46px",
            width: "30.91px",
            height: "30.91px"
          }}
          alt=""
          src="./assets/ellipse-304.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "8.86px",
            left: "91.77px",
            width: "22.28px",
            height: "22.28px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/ww2991106-1@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "365.47px",
          left: "196px",
          width: "646px",
          height: "40px",
          fontSize: "24px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            background:
              "linear-gradient(225.09deg, rgba(0, 232, 162, 0.25), rgba(0, 173, 232, 0.25))",
            filter: "blur(5px)",
            width: "646px",
            height: "40px"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 245, 171, 0.5), rgba(0, 173, 232, 0.5))",
            border: "0.5px solid #e41a1a",
            boxSizing: "border-box",
            width: "646px",
            height: "40px"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "3.5px",
            left: "272px",
            fontWeight: "800"
          }}
        >
          Invest Now
        </div>
      </div>
      <div style={{ position: "absolute", top: "503.43px", left: "692px" }}>
        <span>{`TVL: `}</span>
        <span style={{ fontSize: "16px", fontWeight: "600" }}>$1,008,430</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "620.86px",
          left: "606px",
          borderRadius: "50px",
          border: "1px solid #fff",
          boxSizing: "border-box",
          width: "217px",
          display: "flex",
          flexDirection: "row",
          padding: "4px 0px 4px 8px",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          fontSize: "15px"
        }}
      >
        <div style={{ position: "relative", fontWeight: "600" }}>
          Claim Rewards
        </div>
        <img
          style={{
            position: "relative",
            width: "10px",
            height: "10px",
            flexShrink: "0",
            display: "none"
          }}
          alt=""
          src="./assets/group-5352.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "116.59px",
          left: "226px",
          borderRadius: "200px",
          backgroundColor: "#373747",
          width: "25px",
          height: "25px"
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "118.59px",
          left: "228px",
          width: "20px",
          height: "20px",
          objectFit: "cover"
        }}
        alt=""
        src="./assets/bomb1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "626px",
          left: "776px",
          width: "18px",
          height: "18px"
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "18px",
            height: "18px"
          }}
          alt=""
          src="./assets/ellipse-2872.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "3px",
            width: "12px",
            height: "12px",
            objectFit: "cover"
          }}
          alt=""
          src="./assets/bshares4@2x.png"
        />
      </div>
    </div>
  )
}

export default Dashboard
