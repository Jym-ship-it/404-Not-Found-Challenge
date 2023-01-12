import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Scarecrow from "../Assets/Images/Scarecrow.png"

export default function Homepage() {
    const style = {
        mainCon : {
            margin : "40px 77px",
            "@media only screen and (max-width : 400px)":{
                margin : "20px 0px"
            }
        },
        title : {
            fontFamily : "Inconsolata",
            fontSize : "24px",
            fontWeight: "700",
            "@media only screen and (max-width : 400px)":{
                marginLeft : "24px"
            }
        },
        bannerCon:{
            marginTop : "100px",
            display : "flex",
            "@media only screen and (max-width : 400px)":{
                flexDirection : "column",
                alignItems : "center"
            }
        },
        bannerImg:{
            height : "447.43px",
            width : "539.22px",
            "@media only screen and (max-width : 400px)":{
                height : "238px",
                width : "286.83px",
            }
        },
        text1:{
            fontFamily:"Space Mono",
            fontWeight:"700",
            fontSize:"64px",
            "@media only screen and (max-width : 400px)":{
                fontSize:"48px"
            }
        },
        infoCon:{
            marginLeft:"50px",
            "@media only screen and (max-width : 400px)":{
                marginLeft:"20px",
                marginTop : "30px"
            }
            
        },
        info:{
            marginTop : '45px',
            maxWidth : "381px",
            
        },
        infoText:{
            fontFamily : "Space Mono",
            fontSize:"24px",
            fontWeight : "400",
            color : "#4F4F4F",
            "@media only screen and (max-width : 400px)":{
                fontSize:"18px"
            }
        },
        button:{
            backgroundColor : "#333333",
            color : "#FFFFFF",
            fontFamily : "Space Mono",
            fontSize : "14px",
            padding : "24px 43px",
            borderRadius : "0px",
            marginTop : "45px",
            "&:hover" : {
                backgroundColor: "#4D4D4D"
            }
        },
        footer : {
            textAlign : "center",
            marginTop : "40px",
            fontFamily : "Montserrat",
            color : "#BDBDBD",
            fontSize:'14px'
        },
        link : {
            fontFamily : "Montserrat",
            color : "#BDBDBD",
            fontSize:'14px'
        }
    }
  return (
    <Box sx = {style.mainCon}>
        <Typography sx = {style.title}>404 NOT FOUND</Typography>
        <Box sx = {style.bannerCon}>
            <Box component='img' src = {Scarecrow} alt = "Scarecrow.png" sx = {style.bannerImg}></Box>
            <Box sx = {style.infoCon}>
                <Typography sx = {style.text1}>I have a bad news for you</Typography>
                <Box sx = {style.info}>
                    <Typography sx = {style.infoText}>The page you are looking for might be removed or is temporarily unavailable</Typography>
                </Box>
                <Button variant='filled' sx = {style.button}>Back to homepage</Button>
            </Box>
        </Box>
        <footer>
            <Typography sx = {style.footer}>created by <Link sx = {style.link} underline="none" href='https://devchallenges.io/portfolio/Jym-ship-it' rel = "noopener">Jym-ship-it</Link> - devChallenges.io</Typography>
        </footer>
    </Box>
  )
}
