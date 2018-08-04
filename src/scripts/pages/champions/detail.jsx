import React, { Component } from 'react';
import utils from "../../helpers/utils";

class ChampionsDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            images: []
        }
    }

    async componentDidMount() {
        const { name } = this.props.match.params;
        let images = await this.getImages(0, name);
        this.setState({ name, images: images });
    }

    async getImages(i = 0, name) {
        let images = [];
        let url = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${utils.capitalize(name)}_${i}.jpg`;

         await fetch(url).then((res) => {
            if (res.status === 200) {
                images.push(url);
                i++
                this.getImages(i, name);
            }
        })

        return images;
    }

    render() {
        console.log('renedr', this.state);

        return (
            <div className="champions__detail">
                {
                    this.state.images.map((url) => {
                        return <img src={url} alt="Splash" />
                    })
                }
            </div>
        );
    }
}

export default ChampionsDetail;