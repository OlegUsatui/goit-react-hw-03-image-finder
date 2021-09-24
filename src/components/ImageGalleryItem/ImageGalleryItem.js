import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    render() {
        return (
            <>
                {this.props.images.map(image => (
                    <li className={css.ImageGalleryItem} onClick={() => this.props.openModal(image.largeImageURL)} key={image.id}>
                        <img src={image.webformatURL} alt="" className={css.ImageGalleryItemImage} />
                    </li>
                ))}
            </>
        );
    };
};
