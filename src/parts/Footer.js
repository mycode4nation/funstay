import React from 'react'
import Button from 'elements/button'
import IconText from 'parts/IconTest'

export default function Footer() {
    return (
        <footer>
            <div className ="container">
                <div className="row">
                    <div className ="col-auto" style={{width:350}}>
                        <IconText/>
                          <p className ="brand-tagline">
                          We kaboom yout beauty  holiday instanly and memorable
                          </p>
                       
                    </div>
                <div className ="col-auto mr-5">
                    <h6 className="mt-2">For Beginer</h6>
                    <ul className ="list-group list-group-flush">
                        <li className = "list-group-item">
                            <Button type ="link" href="/register">New Acount</Button>
                        </li>
                        <li className = "list-group-item">
                            <Button type ="link" href="/properties">Start Booking Room</Button>
                        </li>
                        <li className = "list-group-item">
                            <Button type ="link" href="/use-payments">Use Payment</Button>
                        </li>
                    </ul>
                </div>

                <div className = "col-2 mr-5">
                <h6 className="mt-2">Explore Us</h6>
                    <ul className ="list-group list-group-flush">
                        <li className = "list-group-item">
                            <Button type ="link" href="/careers">Our Careers</Button>
                        </li>
                        <li className = "list-group-item">
                            <Button type ="link" href="/privacy">Privacy</Button>
                        </li>
                        <li className = "list-group-item">
                            <Button type ="link" href="/terms">Terms & Conditions</Button>
                        </li>
                    </ul>
                </div>
                
                <div className = "col-3 ">
                <h6 className="mt-2">Contact Us</h6>
                    <ul className ="list-group list-group-flush">
                        <li className = "list-group-item">
                            <Button isExternal type ="link" href="mailto:support@funstay.id">support@funstay.id</Button>
                        </li>
                        <li className = "list-group-item">
                            <Button isExternal type ="link" href="tel:+622133459">021-33459</Button>
                        </li>
                        <li className = "list-group-item">
                            <span>funstay Oy, Malang</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className ="row">
                <div className ="col text-center copyrights">
                    Copyright 2020 All Right Reserved Funstay
                </div>
            </div>
            </div>
        </footer>
    )
}
