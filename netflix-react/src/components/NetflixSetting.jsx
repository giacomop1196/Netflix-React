import { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap"

const NetflixSetting = (props) => {

    return (
        <Container fluid className="py-4">
            <Row>
                <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3">
                    <h1 className="pb-3 border-bottom border-secondary border-opacity-25">Account</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 d-flex flex-column flex-md-row">
                    <div className="mb-3 mb-md-0 me-md-3 w-25">
                        <h5 className="text-muted">MEMBERSHIP & BILLING</h5>
                        <Button variant="light" className="rounded-0 text-dark px-4 py-2">Cancel Membership</Button>
                    </div>

                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0 fw-bold">{props.user.email}</p>
                            <p className="text-primary m-0 cursor-pointer">Change account email</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-muted m-0">Password: ********</p>
                            <p className="text-primary m-0 cursor-pointer">Change password</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-muted m-0">Phone: {props.user.phone_number}</p>
                            <p className="text-primary m-0 cursor-pointer">Change phone number</p>
                        </div>

                        <div className="pb-3 border-bottom border-secondary border-opacity-25"></div>

                        <div className="d-flex justify-content-between">
                            <p className="text-muted m-0"><i class="bi bi-paypal"></i> PayPal {props.user.email}</p>
                            <div>
                                <p className="text-primary m-0 cursor-pointer">Update payment info</p>
                                <p className="text-primary text-end m-0 cursor-pointer">Billing details</p>
                            </div>
                        </div>

                        <div className="pb-3 border-bottom border-secondary border-opacity-25"></div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div></div>
                            <div>
                                <p className="text-primary m-0 cursor-pointer">Redeem gift card or promo code</p>
                                <p className="text-primary text-end m-0 cursor-pointer">Where to buy gift cards</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 d-flex flex-column flex-md-row border-bottom border-top border-secondary border-opacity-25">
                    <div className="mb-3 mb-md-0 me-md-3 w-25">
                        <h5 className="text-muted">PLAN DETAILS</h5>
                    </div>

                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <p className="m-0 fw-bold">Premium</p>
                                <div className="px-1 border border-secondary m-2">ULTRA <i class="bi bi-badge-hd"></i></div>
                            </div>
                            <p className="text-primary m-0 cursor-pointer">Change plan</p>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 d-flex flex-column flex-md-row border-bottom border-secondary border-opacity-25">
                    <div className="mb-3 mb-md-0 me-md-3 w-25">
                        <h5 className="text-muted">SETTINGS</h5>
                    </div>

                    <div className="flex-grow-1">
                        <div>
                            <p className="text-primary m-0 cursor-pointer">Parental controls</p>
                            <p className="text-primary m-0 cursor-pointer">Test participation</p>
                            <p className="text-primary m-0 cursor-pointer">Manage download devices</p>
                            <p className="text-primary m-0 cursor-pointer">Activate a device</p>
                            <p className="text-primary m-0 cursor-pointer">Recent device streaming activity</p>
                            <p className="text-primary m-0 cursor-pointer">Sign out of all devices</p>
                        </div>
                    </div>
                </Col>


                <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 d-flex flex-column flex-md-row border-bottom border-top border-secondary border-opacity-25">
                    <div className="mb-3 mb-md-0 me-md-3 w-25">
                        <h5 className="text-muted">MY PROFILE</h5>
                    </div>

                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <Image src={props.user.profile_photo} alt="Profile Avatar" className="img-fluid img-profile-setting rounded-0 me-2 cursor-pointer" />
                                <p className="m-0">{props.user.name} {props.user.surname}</p></div>
                            <div>
                                <p className="text-primary m-0 text-end cursor-pointer">Manage Profiles</p>
                                <p className="text-primary text-end m-0 cursor-pointer">Add profile email</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-primary m-0 cursor-pointer">Language</p>
                            <p className="text-primary m-0 cursor-pointer">Viewing activity</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-primary m-0 cursor-pointer">Playback settings</p>
                            <p className="text-primary m-0 cursor-pointer">Ratings</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-primary m-0 cursor-pointer">Subtitle appearance</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NetflixSetting