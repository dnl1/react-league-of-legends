import React, { Component } from 'react';
import BackButton from '../../components/backButton';
import utils from "../../helpers/utils";
import '../../../scss/pages/championDetail.scss';
import Loader from '../../components/loader';

class ChampionsDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            images: [],
            loading: true
        };
    }

    async componentDidMount() {
        utils.disableScroll();
        const { name } = this.props.match.params;
        let images = await this.getImages(name);
        this.setState({ name, images: images, loading: false });
    }

    fixName(name) {
        if (name.includes('\'')) {
            let splitedName = name.split('\'');
            return utils.capitalize(splitedName[0]) + utils.capitalize(splitedName[1]);
        }

        if (name.includes(' ')) {
            let splitedName = name.split(' ');
            return utils.capitalize(splitedName[0]) + utils.capitalize(splitedName[1]);
        }

        return name;
    }

    async getImages(name) {
        let images = [];
        let looping = true;
        let i = 0;

        name = this.fixName(name);

        while (looping) {
            let url = `//ddragon.leagueoflegends.com/cdn/img/champion/splash/${utils.capitalize(name)}_${i}.jpg`;
            await fetch(url).then((res) => {
                if (res.status === 200) {
                    images.push(url);
                    i++;
                }
                else looping = false;
            });
        }

        return images;
    }

    onBackButtonClick() {
        utils.enableScroll();
        window.history.back();
    }

    render() {
        return (
            <div className="champion__detail">
                <BackButton onClick={this.onBackButtonClick} />
                {
                    this.state.images.map((url) => {
                        return (
                            <div className="champion__detail__image-container" key={url}>
                                <a href={url} target="_blank">
                                    <img src={url} className="splash-art" alt="Splash" width="600" />
                                </a>
                            </div>
                        )
                    })
                }
                <div className="champion__detail__cover--reflex" style={{ backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${utils.capitalize(this.state.name)}_0.jpg)` }}></div>
                <Loader loading={this.state.loading} />
            </div>
        );
    }
}

export default ChampionsDetail;