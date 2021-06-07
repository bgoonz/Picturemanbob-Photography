import React from 'react';
import _ from 'lodash';

import {getPageByFilePath, withPrefix} from '../utils';

export default class SmallBuyButton extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        let component = _.get(this.props, 'component', null);
        return (
            <button className={component + '__item-buy button button--icon-only snipcart-add-item'}
                data-item-name={_.get(product_page, 'frontmatter.title', null)}
                data-item-url={_.get(product_page, '__metadata.urlPath', null)}
                data-item-price={_.get(product_page, 'frontmatter.price', null)}
                {...(_.get(product_page, 'frontmatter.category', null) ? ((() => {
                    let category_page = getPageByFilePath(this.props.pages, _.get(product_page, 'frontmatter.category', null));
                    return ({"data-item-categories": _.get(category_page, 'frontmatter.title', null)});
                })()) : null)}
                {...(_.get(product_page, 'frontmatter.default_thumbnail_image', null) ? ({"data-item-image": withPrefix(_.get(product_page, 'frontmatter.default_thumbnail_image', null))}) : null)}
                data-item-description={_.get(product_page, 'frontmatter.description', null)}
                data-item-id={_.get(product_page, 'frontmatter.id', null)}>
        
            </button>
        );
    }
}
