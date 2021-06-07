import React from 'react'
import {
    TheContent,
    TheSidebar,
    TheFooter,
    TheHeader
} from './index'

const TheLayoutLogIn = () => {

    return (
        <div className="c-app c-default-layout">
            <div className="c-wrapper">
                <div className="c-body">
                    <TheContent />
                </div>
                <TheFooter />
            </div>
        </div>
    )
}

export default TheLayoutLogIn
