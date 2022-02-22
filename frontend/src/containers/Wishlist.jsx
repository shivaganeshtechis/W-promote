import React from 'react';

const Wishlist = () => {
    return (
        <>
            <Header />
            <div class="patents">
                <div class="patent-box">
                    <img src="img/img5.png" alt="" />
                    <h3>Aircraft Engine Icing Event Avoidance and Mitigation</h3>
                    <p>
                        Glenn’s novel system uses an engine-system simulation tool and a compression flow-analysis code
                        to detect icing risk and location for aircraft. The existence of an ice-crystal environment in
                        the atmosphere will be determined by one or more of three methods: (1) an external data…
                    </p>
                    <div class="patent-box-btn">
                        <button id="read-more">Read More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
