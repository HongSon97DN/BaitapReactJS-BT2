import React, { Component } from 'react'
const dataGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g1.jpg"
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g2.jpg",
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g3.jpg"
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g4.jpg"
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g5.jpg"
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g6.jpg"
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g7.jpg"
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g8.jpg"
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "src": "./glassesImage/g9.jpg"
    }
]
export default class BodyComponent extends Component {

    state = {
    };

    renderGlass = () => {
        return (
            <>
                <img className='render-img' src={this.state.url} alt="" />
                <div className='render-bg'>
                    <h3 className='render-name'>{this.state.name}</h3>
                    <p className='render-price'>{this.state.price}</p>
                    <p className='render-desc'>{this.state.desc}</p>
                </div>
            </>
        )
    }

    changeGlass = (id) => {
        const dataGlass = dataGlasses.find(item => item.id === id);
        this.setState(dataGlass);
    }

    showGlassList = () => {
        return dataGlasses.map(glass => {
            const { id, src } = glass;
            return <div className='d-flex' key={id}>
                <img onClick={() => { this.changeGlass(id) }} className='px-3' style={{ width: "150px", height: "100px" }} src={src} alt="" />
            </div>
        })
    }

    render() {
        return (
            <div className="body-content">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-5 d-flex justify-content-around">
                            <div className='body-img'>
                                <img style={{ width: "300px", height: "400px" }} src="./glassesImage/model.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-5 d-flex justify-content-around">
                            <div className='body-img-right'>
                                <img style={{ width: "300px", height: "400px" }} src="./glassesImage/model.jpg" alt="" />
                                {this.state.id && this.renderGlass()}
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 bg-light">
                        {this.showGlassList()}
                    </div>
                </div>
            </div>
        )
    }
}
