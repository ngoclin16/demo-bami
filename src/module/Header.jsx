import React from "react";
import Main from "./Main";
import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyle>
      <NavStyle>
        <Nav> 
          <Button><img src="./images/Header/menu.svg"/></Button>
          <Logo><img src="./images/Header/BAMI.png"/></Logo>
        </Nav>
        <Nav>
          <ListIcon>
            <Icon_Social>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5ZM12 4.5C7.58161 4.5 4 8.08161 4 12.5C4 16.9184 7.58161 20.5 12 20.5C16.4184 20.5 20 16.9184 20 12.5C20 8.08161 16.4184 4.5 12 4.5ZM7.36946 17.7498C8.13328 18.424 9.0454 18.9341 10.0506 19.225C9.8111 18.868 9.59882 18.4499 9.41448 17.989C9.25461 17.5894 9.11267 17.1498 8.99112 16.6776C8.40307 16.9576 7.85722 17.3185 7.36946 17.7498ZM10.3429 17.6176C10.1869 17.2276 10.0479 16.7892 9.93003 16.3112C10.5991 16.1043 11.2966 15.9991 11.9994 16H12.0007C12.7034 15.9991 13.4009 16.1043 14.07 16.3111C13.9521 16.7892 13.8131 17.2276 13.657 17.6176C13.3995 18.2614 13.1054 18.7488 12.8044 19.0671C12.5044 19.3843 12.2324 19.5 12 19.5C11.7676 19.5 11.4956 19.3843 11.1956 19.0671C10.8946 18.7488 10.6005 18.2614 10.3429 17.6176ZM14.5855 17.989C14.7454 17.5894 14.8873 17.1498 15.0089 16.6776C15.5969 16.9576 16.1428 17.3185 16.6306 17.7497C15.8667 18.424 14.9546 18.9341 13.9494 19.225C14.1889 18.868 14.4012 18.4499 14.5855 17.989ZM15.2266 15.6775C15.9962 16.0166 16.7067 16.4751 17.3322 17.0355C18.2712 15.9325 18.8741 14.5346 18.9824 13H15.4936C15.4694 13.9445 15.3769 14.8473 15.2266 15.6775ZM17.3322 7.9645C18.2712 9.06745 18.8741 10.4654 18.9824 12H15.4936C15.4694 11.0555 15.3769 10.1527 15.2266 9.32252C15.9961 8.98337 16.7067 8.52488 17.3322 7.9645ZM14.2726 9.67226C14.394 10.3919 14.4709 11.1752 14.4932 12H9.50672C9.52903 11.1752 9.60601 10.3919 9.72736 9.67224C10.4637 9.89011 11.2292 10.0009 12 9.99998L11.9994 9.99998L12 9.49998L12.0007 9.99998L12 9.99998C12.7709 10.0009 13.5363 9.89012 14.2726 9.67226ZM9.72736 15.3277C9.60601 14.6081 9.52902 13.8248 9.50672 13H14.4932C14.4709 13.8248 14.394 14.6081 14.2726 15.3277C13.5363 15.1099 12.7709 14.9991 12 15L12.0007 15L12 15.5L11.9994 15L12 15C11.2292 14.9991 10.4637 15.1099 9.72736 15.3277ZM8.77335 15.6775C8.62309 14.8473 8.53061 13.9445 8.50638 13H5.01758C5.12587 14.5346 5.72878 15.9326 6.66785 17.0355C7.29334 16.4751 8.00385 16.0167 8.77335 15.6775ZM8.77335 9.32248C8.62309 10.1527 8.53061 11.0555 8.50638 12H5.01758C5.12587 10.4654 5.72878 9.06742 6.66786 7.96447C7.29335 8.52485 8.00386 8.98333 8.77335 9.32248ZM8.99112 8.32238C8.40308 8.04238 7.85724 7.68145 7.36947 7.25022C8.1333 6.57598 9.0454 6.06586 10.0506 5.775C9.81109 6.13205 9.59882 6.55011 9.41448 7.01095C9.25462 7.41059 9.11267 7.85016 8.99112 8.32238ZM11.1956 5.93293C11.4956 5.6157 11.7676 5.5 12 5.5C12.2324 5.5 12.5044 5.6157 12.8044 5.93293C13.1054 6.25121 13.3995 6.73861 13.657 7.38236C13.8131 7.7724 13.952 8.21079 14.07 8.68884C13.4009 8.89563 12.7034 9.00089 12.0007 8.99998H11.9994C11.2967 9.00089 10.5991 8.89562 9.93003 8.68881C10.0479 8.21077 10.1869 7.7724 10.3429 7.38236C10.6005 6.73861 10.8946 6.25121 11.1956 5.93293ZM16.6306 7.25024C16.1428 7.68148 15.5969 8.04241 15.0089 8.32242C14.8873 7.85018 14.7454 7.4106 14.5855 7.01096C14.4012 6.55011 14.1889 6.13205 13.9494 5.775C14.9546 6.06586 15.8667 6.57599 16.6306 7.25024Z" fill="#130A00"/>
            </svg>
            </Icon_Social>
            <Icon_FB>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.5C5.37165 0.5 0 5.87427 0 12.5C0 19.1283 5.37165 24.5 12 24.5C18.6283 24.5 24 19.1283 24 12.5C24 5.87427 18.6283 0.5 12 0.5ZM15.1195 7.74233H13.8707C12.8909 7.74233 12.7028 8.20738 12.7028 8.88929V10.3942H15.0385L14.7329 12.7534H12.7002V18.8044H10.2652V12.756H8.22992V10.3968H10.2652V8.65676C10.2652 6.63717 11.4984 5.53984 13.2985 5.53984C14.1607 5.53984 14.9027 5.60516 15.1195 5.6339V7.74233Z" fill="#130A00"/>
            </svg>
            </Icon_FB>
            <Icon_Tw>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.5C5.37165 0.5 0 5.87165 0 12.5C0 19.1283 5.37165 24.5 12 24.5C18.6283 24.5 24 19.1283 24 12.5C24 5.87427 18.6283 0.5 12 0.5ZM17.1496 10.5536C17.1548 10.6633 17.1574 10.773 17.1574 10.8854C17.1574 14.2636 14.5839 18.1617 9.88112 18.1617C8.43631 18.1617 7.0934 17.7384 5.9595 17.0121C6.16068 17.0356 6.36447 17.0487 6.56826 17.0487C7.76747 17.0487 8.87002 16.6385 9.74527 15.954C8.62704 15.9331 7.68125 15.1937 7.35467 14.1773C7.51143 14.2061 7.6708 14.2244 7.8354 14.2244C8.06793 14.2244 8.29523 14.193 8.50947 14.1355C7.33899 13.9004 6.45852 12.8658 6.45852 11.6274C6.45852 11.6169 6.45852 11.6065 6.45852 11.5934C6.8034 11.7841 7.19791 11.9017 7.61594 11.9121C6.9288 11.4549 6.47681 10.6711 6.47681 9.78282C6.47681 9.31515 6.60483 8.87622 6.8243 8.49739C8.08622 10.0441 9.96996 11.063 12.0967 11.1702C12.0523 10.982 12.0314 10.7887 12.0314 10.5875C12.0314 9.17668 13.1757 8.02972 14.5892 8.02972C15.3259 8.02972 15.9895 8.34063 16.4572 8.83703C17.0398 8.72208 17.5859 8.51045 18.0797 8.21522C17.889 8.81091 17.484 9.31254 16.9562 9.62868C17.4735 9.56597 17.9673 9.43011 18.4246 9.22632C18.0823 9.74363 17.6486 10.193 17.1496 10.5536Z" fill="#130A00"/>
            </svg>
            </Icon_Tw>

            <Icon_Tel>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5C0 19.1274 5.37258 24.5 12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5ZM9.79997 18L10.0041 14.9411L10.004 14.941L15.5684 9.91947C15.8126 9.70273 15.5151 9.59704 15.1909 9.79363L8.32361 14.1261L5.35731 13.2003C4.71672 13.0042 4.71212 12.564 5.50113 12.2475L17.0601 7.7904C17.5881 7.55072 18.0976 7.9172 17.8961 8.72522L15.9276 18.0015C15.7901 18.6607 15.3918 18.8184 14.84 18.5139L11.8413 16.2984L10.4 17.7C10.3954 17.7044 10.3909 17.7088 10.3864 17.7132C10.2252 17.8701 10.0918 18 9.79997 18Z" fill="#130A00"/>
            </svg>
            </Icon_Tel>
          </ListIcon>
          <Button_Conn>
                Connect
          </Button_Conn>
        </Nav>
      </NavStyle>
      <Sidebar>

      </Sidebar>
      
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  position: relative;
  width: 100%;
  
`
const NavStyle = styled.div`
  /* display: flex;
  justify-content: space-between;
  padding: 0 16px 0 5px; */
  position: fixed;
    top: 0px;
    left: 0px;
    transition: top 0.2s ease 0s;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 8px;
    padding-right: 16px;
    width: 100%;
    height: 64px;
    background-color: rgb(250, 241, 225);
    border-bottom: 2px solid rgba(133, 133, 133, 0.1);
    z-index: 20;
    transform: translate3d(0px, 0px, 0px);

`
const Nav = styled.div`
  display: flex;
  /* padding: 10px 0px 15px 0; */
`

const Button = styled.div`
  color: rgb(12,7,0);
  padding: 5px 10px;
  border-radius: 8px;
`
const Logo = styled.div`
  display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const ListIcon = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 20px;
`
const Button_Conn = styled.button`
  -webkit-box-align: center;
    align-items: center;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
    box-shadow: rgb(0 0 0) 2px 2px 0px;
    height: 32px;
    padding: 0px 16px;
    background-color: rgb(187, 84, 50);
    color: rgb(249, 223, 175);
    margin-right: 25px;
`
const Icon_Social = styled.div`
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
    color: rgb(12, 7, 0);
`
const Icon_FB = styled.div`
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
    color: rgb(12, 7, 0);
`
const Icon_Tw = styled.div`
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
    color: rgb(12, 7, 0);
`
const Icon_Tel = styled.div`
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
    color: rgb(12, 7, 0);
`

const Sidebar = styled.div`
  
`