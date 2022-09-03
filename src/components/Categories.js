import './Categories.css';
import category_1 from '../assets/category-1.jpeg';
import category_2 from '../assets/category-2.jpeg';
import category_3 from '../assets/category-3.jpeg';
import category_4 from '../assets/category-4.jpeg';
import category_5 from '../assets/category-5.jpeg';
import category_6 from '../assets/category-6.jpeg';
import category_7 from '../assets/category-7.jpeg';
import category_8 from '../assets/category-8.jpeg';

const Categories = () => {
    return (
        <section id="categories" className="categories">
            <h2 className="section-header">Top categories</h2>
            <div className="container categories-list">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_1 } />
                            </div>
                            <p className="card-text">Design</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_2 } />
                            </div>
                            <p className="card-text">Development</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_3 } />
                            </div>
                            <p className="card-text">Marketing</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_4 } />
                            </div>
                            <p className="card-text">IT and Software</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_5 } />
                            </div>
                            <p className="card-text">Personal Development</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_6 } />
                            </div>
                            <p className="card-text">Business</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_7 } />
                            </div>
                            <p className="card-text">Photography</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card category">
                            <div className="wrapper">
                                <img className="card-img" src={ category_8 } />
                            </div>
                            <p className="card-text">Music</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;