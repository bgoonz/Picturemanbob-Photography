import React from 'react';
import _ from 'lodash';

import {withPrefix, Link} from '../utils';

export default class ContactSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width contact__section" data-id={_.get(section, 'section_id', null)}>
              {_.get(section, 'image', null) && (<iframe src={https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12055.780872352312!2d-74.13687730329026!3d40.9388678056402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fb794b3dd2ad%3A0xa62e9978c8bf5d71!2sFair%20Lawn%2C%20NJ%2007410!5e0!3m2!1sen!2sus!4v1623063322428!5m2!1sen!2sus} width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" className="contact__image"/>)}
              <div className="contact__text-container">
                <h3 className="contact__title">Have any questions? <br/> Contact us.</h3>
                <div className="contact__info-container">
                  <p className="contact__address">{_.get(section, 'address', null)}</p>
                  <p className="contact__telephone">{_.get(section, 'phone', null)}</p>
                  <p className="contact__email">{_.get(section, 'email', null)}</p>
                  <div className="contact__separator" />
                  {_.get(section, 'mapUrl', null) && (
                  <Link className="contact__map-link link link--filled link--reversed" href={_.get(section, 'mapUrl', null)}>
                    On the map
                    <svg width="17" height="24" viewBox="0 0 17 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.25 0c-4.574 0-8.25 3.674-8.25 8.25 0 4.574 8.25 15.75 8.25 15.75s8.25-11.175 8.25-15.75c0-4.576-3.676-8.25-8.25-8.25zM8.25 11.999c-2.099 0-3.75-1.65-3.75-3.75 0-2.099 1.649-3.75 3.75-3.75 2.099 0 3.75 1.649 3.75 3.75s-1.651 3.75-3.75 3.75z" />
                    </svg>
                  </Link>
                  )}
                </div>
              </div>
            </section>
        );
    }
}
