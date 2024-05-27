import React from 'react'
import { Navigations } from '../components/Navigations'
import { Toggle } from '../components/Toggle'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import Styles from './Styles.module.css'
import { AiFillThunderbolt } from 'react-icons/ai'



export const ProfilePage = () => {
  return (
    <main className='homePageMain'>
        <Navigations 
            Home='Home'
            Dashboard='Dashboard' 
            Services='Services'
            showButtons = {false}        
       />
       <Toggle />
       <ProfileHeading />
       <ProfileDetails />
       <Button customStyle={Styles.premiumButton} value="Sign Out"/>
    </main>
  )
}

const ProfileHeading =()=>{
    return(
        <section className={Styles.profileHeading}>
            <section className={Styles.section1}>
                <CgProfile className={Styles.profileIcon}/>
                <div className={Styles.profileHeading1}>
                    <div className={Styles.profileHeading1A}>
                        <p>Users Name</p>
                    </div>
                    <div className={Styles.profileHeading1B}>
                        <Link>Overview</Link>
                        <Link>Favorites</Link>
                        <Link>Shows</Link>
                        <Link>Settings</Link>
                    </div>
                </div>
            </section>
            <section className={Styles.profileHeading2}>
                <span>Subscribe to premium now</span>
                <div className={Styles.profileHeading2A}>
                    <div className={Styles.section1}>
                        <AiFillThunderbolt className={Styles.profileIcon}/>
                        {/* <img src="/Vector (8).png/" alt="" /> */}
                        <p>You will be 100% guaranteed access to all features and services associated with this plan</p>
                    </div>
                    <Button value="Subscribe now"/>
                </div>
            </section>
       </section>
    )
}

const ProfileDetails =()=>{
    return(
        <section className={Styles.ProfileDetails}>
            <p>Details</p>
            <section>
                <div className={Styles.ProfileDetails1}>
                    <p>First name</p>
                    <p>Middle name</p>
                    <p>Last name</p>
                </div>
                <div className={Styles.ProfileDetails1}>
                    <p>Precious</p>
                    <p>Mary</p>
                    <p>Chris</p>
                </div>
            </section>

            <div>
                <p>Email</p>
                <p>maryprecious@gmail.com</p>
            </div>

            <div>
                <p>Phone number</p>
                <p>08163546434</p>
            </div>

            <div>
                <p>Plan Detail</p>
                <p>Standard</p>
            </div>

            <div>
                <p>Join on</p>
                <p>2nd April 2024</p>
            </div>

        </section>
    )
}


