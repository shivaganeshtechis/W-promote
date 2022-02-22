import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import plane from '../assets/img/plane.png';
import Footer from '../components/Footer';
import { getPatents } from '../reducks/patents/selectors';
import { fetchpatents } from '../reducks/patents/operations';

const axios = require('axios');

const Home = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const patents = getPatents();
    // const [students, setStudents] = useState(null);
    const patentApiIndexConst = {
        id: 0,
        image: 10,
        name: 2,
        discription: 3
    };
    useEffect(() => {
        dispatch(fetchpatents());
        // axios
        //     .get('https://api.nasa.gov/techtransfer/patent/?engine&api_key=VN6vYYdFF8xFWzpLWrkziYlITvRz2CHhd7weRl0O')
        //     .then(function (response) {
        //         setStudents(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, []);
    return (
        <>
            <Header />
            <section class="main">
                <div class="main-header">
                    <h1>PATENT PORTFOLIO</h1>
                    <div class="main-description">
                        <img src={plane} alt="" />
                        <div class="main-aerospace">
                            <h3>AEROSPACE</h3>
                            <p>
                                The design, construction and operation of aircraft based on the scientific study or art
                                of flight.
                            </p>
                        </div>
                    </div>
                    <div class="main-input-button">
                        <input type="text" />
                        <button>GO</button>
                    </div>
                    <hr />
                    <div class="patents">
                        {patents &&
                            patents.map(patent => {
                                return (
                                    <div class="patent-box" key={patent.id}>
                                        <img src={patent[patentApiIndexConst['image']]} alt="" />
                                        <h3>{patent[patentApiIndexConst['name']]}</h3>
                                        <p>{patent[patentApiIndexConst['discription']]}</p>
                                        <div class="patent-box-btn">
                                            <button id="read-more">Read More</button>
                                            <button id="wish-list">+ Add Wishlist</button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default Home;
