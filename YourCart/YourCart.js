import React, { Component } from 'react';
import './YourCart.css';
import PriceSection from '../PriceSection/PriceSection';
import TotalPrice from '../TotalPrice/TotalPrice';

class YourCart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

        return (
            <PriceSection
                featureHash={featureHash}
                feature={feature}
                selectedOption={selectedOption.name}
                cost={selectedOption.cost}
                key={selectedOption.name}
            />
          );
        });

        return (
        <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <TotalPrice
                    selected={this.props.selected}                
                />
        </section>
        )
    }

}

export default YourCart;