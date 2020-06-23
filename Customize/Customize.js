import React, { Component } from 'react';
import './Customize.css';
import Options from '../Options/Options';
import OptionSection from '../OptionSection/OptionSection';
import slugify from 'slugify';

class Customize extends Component {
 render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
        return (
            <Options
            selected={this.props.selected}
            itemHash={itemHash}
            feature={feature}
            item={item}
            key={item.name}
            updateFeature={this.props.updateFeature}   
          />
      );
    });

        return (
            <OptionSection
            key={idx} 
            feature={feature}
            options={options}
            featureHash={featureHash}
        />
      
        );
    });
       
        return(
         <form className="Customize">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );
    }
}

export default Customize;